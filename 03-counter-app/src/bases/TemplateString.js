function getSaludo(name = 'Sr. Thompson') {
  return "Hola " + name;
}

function TemplateString() {
  const nombre = "Homero";
  const apellido = "Thompson";

  const nombreCompleto = `${nombre} ${apellido}`;

  console.log(`Ese es un template string: ${getSaludo(nombreCompleto)}`);
  return (
    <div>
      <p>{nombreCompleto}</p>
      <p>{getSaludo(nombre)}</p>
      <p>{`Ese es un template string: ${getSaludo(nombreCompleto)}`}</p>
    </div>
  );
}

export {
  TemplateString as default,
  getSaludo
};
