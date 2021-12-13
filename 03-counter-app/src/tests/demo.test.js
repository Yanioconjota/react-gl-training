describe('Pruebas en demo.test.js', () => {
  test("debe de ser iguales los strings", () => {
    //1. Inicializaciòn
    const mensaje = "Hola mundo";

    //2. Estímulo
    const mensaje2 = `Hola mundo`;

    //3. Observar el comportamiento
    expect(mensaje).toBe(mensaje2);
  });
});