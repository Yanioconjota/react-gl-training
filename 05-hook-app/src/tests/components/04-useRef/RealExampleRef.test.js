import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import RealExampleRef from '../../../components/04-useRef/RealExampleRef';

describe('pruebas con RealExampleRef', () => {
  let wrapper = shallow(<RealExampleRef/>);
  test('Debe mostrar el componente correctamente', () => {
    expect(wrapper).toMatchSnapshot();
    //Valida si existe el componente al renderizar el componente y que show es false
    expect(wrapper.find('MultipleCustomHooks').exists()).toBe(false);
  });

  test('debe mostrar el componente <MultipleCustomHooks>', () => {
    const button = wrapper.find("button");
    button.simulate("click");
    //Valida si existe el componente al clickear el botón seteando show a true
    expect(wrapper.find("MultipleCustomHooks").exists()).toBe(true);
  });
  
  
});
