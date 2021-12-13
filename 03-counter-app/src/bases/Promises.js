import { getHeroeById, getHeroeByOwner } from "./ImportExport";

const [{ name, owner }] = getHeroeByOwner("DC");
const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const heroe = getHeroeById(id);
      heroe ? resolve(heroe) : reject("No pudo encontrarse el héroe");
    }, 1000);
  })
};

function Promises() {
  return (
    <div>
      <p>
        { name } { owner }
      </p>
    </div>
  );
}

export {
  Promises as default,
  getHeroeByIdAsync
};