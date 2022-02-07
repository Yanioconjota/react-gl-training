import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import TodoAdd from "../../../components/08-useReducer/TodoAdd";

const handleAddTodo = jest.fn();
describe('pruebas con TodoAdd', () => {
  
  const wrapper = shallow(<TodoAdd handleAddTodo={handleAddTodo} />);
  test('debe mostrar el componente correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('no debe llamar al handleAddTodo si el input está vacío', () => {
    const formSubmit = wrapper.find('form').prop('onSubmit');
    console.log(formSubmit);
    formSubmit({preventDefault(){}});
    expect(handleAddTodo).toHaveBeenCalledTimes(0);
  });

  test('debe llamar al handleAddTodo', () => {
    const value = 'Aprender Node';
    const input = wrapper.find('input');
    
    input.simulate('change', {
      target: {
        value: value,
        name: 'description'
      }
    });

    const formSubmit = wrapper.find('form').prop('onSubmit');
    formSubmit({
      preventDefault(){}
    });
    expect(handleAddTodo).toHaveBeenCalledTimes(1);
    expect(handleAddTodo).toHaveBeenCalledWith(expect.any(Object));
    expect(handleAddTodo).toHaveBeenCalledWith({
      desc: value,
      done: false,
      id: expect.any(Number)
    });
    expect(input.prop('value')).toBe('');
  });
  
  
});
