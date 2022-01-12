import "@testing-library/jest-dom";
import { renderHook } from "@testing-library/react-hooks";
import { useFetchGifs } from "../../hooks/useFetchGifs";

describe('pruebas con custom hook useFetchGifs', () => {
  const category = "Far Cry 6",
        limit = 12,
        offset = 0;
  test('debe de retornar el estado inicial', async() => {
    //utilizamos renderHook() para llamar a nuestro custom hook sin error: Invalid hook call. Hooks can only be called inside of the body of a function component

    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs(category, limit, offset)
    );
    const { data, loading } = result.current;
    console.log(data, loading);

    //const { data: images, loading } = useFetchGifs(category, 12, 0);

    //al usar waitForNextUpdate en una de nuestras pruebas tenemos que agregarla al resto para asegurarnos obtener la respuesta esperada
    await waitForNextUpdate();
    expect(data.length).toBe(0);
    expect(loading).toBe(true);
  });

  test('debe de retornar un un arreglo de gifs y loading en false', async() => {
    //usamos waitForNextUpdate que es una promesa que nos avisa cuando hubo un cambio en el state de  nuestro custom hook, se usa con async await
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs(category, limit, offset)
    );
    await waitForNextUpdate();
    const { data, loading } = result.current;
    console.log(data, loading);
     expect(data.length).toBe(limit);
     expect(loading).toBe(false);
  });
});
