import "@testing-library/jest-dom";
import { getUser, getUsuarioActivo, saludar } from '../../bases/Functions';
describe('Pruebas en Functions.test.js', () => {
  test('getUser debe retornar un objeto ', () => {
    const usuarioMock = {
      uid: "T800",
      username: "Arnold",
    };

    const getUserMock = getUser();
    expect(getUserMock).toEqual(usuarioMock);
  });

  test('getUsuarioActivo debe retornar un objeto', () => {
    const nombre = 'Homero';
    const usuarioMock = {
      uid: "ABC567",
      username: nombre,
    };
    expect(getUsuarioActivo(nombre)).toEqual(usuarioMock);
  });

  test('saludar debe retornar Hola, Arnold', () => {
    const nombre = 'Arnold';
    expect(saludar(nombre)).toBe(`Hola, ${nombre}`);
  })
  
  
  
});