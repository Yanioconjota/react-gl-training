function DestructuringArr() {

  const personajes = ['Goku', 'Vegeta', 'Trunks'];

  const [p1] = personajes;
  const [ , p2] = personajes;
  const [ , , p3] = personajes;

  console.log(p1);
  console.log(p2);
  console.log(p3);

  const returnArray = () => ['ABC', 123];
  const [letters,numeros] = returnArray();

  const usState = ( val ) => {
    return [ val, () => { console.log('Hello world!'); return 'Hello world!'} ]
  }

  const arr = usState('Goku');
  console.log(arr);

  const [nombre, setNombre] = arr;
  
  console.log(nombre);
  console.log(setNombre());

  return(
    <div>
      <p>{p1} {p2} {p3}</p>
      <p>{letters} {numeros}</p>
      <p>{nombre} {setNombre()}</p>
    </div>
  );
}

export default DestructuringArr;