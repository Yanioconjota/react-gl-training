import "@testing-library/jest-dom";
import { mount, shallow } from "enzyme";
import { HomeScreen } from '../../../components/09-useContext/HomeScreen';
import { UserContext } from "../../../components/09-useContext/UserContext";

describe('pruebas con HomeScreen', () => {

  const user = {
    id: 666,
    name: 'Homero',
    lastname: 'Thompson',
    email: 'homerothompson@email.com'
  }

  const wrapper = mount(
    <UserContext.Provider value={{
      user
    }}>
      <HomeScreen/>
    </UserContext.Provider>
  );
  test('debe mostrar el componente correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });
  
});
