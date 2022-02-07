import "@testing-library/jest-dom";
import { act } from "@testing-library/react";
import { mount, shallow } from "enzyme";
import TodoApp from "../../../components/08-useReducer/TodoApp";
import { demoTodos } from "../../fixtures/demoTodos";

describe('pruebas con TodoApp', () => {
  const wrapper = shallow(<TodoApp/>);
  //Mock del guardado de los items en local storage
  Storage.prototype.setItem = jest.fn(()=>{});
  test('debe mostrar el componente correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('debe agregar un todo', () => {
    //se usa mount para simular la ejecución del handleAddTodo
    const wrapper = mount(<TodoApp/>);
    act(()=>{
      wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0]);
      wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[1]);
    });
    console.log(wrapper.find('h1').text());
    expect(wrapper.find('h1').text()).toBe('TodoApp (2)');
    //Se espera que se llame por cada todo
    expect(localStorage.setItem).toHaveBeenCalledTimes(2);
    //emula la ejecución del setItem en cada useEffect
    expect(localStorage.setItem).toHaveBeenCalledWith(
      'todos',
      JSON.stringify(demoTodos)
    );
  });
  
  test("debe eliminar un todo", () => {
    act(() => {
      //Como es un mock debo agregar uno y borrarlo para que funcione la prueba
      wrapper.find("TodoAdd").prop("handleAddTodo")(demoTodos[0]);
      wrapper.find("TodoList").prop("handleDelete")(demoTodos[0].id);
    });
    expect(wrapper.find("h1").text()).toBe("TodoApp (0)");
  });
});
