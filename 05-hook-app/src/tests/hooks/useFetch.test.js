import "@testing-library/jest-dom";
import { renderHook } from "@testing-library/react-hooks";
import { useFetch } from "../../hooks/useFetch";

const url = 'https://www.breakingbadapi.com/api/quotes/1';

describe('pruebas en useFetch', () => {

  test('debe traer la información por defecto', () => {
    const { result } = renderHook(() => useFetch(url));
    const { data, loading, error } = result.current;
    expect(data).toBe(null);
    expect(loading).toBe(true);
    expect(error).toBe(null);
  });

  test('debe traer la info deseada', async() => {
    const { result, waitForNextUpdate } = renderHook(() => useFetch(url));

    await waitForNextUpdate({ timeout: 5000 });
    
    const { data, loading, error } = result.current;
    //console.log(data);
    expect(data.length).toBe(1);
    expect(loading).toBe(false);
    expect(error).toBe(null);
  });

  test('debe manejar el error', async() => {
    const { result, waitForNextUpdate } = renderHook(() => useFetch('https://www.breakingbadapi.com/api/kuotes/1'));

    await waitForNextUpdate({ timeout: 5000 });
    
    const { data, loading, error } = result.current;
    //console.log(data);
    expect(data).toBe(null);
    expect(loading).toBe(false);
    expect(typeof error).toBe('string');
    expect(error).toBe('No se pudo cargar la información');
  });
  
});
