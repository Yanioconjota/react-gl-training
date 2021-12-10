import { Col } from "react-bootstrap";
import './PrimeraApp.scss';
import PropTypes from 'prop-types';

const PrimeraApp = ({ saludo, subtitulo }) => {
  const stringMsg = "Esto es un string!";
  const boolMsg = "Los booleans y los undefined no pueden ser impresos en el HTML";
  const arrMsg = ["🍲", "🍔", "🍟", "🍕", "🌭", "🥪"];
  const persona = { nombre: 'James', apellido: 'Howlett',  edad: '?' };
  console.log(saludo, subtitulo);

  /* if (!saludo) {
    throw new Error('El saludo es necesario');
  } */

  return (
    <Col className="mt-2">
      <h1 className="text-info">Impresión de variables en HTML</h1>
      <code>const stringMsg = 'this is a string!';</code>
      <p className="Code">{stringMsg}</p>
      <code>const boolMsg = true</code>
      <p className="Code">{boolMsg}</p>
      <code>const arrMsg = ["🍲", "🍔", "🍟", "🍕", "🌭", "🥪"]</code>
      <p className="Code">{arrMsg}</p>
      <code>
        const persona = {`{ nombre: 'James', apellido: 'Howlett',  edad: '?' }`}
      </code>
      <p className="Code">{`Error: Objects are not valid as a React child (found: object with keys {nombre, apellido, edad}). If you meant to render a collection of children, use an array instead.`}</p>
      <p className="Code">{`Se pueden usar string literals o JSON.stringify(persona, null, 3 para mostrar objeros:`}</p>
      <code className="Code">{JSON.stringify(persona, null, 3)}</code>
      <hr className="my-5" />
      <h1 className="text-info">Uso de props</h1>
      <code>
        const PrimeraApp ={" "}
        {`({ saludo = 'Hola insecto!'}) => {...
            ...export default PrimeraApp;`}
      </code>
      <p className="Code">
        {`({ saludo = 'Hola insecto!'}) => {...`} Es la desestructuración de las
        props o propiedades que recibe el componente, en este caso se le asigna
        un valor por defecto
      </p>
      <p className="Code">
        Se puede agregar una validación utilizando prop-types, obligando a
        asignar un tipo:
      </p>
      <code className="d-block Code">
        PrimeraApp.propTypes = {`{ saludo: PropTypes.string.isRequired }`}
      </code>
      <code className="d-block">{`<PrimeraApp saludo="Hola, Soy Goku!"/>`}</code>
      <code className="d-block Code">{`PrimeraApp.defaultProps = { subtitulo: 'Soy un subtítulo' }`}</code>
      <p className="Code">Asigna valores por defecto a las props</p>
      <p className="Code">{subtitulo}</p>
    </Col>
  );
};

PrimeraApp.propTypes = {
  saludo: PropTypes.string.isRequired
};

PrimeraApp.defaultProps = {
  subtitulo: 'Soy un subtítulo'
}

export default PrimeraApp;
