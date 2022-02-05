import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import TodoList from "../../../components/08-useReducer/TodoList";
import { demoTodos } from "../../fixtures/demoTodos";

const handleDelete = jest.fn();
const handleToggle = jest.fn();

//Las funciones no se prueban peros se pasan como referencia
const wrapper = shallow(
  <TodoList
    todos={demoTodos}
    handleDelete={handleDelete}
    handleToggle={handleToggle}/>
);

describe('pruebas con el componente TodoList', () => {
  test('Debe mostrar el componente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('debe tener 2 todoListItem', () => {
    //Compara la cantidad de TodoListItem renderizados con los items de demosTodos
    const todoListItem = wrapper.find('TodoListItem');
    expect(todoListItem.length).toBe(demoTodos.length);
    console.log(todoListItem.at(0).prop('handleDelete'));
    //Valida que el componente TodoListItem espere una función
    expect(todoListItem.at(0).prop('handleDelete')).toEqual(expect.any(Function));
    expect(todoListItem.at(0).prop('handleToggle')).toEqual(expect.any(Function));
  });
  
  
});
