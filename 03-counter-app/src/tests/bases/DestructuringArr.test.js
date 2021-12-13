import "@testing-library/jest-dom";
import { returnArray } from '../../bases/DestructuringArr';

describe('Pruebas en DestructuringArr.test.js', () => {
  test("returnArray debe retornar un string y un número", () => {
    const arrMock = ["ABC", 123];
    expect(returnArray()).toEqual(arrMock);
  });

  test("returnArray debe retornar un string y un número con su respectivo tipo", () => {
    const [letras, numeros] = returnArray();
    expect(letras).toEqual("ABC");
    expect(typeof letras).toBe('string');
    expect(numeros).toEqual(123);
    expect(typeof numeros).toBe('number');
  });
  
})
