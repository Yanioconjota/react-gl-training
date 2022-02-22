import "@testing-library/jest-dom";
import { mount } from "enzyme";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { AuthContext } from "../../auth/authContext";
import { LoginScreen } from "../../../components/login/LoginScreen";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe('Pruebas con LoginScreen', () => {

  const contextValue = {
    user: {
      logged: true,
      name: "Homero",
    },
    dispatch: jest.fn(),
  };

  const wrapper = mount(
    <AuthContext.Provider value={contextValue}>
      {/* Permite hacer pruebas en componentes que hacen uso del useNavigate */}
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" element={<LoginScreen />} />
        </Routes>
      </MemoryRouter>
    </AuthContext.Provider>
  );

  test('debe mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });
});