import { Col } from "react-bootstrap";
import './PrimeraApp.scss';
import gif from './assets/img/Roque.gif';
import PropTypes from 'prop-types';
import CounterApp from "./CounterApp";

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
      <code>{`<PrimeraApp saludo="Hola, Soy Goku!"/>`}</code>
      <p className="Code">{saludo}</p>
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
      <p className="Code sub-title">{subtitulo}</p>
      <hr className="my-5" />
      <p>Tarea:</p>
      <ol>
        <li>
          Crear un nuevo componente dentro de la carpeta SRC llamado CounterApp
          ✔️
        </li>
        <li>El CounterApp debe de ser un Functional Component ✔️</li>
        <li>
          El contenido del CounterApp debe de ser:
          {`<h1>CounterApp</h1>
              <h2> {value} </h2>`}{" "}
          ✔️
        </li>
        <li>
          Donde "value" es una propiedad enviada desde el padre hacia el
          componente CounterApp (Debe ser númerica validada con PropTypes) ✔️
        </li>
        <li>
          Reemplazar o agregar en el index.js el componente de{" "}
          {`<PrimeraApp />`}
          por el componente {`<CounterApp />`} (no se olviden del value que debe
          de ser un número) ✔️
        </li>
        <li>
          Asegúrense de no tener errores ni warnings (Cualquier warning no
          usado, comentar el código) ✔️
        </li>
      </ol>
      <hr className="my-5" />
      <CounterApp
        value={666}
        title="Counter App tarea"
        msg="value desde el componente padre: "
        showButtons={false}
      />
      <CounterApp value={0} img={gif} />
      <hr />
      <h4 className="text-info">Introducción a las pruebas AAA:</h4>
      <ul>
        <li className="Code">Arrange (Arreglar)</li>
        <li className="Code">Act (Actuar)</li>
        <li className="Code">Assert (Afirmar)</li>
        <li>Primeras pruebas</li>
        <li>Jest</li>
        <li>Expect</li>
        <li>toBe</li>
        <li>Enzyme</li>
        <li>Comandos útiles en la terminal para pruebas</li>
        <li>Revisar elementos renderizados en el componente</li>
        <li>Simular eventos</li>
      </ul>
      <hr />
      <h4 className="text-info">
        Iniciando pruebas con Enzyme <em>React 17</em>
      </h4>
      <ol>
        <li>Crear el archivo setupTests.js dentro de src</li>
        <li>
          instalar enzyme: <code class="d-block">npm i --save-dev enzyme</code>
        </li>
        <li>
          Instalar el adaptador:
          <code class="d-block">
            npm install --save-dev @wojtekmaj/enzyme-adapter-react-17
          </code>
        </li>
        <li>
          Instalar los snapshots:
          <code class="d-block">npm install --save-dev enzyme-to-json</code>
        </li>

        <li>
          Configurar el setupTests.js:
          <code className="d-block">
            <ul className="list-unstyled">
              <li>import Enzyme from 'enzyme';</li>
              <li>import Adapter from '@wojtekmaj/enzyme-adapter-react-17';</li>
              <li>{`import { createSerializer } from 'enzyme-to-json';`}</li>
              <li>
                <br />
              </li>
              <li>{`Enzyme.configure({ adapter: new Adapter() });`}</li>
              <li>{`expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }));`}</li>
            </ul>
          </code>
        </li>

        <li>Bajar y subir la terminal</li>
      </ol>
      <h4 className="text-info">
        Para activar el intellisense de enzyme y jest
      </h4>
      <ol>
        <li>
          Instalar:
          <code className="d-block">npm i @types/jest</code>
          <code className="d-block">npm i -g @types/jest</code>
        </li>
        <li>
          Opcinalmente pueden agregar un archivo jsconfig.json a la raíz del
          proyecto si el paso anterior no funciona
          <code className="d-block">
            {`{"typeAcquisition": { "include": ["jest"]}}
            `}
          </code>
        </li>
      </ol>
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
