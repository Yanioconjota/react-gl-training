import "./App.scss";
import Arrays from "./bases/Arrays";
import ConstLet from "./bases/ConstLet";
import DestructuringArr from "./bases/DestructuringArr";
import DestructuringObj from "./bases/DestructuringObj";
import Functions from "./bases/Functions";
import ImportExport from "./bases/ImportExport";
import ObjectLiteral from "./bases/ObjectLiteral";
import TemplateString from "./bases/TemplateString";

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
    </div>
  );
}

export default App;
