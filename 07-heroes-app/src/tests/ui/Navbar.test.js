import "@testing-library/jest-dom";
import { mount } from "enzyme";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { AuthContext } from "../../auth/authContext";
import { Navbar } from "../../components/ui/NavBar";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe('Pruebas con Navbar', () => {

  const typesDemo = {
    login: "[auth] Login",
    logout: "[auth] Logout",
  };

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
          <Route path="/" element={<Navbar/>}/>
        </Routes>
      </MemoryRouter>
    </AuthContext.Provider>
  );
  test('debe mostrar el componente correctamente', () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(".text-info > span").text().trim()).toBe("Homero");
  });

  test('debe llamar el logout, el navigate y el dispatch con los parámetros correctos', () => {
    wrapper.find('#logout').simulate('click');
    //expect(handleLogout).toHaveBeenCalled();
    expect(contextValue.dispatch).toHaveBeenCalledWith({
      type: typesDemo.logout,
    });
    expect(mockNavigate).toHaveBeenCalledWith('/login', {replace: true});
  });
});