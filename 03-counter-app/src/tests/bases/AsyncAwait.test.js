import "@testing-library/jest-dom";
import getImagen from "../../bases/AsyncAwait";
describe('Pruebas con async y await', () => {
  const expected = expect.stringContaining("http");
  test('debe retornar una url', async() => {
    const url = await getImagen();
    expect(typeof url).toBe('string');
    expect(url).toEqual(expected);
    //Otra alternativa
    expect(url.includes('http')).toBe(true);
  });

  /* test("si hay un error debe mostrar mensaje: This are not the droids you're looking for", async () => {
    const mensaje = "This are not the droids you're looking for";
    const url = await getImagen();
    expect(typeof url).toBe("string");
    expect(url).toBe(mensaje);
    //Otra alternativa
    expect(url.includes("http")).toBe(false);
  }); */
})
