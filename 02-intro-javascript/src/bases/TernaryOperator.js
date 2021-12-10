function TernaryOperator() {


  const activo = true;

  const mensaje = activo ? 'Activo' : 'Inactivo';

  const mensaje2 = activo ? "Activo" : null;

  const mensaje3 = activo && 'activo';

  console.log(mensaje);
  console.log(mensaje2);
  console.log(mensaje3);

  return(
    <div>
      <p>{mensaje} {mensaje2} {mensaje3}</p>
    </div>
  );
}

export default TernaryOperator;