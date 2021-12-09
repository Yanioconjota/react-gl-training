const nombre = "Homero";
const apellido = "Thompson";

let valorDado = 5;
valorDado = 3;

console.log(nombre, apellido, valorDado);

if (true) {
  const nombre = "Peter";
  let valorDado = 6;
  console.log(nombre, valorDado);
}

console.log(valorDado);


function ConstLet() {
  const nombre = "Homero";
  const apellido = "Thompson";

  let valorDado = 5;
  valorDado = 3;

  console.log(nombre, apellido, valorDado);

  if (true) {
    const nombre = "Peter";
    let valorDado = 6;
    console.log(nombre, valorDado);
  }

  console.log(valorDado);

  return (
    <div>
      <h1>{nombre} {apellido} {valorDado}</h1>
    </div>
  );
}

export default ConstLet;