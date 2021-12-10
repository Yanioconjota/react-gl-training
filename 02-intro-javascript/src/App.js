import "./App.scss";
import Arrays from "./bases/Arrays";
import AsyncAwait from "./bases/AsyncAwait";
import ConstLet from "./bases/ConstLet";
import DestructuringArr from "./bases/DestructuringArr";
import DestructuringObj from "./bases/DestructuringObj";
import FetchApi from "./bases/FetchApi";
import Functions from "./bases/Functions";
import ImportExport from "./bases/ImportExport";
import ObjectLiteral from "./bases/ObjectLiteral";
import Promises from "./bases/Promises";
import TemplateString from "./bases/TemplateString";
import TernaryOperator from "./bases/TernaryOperator";

function App() {
  return (
    <div>
      <ConstLet />
      <hr />
      <TemplateString />
      <hr />
      <ObjectLiteral />
      <hr />
      <Arrays />
      <hr />
      <Functions />
      <hr />
      <DestructuringObj />
      <hr />
      <DestructuringArr />
      <hr />
      <ImportExport />
      <hr />
      <Promises />
      <hr />
      <FetchApi />
      <hr />
      <AsyncAwait />
      <hr />
      <TernaryOperator />
    </div>
  );
}

export default App;
