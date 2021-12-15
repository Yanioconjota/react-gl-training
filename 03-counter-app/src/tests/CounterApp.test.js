import "@testing-library/jest-dom";
import { mount, shallow } from "enzyme";
import CounterApp from "../CounterApp";

describe('Pruebas en <CounterApp />', () => {
  const wrapper = shallow(<CounterApp showButtons={true} value={0}/>);
  test('debe mostrar <CounterApp /> correctamente ', () => {
    
    expect(wrapper).toMatchSnapshot();
  });
  test('debe mostrar el valor por defecto', () => {
    const wrapper = shallow(<CounterApp  value={100}/>);
    const counterText = wrapper.find('p > span.Code').text();
    expect(counterText).toBe('100');
  });
  test('debe de incrementar con el botón de +1', () => {
    const wrapper = mount(<CounterApp showButtons={true} value={0}/>);
    wrapper.find(".btn-primary").simulate('click');
    const counterText = wrapper.find("p > span.Code").text();
    expect(counterText).toBe('1');
  });

  test("debe de incrementar con el botón de -1", () => {
    const wrapper = mount(<CounterApp showButtons={true} value={10} />);
    wrapper.find(".btn-secondary").simulate("click");
    const counterText = wrapper.find("p > span.Code").text();
    expect(counterText).toBe("9");
  });

  test("debe de reiniciar el valor con el botón de reset", () => {
    const wrapper = mount(<CounterApp showButtons={true} value={10} />);
    wrapper.find(".btn-secondary").simulate("click");
    wrapper.find(".btn-info").simulate("click");
    const counterText = wrapper.find("p > span.Code").text();
    expect(counterText).toBe("10");
  });
});
