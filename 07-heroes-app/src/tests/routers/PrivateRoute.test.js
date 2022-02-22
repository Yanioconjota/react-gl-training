import "@testing-library/jest-dom";
import { mount } from "enzyme";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { AuthContext } from "../../auth/authContext";
import PrivateRoute from "../../routers/PrivateRoute";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  Navigate: () => <span>Redirecting</span>,
}));

describe('Pruebas con PrivateRoute', () => {

  Storage.prototype.setItem = jest.fn();

  const contextValue = {
    user: {
      logged: true,
      name: "Homero",
    }
  };

  test('debe mostrar el componente si está auténticado y guardar en localStorage', () => {
    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        {/* Permite hacer pruebas en componentes que hacen uso del useLocation */}
        <MemoryRouter initialEntries={["/"]}>
          <PrivateRoute>
            <h1>Private Component</h1>
          </PrivateRoute>
        </MemoryRouter>
      </AuthContext.Provider>
    );
    // La ruta esperada por localStorage va a ser la declarada en initialEntries
    expect(wrapper.text().trim()).toBe('Private Component');
    expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/');
  });

  test('debe bloquear el componente si no está auténticado', () => {
    const contextValue = {
      user: {
        logged: false
      }
    };
    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        {/* Permite hacer pruebas en componentes que hacen uso del useLocation */}
        <MemoryRouter initialEntries={["/"]}>
          <PrivateRoute>
            <h1>Private Component</h1>
          </PrivateRoute>
        </MemoryRouter>
      </AuthContext.Provider>
    );
    expect(wrapper.text().trim()).toBe('Redirecting');
  })
});
