import "@testing-library/jest-dom";
import { mount } from "enzyme";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { AuthContext } from "../../../auth/authContext";
import { LoginScreen } from "../../../components/login/LoginScreen";
import { types } from "../../../types/types";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe('Pruebas con LoginScreen', () => {

  const contextValue = {
    user: {
      logged: false,
    },
    dispatch: jest.fn(),
  };

  const wrapper = mount(
    <AuthContext.Provider value={contextValue}>
      {/* Permite hacer pruebas en componentes que hacen uso del useNavigate */}
      <MemoryRouter initialEntries={["/login"]}>
        <Routes>
          <Route path="/login" element={<LoginScreen />} />
        </Routes>
      </MemoryRouter>
    </AuthContext.Provider>
  );

  test("debe mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe llamar el login, el navigate y el dispatch con los parámetros correctos", () => {
    const handleClick = wrapper.find("button").prop("onClick");

    handleClick();

    expect(contextValue.dispatch).toHaveBeenCalledWith({
      payload: { name: 'Homero Thompson' },
      type: types.login,
    });

    expect(mockNavigate).toHaveBeenCalledWith("/marvel", { replace: true });

    localStorage.setItem('lastPath', '/dc');

    handleClick();

    expect(mockNavigate).toHaveBeenCalledWith("/dc", { replace: true });
  });
});