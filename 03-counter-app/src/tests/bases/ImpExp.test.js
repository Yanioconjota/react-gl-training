import "@testing-library/jest-dom";
import { getHeroeById, getHeroeByOwner } from "../../bases/ImportExport";
import heroes from "../../data/heroes";

describe('Pruebas en funciones de héroes', () => {
  test("getHeroeById debe retornar un héroe por Id", () => {
    const id = 1;
    const heroe = getHeroeById(id);
    const heroeData = heroes.find( h => h.id === id);
    expect(heroe).toEqual(heroeData);
  });

  test("getHeroeById debe retornar undefined si el héroe no existe", () => {
    const id = 10;
    const heroe = getHeroeById(id);
    expect(heroe).toBe(undefined);
  });

  test("getHeroeByOwner debe retornar héroes de DC", () => {
    const owner = 'DC';
    const heroe = getHeroeByOwner(owner);
    const heroeData = heroes.filter((h) => h.owner === owner);
    console.log(heroeData);
    expect(heroe).toEqual(heroeData);
  });

  test("getHeroeByOwner debe retornar héroes de Marvel", () => {
    const owner = "Marvel";
    const heroe = getHeroeByOwner(owner);
    expect(heroe.length).toBe(2);
  });
  
  
});
