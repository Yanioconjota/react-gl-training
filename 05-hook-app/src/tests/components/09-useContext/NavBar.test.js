import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import { NavBar } from "../../../components/09-useContext/NavBar";

describe('pruebas con NavBar', () => {
  
  const wrapper = shallow(<NavBar/>);
  test('debe mostrar el componente correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });
  
  
});
