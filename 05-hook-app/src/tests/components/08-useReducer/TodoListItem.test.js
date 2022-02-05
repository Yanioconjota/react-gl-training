import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import TodoListItem from "../../../components/08-useReducer/TodoListItem";
import { demoTodos } from "../../fixtures/demoTodos";

describe('pruebas con TodoListItem', () => {
  const [ todo ] = demoTodos;
  const handleDelete = jest.fn();
  const handleToggle = jest.fn();
  const index = 0;
  const wrapper = shallow(
    <TodoListItem
      todo={todo}
      index={index}
      handleDelete={handleDelete}
      handleToggle={handleToggle}
    />
  );

  test('el componente debe mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('debe llamar la función borrar', () => {
    const button = wrapper.find('button');
    button.simulate('click');
    //espera que se llama handleDelete(todo.id) donde 1 es el todo.id del todo que se quiere borrar
    expect(handleDelete).toHaveBeenCalledWith(todo.id);
  });

  test('debe llamar la función toggle', () => {
    const todoItem = wrapper.find('p');
    todoItem.simulate('click');
    expect(handleToggle).toHaveBeenCalledWith(todo.id);
  });

  test('debe mostrar el texto correctamente', () => {
    const todoItem = wrapper.find("p");
    console.log(todoItem.text());
    expect(todoItem.text().trim()).toBe(`${index + 1}. ${todo.desc}`);
  });

  test('debe tener la clase complete si el todo.done = true', () => {
    todo.done = true;  
    const wrapper = shallow(
      <TodoListItem todo={todo}/>
    );
    expect(wrapper.find('p').hasClass('complete')).toBe(true);
  });
  
});
