import { Col } from "react-bootstrap";
import './PrimeraApp.scss';
const PrimeraApp = () => {
  const stringMsg = "this is a string!";
  const boolMsg = "Booleans are not printed";
  const arrMsg = ["🍲", "🍔", "🍟", "🍕", "🌭", "🥪"];
  const persona = { nombre: 'James', apellido: 'Howlett',  edad: '?' };

  return (
    <Col className="mt-2">
      <h1 className="text-info">Impresión de variables en HTML</h1>
      <code>const stringMsg = 'this is a string!';</code>
      <p class="code">{stringMsg}</p>
      <code>const boolMsg = true</code>
      <p class="code">{boolMsg}</p>
      <code>const arrMsg = ["🍲", "🍔", "🍟", "🍕", "🌭", "🥪"]</code>
      <p class="code">{arrMsg}</p>
      <code>
        const persona = {`{ nombre: 'James', apellido: 'Howlett',  edad: '?' }`}
      </code>
      <p class="code">{`Error: Objects are not valid as a React child (found: object with keys {nombre, apellido, edad}). If you meant to render a collection of children, use an array instead.`}</p>
      <p class="code">{`Using string literals or JSON.stringify(persona, null, 3 will do the trick:`}</p>
      <code class="code">{JSON.stringify(persona, null, 3)}</code>
    </Col>
  );
};

export default PrimeraApp;
