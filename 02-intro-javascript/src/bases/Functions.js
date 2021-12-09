function Functions() {
  const saludar = (nombre) => `Hola, ${nombre}`;
  //Los paréntesis indican que retornamos un objeto implicito y que los {} no son el cuerpo de la función sinó el objero que queremos retornar.
  const getUser = () => ({
    uid: "T800",
    username: "Arnold",
  });

  console.log(saludar("Goku"));
  console.log(getUser());

  function getUsuarioActivo(nombre) {
    return {
      uid: "ABC567",
      username: nombre,
    };
  }

  console.log(getUsuarioActivo("Homero"));

  const getActiveUser = (nombre) => ({
    uid: "YVQKCK",
    username: nombre,
  });

  console.log(getActiveUser("John Salchichón"));
  return (
    <div>
      <p>saludar("Goku") {saludar("Goku")}</p>
    </div>
  );

}

export default Functions;
