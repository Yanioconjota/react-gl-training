import "@testing-library/jest-dom";
import { act } from "@testing-library/react";
import { mount } from "enzyme";
import { AboutScreen } from "../../../components/09-useContext/AboutScreen";
import { UserContext } from "../../../components/09-useContext/UserContext";

const setUser = jest.fn();

const wrapper = mount(
  <UserContext.Provider
    value={{
      setUser
    }}
  >
    <AboutScreen />
  </UserContext.Provider>
);

describe('pruebas con AboutScreen', () => {
  test('el componente debe mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('debe ejecutar el setUser con el argumento esperado', () => {
    act(() => {
      wrapper.find("button").prop('onClick')();
      expect(setUser).toHaveBeenCalledWith({});
    })
  });
});
