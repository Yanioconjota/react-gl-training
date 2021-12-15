import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import CounterApp from "../CounterApp";

describe('Pruebas en <CounterApp />', () => {
  test('debe mostrar <CounterApp /> correctamente ', () => {
    const wrapper = shallow(<CounterApp />);
    expect(wrapper).toMatchSnapshot();
  });
  test('debe mostrar el valor por defecto', () => {
    const wrapper = shallow(<CounterApp  value={100}/>);
    const counterText = wrapper.find('p > span.Code').text();
    expect(counterText).toBe('100');
  });
});
