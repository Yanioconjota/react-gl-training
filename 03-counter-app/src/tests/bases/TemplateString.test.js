import '@testing-library/jest-dom';
import { getSaludo } from "../../bases/TemplateString";

describe('Pruebas en TemplateString.test.js', () => {
  test('getSaludo debe retornar Hola Homero', () => {
    const nombre = 'Homero';
    const saludo = getSaludo(nombre);
    expect(saludo).toBe(`Hola ${nombre}`);
  });

  test("getSaludo debe retornar Hola Sr.Thompson si no recibe ningún argumento", () => {
    const saludo = getSaludo();
    expect(saludo).toBe("Hola Sr. Thompson");
  });
  
})