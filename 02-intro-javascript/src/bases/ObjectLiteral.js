function ObjectLiteral() {
  const persona = {
    nombre: "Tony",
    apellido: "Stark",
    edad: 45,
    direccion: {
      ciudad: "New York",
      lat: 40.7535178,
      lng: -73.9789399,
      zip: "Q23F+C7",
    },
  };

  //console.table(person);

  const persona2 = { ...persona };
  persona2.nombre = "Peter";
  persona2.apellido = "Parker";
  persona2.edad = 17;

  console.log(persona);
  console.log(persona2);
  return (
    <div>
      <p>{ persona.nombre }</p>
      <p>{ persona2.nombre }</p>
    </div>
  )

}

export default ObjectLiteral;