/* eslint-disable jest/no-conditional-expect */
import "@testing-library/jest-dom";
import { getHeroeByIdAsync } from "../../bases/Promises";
import heroes from "../../data/heroes";
//El argumento done es un callback e indica que no esperamos más resultados de tareas asíncronas
describe('Pruebas con promesas', () => {
  test("getHeroeByIdAsync debe retornar un héroe async", (done) => {
    const id = 1;
    getHeroeByIdAsync(id).then((heroe) => {
      console.log(heroe);
      expect(heroe).toBe(heroes[0]);
      done();
    });
  });
  test("getHeroeByIdAsync debe retornar un error si el héroe no existe", (done) => {
    const id = 10;
    getHeroeByIdAsync(id).catch((err) => {
      console.log(err);
      expect(err).toBe('No pudo encontrarse el héroe');
      done();
    });
  });
  
});
