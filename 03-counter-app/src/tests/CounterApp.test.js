import "@testing-library/jest-dom";
import { mount, shallow } from "enzyme";
import CounterApp from "../CounterApp";
import Button from "react-bootstrap/Button";

describe('Pruebas en <CounterApp />', () => {
  const wrapper = shallow(<CounterApp />);
  test('debe mostrar <CounterApp /> correctamente ', () => {
    
    expect(wrapper).toMatchSnapshot();
  });
  test('debe mostrar el valor por defecto', () => {
    const wrapper = shallow(<CounterApp  value={100}/>);
    const counterText = wrapper.find('p > span.Code').text();
    expect(counterText).toBe('100');
  });
  test('debe de incrementar con el botón de +1', () => {
    const btn = mount(<Button />)
    const wrapper = mount(<CounterApp />);
    const btn1 = btn.find("button").at(0);
    console.log(btn1.html());
    const counterText = wrapper.find("p > span.Code").text();
    btn1.simulate('click');
    console.log(counterText);
  });
});
