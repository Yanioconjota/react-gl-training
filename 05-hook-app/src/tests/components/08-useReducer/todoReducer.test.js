import "@testing-library/jest-dom";
import { todoReducer } from "../../../components/08-useReducer/todoReducer";
import { demoTodos } from "../../fixtures/demoTodos";

//Ahora se importa de la carpeta fixtures
/* const demoTodos = [
  {
    id: 1,
    desc: "Aprender react",
    done: false,
  },
  {
    id: 2,
    desc: "Aprender Mongo",
    done: false,
  },
]; */

describe('pruebas en todoReducer', () => {
  test('debe retornar el estado por defecto', () => {
    const state = todoReducer(demoTodos, {});
    expect(state).toEqual(demoTodos);
  });

  test("debe agregar un todo", () => {
    const newTodo = {
      id: 3,
      desc: "Aprender C#",
      done: false,
    };
    const action = {
      type: "add",
      payload: newTodo,
    };
    const state = todoReducer(demoTodos, action);
    expect(state.length).toBe(demoTodos.length + 1);
    expect(state).toEqual([...demoTodos, newTodo]);
  });

  test("debe borrar un todo", () => {
    const action = {
      type: "delete",
      payload: 2,
    };
    const state = todoReducer(demoTodos, action);
    expect(state.length).toBe(demoTodos.length - 1);
    console.log(state);
    //valida que el state sea igual a un array que contenga el primer elemento de demoTodos
    expect(state).toEqual([demoTodos[0]]);
  });

  test("debe el toggle del done", () => {
    const action = {
      type: "toggle",
      payload: 2,
    };
    const state = todoReducer(demoTodos, action);
    expect(state[1].done).toBe(true);
    //valida que el otro item no hay sido modificado comparando el primer elemento del state con el primero de demoTodos
    expect(state[0]).toEqual(demoTodos[0]);
  });
  
});
