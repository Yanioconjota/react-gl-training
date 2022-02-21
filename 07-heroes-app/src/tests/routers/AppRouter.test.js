import "@testing-library/jest-dom";
import { mount } from "enzyme";
import { AuthContext } from "../../auth/authContext";
import AppRouter from "../../routers/AppRouter";

describe('pruebas con AppRouter', () => {

  const contextValue = {
    user: {
      logged: false,
    },
  };

  test('debe mostrar el login si el usuario no está autenticado', () => {
    const wrapper = mount(
      <AuthContext.Provider value={ contextValue }>
        <AppRouter/>
      </AuthContext.Provider>);
    console.log(wrapper.html());
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('h1').text().trim()).toBe('Login');
  });

});
