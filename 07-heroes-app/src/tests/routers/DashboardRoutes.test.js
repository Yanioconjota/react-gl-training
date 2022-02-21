import "@testing-library/jest-dom";
import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../auth/authContext";
import DashboardRoutes from "../../routers/DashboardRoutes";

describe('Pruebas con DashboardRoutes', () => {

  const contextValue = {
    user: {
      logged: true,
      name: 'Homero'
    }
  };
  test('debe mostrarse correctamente la ruta por defecto (Marvel)', () => {
    
    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        {/* Permite hacer pruebas en componentes que hacen uso del useNavigate */}
        <MemoryRouter initialEntries={ ['/'] }>
          <DashboardRoutes />
        </MemoryRouter>
      </AuthContext.Provider>
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.text-info > span').text().trim()).toBe('Homero');
    expect(wrapper.find('h1').text().trim()).toBe('Marvel Screen');
  });

  test('debe mostrarse correctamente la ruta DC', () => {
    
    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        {/* Permite hacer pruebas en componentes que hacen uso del useNavigate */}
        <MemoryRouter initialEntries={ ['/dc'] }>
          <DashboardRoutes />
        </MemoryRouter>
      </AuthContext.Provider>
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('h1').text().trim()).toBe('DC Screen');
  });
});