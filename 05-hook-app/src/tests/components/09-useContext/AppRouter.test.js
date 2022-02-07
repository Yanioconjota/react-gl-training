import "@testing-library/jest-dom";
import { mount } from "enzyme";
import { AppRouter } from "../../../components/09-useContext/AppRouter";
import { UserContext } from "../../../components/09-useContext/UserContext";

const user = {
  id: 666,
  name: "Homero",
  lastname: "Thompson",
  email: "homerothompson@email.com",
};

describe('pruebas con AppRouter', () => {
  const wrapper = mount(
    <UserContext.Provider
      value={{
        user,
      }}
    >
      <AppRouter />
    </UserContext.Provider>
  );
  test('debe mostrar el componente correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });
  
});
