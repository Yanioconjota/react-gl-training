import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import RealExampleRef from '../../../components/04-useRef/RealExampleRef';

describe('pruebas con RealExampleRef', () => {
  let wrapper = shallow(<RealExampleRef/>);
  test('Debe mostrar el componente correctamente', () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('MultipleCustomHooks').exists()).toBe(false);
  });

  test('debe mostrar el componente <MultipleCustomHooks>', () => {
    const button = wrapper.find("button");
    button.simulate('click');
    expect(wrapper.find("MultipleCustomHooks").exists()).toBe(true);
  });
  
  
});
