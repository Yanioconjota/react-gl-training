import "@testing-library/jest-dom";
import { mount, shallow } from "enzyme";
import CounterApp from "../CounterApp";

describe('Pruebas en <CounterApp />', () => {
  //Utilizo mount en vez de shallow porque Button es un componente hijo de CounterApp que no puede ser encontrado usando shallow()
  let wrapper = mount(<CounterApp />);

  beforeEach(() => {
    wrapper = mount(<CounterApp showButtons={true} value={10} />);
  });
  test('debe mostrar <CounterApp /> correctamente ', () => {
    
    expect(wrapper).toMatchSnapshot();
  });
  test('debe mostrar el valor por defecto', () => {
    const counterText = wrapper.find('p > span.Code').text();
    expect(counterText).toBe('10');
  });
  test('debe de incrementar con el botón de +1', () => {
    wrapper.find(".btn-primary").simulate('click');
    const counterText = wrapper.find("p > span.Code").text();
    expect(counterText).toBe('11');
  });

  test("debe de reducir con el botón de -1", () => {
    wrapper.find(".btn-secondary").simulate("click");
    const counterText = wrapper.find("p > span.Code").text();
    expect(counterText).toBe("9");
  });

  test("debe de reiniciar el valor con el botón de reset", () => {
    wrapper.find(".btn-secondary").simulate("click");
    wrapper.find(".btn-info").simulate("click");
    const counterText = wrapper.find("p > span.Code").text();
    expect(counterText).toBe("10");
  });
  test("debe ocultar los botones", () => {
    const wrapper = mount(<CounterApp showButtons={false} />);
    const btnGroup = wrapper.find(".btn-group").text();
    expect(btnGroup).toBe("");
  });
});
