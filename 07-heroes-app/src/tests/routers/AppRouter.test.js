import "@testing-library/jest-dom";
import { mount } from "enzyme";
import { AuthContext } from "../../auth/authContext";
import AppRouter from "../../routers/AppRouter";

describe('pruebas con AppRouter', () => {
  test('debe mostrar el login si el usuario no está autenticado', () => {
    const contextValue = {
      user: {
        logged: false,
      },
    };
    const wrapper = mount(
      <AuthContext.Provider value={ contextValue }>
        <AppRouter/>
      </AuthContext.Provider>);
    console.log(wrapper.html());
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('h1').text().trim()).toBe('Login');
  });

  test('debe mostrar el componente Marvel si el usuario está autenticado', () => {
    const contextValue = {
      user: {
        logged: true,
        name: 'Homero'
      },
    };
    const wrapper = mount(
      <AuthContext.Provider value={ contextValue }>
        <AppRouter/>
      </AuthContext.Provider>);
    //console.log(wrapper.html());
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.navbar').exists()).toBe(true);
  });

});
