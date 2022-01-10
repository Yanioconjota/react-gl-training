import "@testing-library/jest-dom";
import { mount, shallow } from "enzyme";
import AddCategory from "../../components/AddCategory";

describe("Pruebas en AddCategory", () => {
  const setCategories = () => {};
  const wrapper = shallow(<AddCategory setCategories={setCategories}/>);

  test('debe mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('debe de cambiar la caja de texto', () => {
    const input = wrapper.find('input');
    //debemos pasarle el evento como segundo argumento
    const value = 'Hola mundo!';
    input.simulate('change', { target: {value} });
  });
});
