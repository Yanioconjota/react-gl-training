import "@testing-library/jest-dom";
import { renderHook, act } from '@testing-library/react-hooks';
import { useCounter } from '../../hooks/useCounter';

describe('Pruebas en useCounter', () => {
  test('debe retornar valores por defecto', () => {
    const { result } = renderHook(() => useCounter());
    //Counter devuelve el valor por defecto del state
    //Se valua que devuelva el counter y las funciones del customHook increment, decrement y reset
    expect(result.current.counter).toBe(10);
    expect(typeof result.current.reset).toBe('function');
    expect(typeof result.current.increment).toBe('function');
    expect(typeof result.current.decrement).toBe('function');
  });

  test('debe tener el counter en 100', () => {
    const { result } = renderHook(() => useCounter(100));
    expect(result.current.counter).toBe(100);
  });

  test('increment debe incrementar el counter en 1', () => {
    const { result } = renderHook(() => useCounter(100));
    const { increment } = result.current;
    //increment(); --> Para evitar el error al ejecutar el método debemos envolver su ejecución en un act
    act(()=> {
      increment();
    });
    expect(result.current.counter).toBe(101);
  });

  test("decrement debe decrementar el counter en 1", () => {
    const { result } = renderHook(() => useCounter(100));
    const { decrement } = result.current;
    act(() => {
      decrement();
    });
    expect(result.current.counter).toBe(99);
  });
  
  test("reset debe reiniciar el counter en 100", () => {
    const { result } = renderHook(() => useCounter(100));
    const { reset, decrement } = result.current;
    act(() => {
      decrement();
      reset();
    });
    expect(result.current.counter).toBe(100);
  });
  
});
