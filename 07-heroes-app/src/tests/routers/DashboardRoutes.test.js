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
  test('debe mostrarse correctamente', () => {
    
    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        {/* Permite hacer pruebas en componentes que hacen uso del useNavigate */}
        <MemoryRouter>
          <DashboardRoutes />
        </MemoryRouter>
      </AuthContext.Provider>
    );
    console.log(wrapper.html());
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.text-info > span').text().trim()).toBe('Homero');
  });
});