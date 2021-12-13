const returnArray = () => ["ABC", 123];
const [letters, numeros] = returnArray();

const usState = (val) => {
  return [
    val,
    () => {
      console.log("Hello world!");
      return "Hello world!";
    },
  ];
};

const DestructuringArr = () => {
  const personajes = ["Goku", "Vegeta", "Trunks"];

  const [p1] = personajes;
  const [, p2] = personajes;
  const [, , p3] = personajes;

  const arr = usState("Goku");

  const [nombre, setNombre] = arr;

  return (
    <div>
      <p>
        {p1} {p2} {p3}
      </p>
      <p>
        {letters} {numeros}
      </p>
      <p>
        {nombre} {setNombre()}
      </p>
    </div>
  );
}

export {
  DestructuringArr as default,
  returnArray,
  usState
};
