import { getHeroeById, getHeroeByOwner } from "./ImportExport";

function Promises() {
  const [{ name, owner }] = getHeroeByOwner('DC');
  const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const heroe = getHeroeById(id);
        heroe ? resolve(heroe) : reject("No pudo encontrarse el héroe");
      }, 1000);
    })
      .then(console.log )
      .catch( console.warn );
  }
  getHeroeByIdAsync(2);
  return (
    <div>
      <p>
        { name } { owner }
      </p>
    </div>
  );
}

export default Promises;