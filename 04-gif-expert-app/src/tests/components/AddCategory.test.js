import "@testing-library/jest-dom";
import { mount, shallow } from "enzyme";
import AddCategory from "../../components/AddCategory";

describe("Pruebas en AddCategory", () => {
  const setCategories = jest.fn();
  let wrapper = shallow(<AddCategory setCategories={setCategories}/>);

  beforeEach(() => {
    wrapper = shallow(<AddCategory setCategories={setCategories}/>);
    jest.clearAllMocks();
  });

  test('debe mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('debe de cambiar la caja de texto', () => {
    const input = wrapper.find('input');
    //debemos pasarle el evento como segundo argumento
    const value = 'Hola mundo!';
    input.simulate('change', { target: {value} });
    //expect(wrapper.find("p").text().trim()).toBe(value);
  });

  test('No debe postear on submit con input vacío', () => {
    wrapper.find('form').simulate('submit', { preventDefault(){} });
    expect(setCategories).not.toHaveBeenCalled();
  });

  test('debe de llamar al setCategories y limpiar el input', () => {
    const value = "Hola mundo!";
    const input = wrapper.find("input");
    input.simulate("change", { target: { value } });
    wrapper.find("form").simulate("submit", { preventDefault() {} });
    expect(setCategories).toHaveBeenCalled();
    expect(setCategories).toHaveBeenCalledTimes(1);
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
    expect(input.prop('value')).toBe('');
  });
});
