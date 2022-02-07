import "@testing-library/jest-dom";
import { act } from "@testing-library/react";
import { mount } from "enzyme";
import { LoginScreen } from "../../../components/09-useContext/LoginScreen";
import { UserContext } from "../../../components/09-useContext/UserContext";

const setUser = jest.fn();
const user = {
  id: 666,
  name: "Homero",
  lastname: "Thompson",
  email: "homerothompson@email.com",
};

const wrapper = mount(
  <UserContext.Provider
    value={{
      setUser
    }}
  >
    <LoginScreen />
  </UserContext.Provider>
);

describe('pruebas con LoginScreen', () => {
  test('el componente debe mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('debe ejecutar el setUser con el argumento esperado', () => {
    act(() => {
      wrapper.find("button").prop('onClick')();
      expect(setUser).toHaveBeenCalledWith(user);
    })
  });
});
