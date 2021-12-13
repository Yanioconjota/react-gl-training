const saludar = (nombre) => `Hola, ${nombre}`;
const getUser = () => ({
  uid: "T800",
  username: "Arnold",
});

const getUsuarioActivo = (nombre) => {
  return {
    uid: "ABC567",
    username: nombre,
  };
};
const Functions = () => {
  return (
    <div>
      <p>saludar("Goku") {saludar("Goku")}</p>
    </div>
  );
}

export { Functions as default, getUser, getUsuarioActivo, saludar };
