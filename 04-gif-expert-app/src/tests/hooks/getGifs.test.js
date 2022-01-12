import "@testing-library/jest-dom";
import { renderHook } from "@testing-library/react-hooks";
import { useFetchGifs } from "../../hooks/useFetchGifs";

describe('pruebas con custom hook useFetchGifs', () => {
  test('debe de retornar el estado inicial', () => {
    const category = 'Far Cry 6';
    //utilizamos renderHook() para llamar a nuestro custom hook sin errores
    const { result } = renderHook(() => useFetchGifs(category, 12, 0));
    const { data, loading } = result.current;
    console.log(data, loading);

    //const { data: images, loading } = useFetchGifs(category, 12, 0);

    expect(data.length).toBe(0);
    expect(loading).toBe(true);
  });
});
