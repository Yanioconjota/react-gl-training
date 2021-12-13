/* eslint-disable array-callback-return */
import heroes, { owners } from "../data/heroes";

//find() devuelve el único que cumple con la condición
const getHeroeById = (id) => heroes.find((el) => el.id === id);
//filter() devuelve los elementos que cumlen con la condición
const getHeroeByOwner = (owner) => heroes.filter((el) => el.owner === owner);

function ImportExport() {
  const [ owner1, owner2 ] = owners; 

  return (
    <div>
      <ul>
        {heroes.map((heroe, i) => {
          return (
            <li key={i}>
              {heroe.id} {heroe.name} {heroe.owner}
            </li>
          );
        })}
      </ul>
      <p>Héroes por Owner</p>
      <ul>
        {heroes.map((heroe, i) => {
          if (heroe.owner === "DC") {
            return (
              <li key={i}>
                ID: {heroe.id} Nombre: {heroe.name} Owner:{heroe.owner}
              </li>
            );
          }
        })}
        {heroes.map((heroe, i) => {
          if (heroe.owner === "Marvel") {
            return (
              <li key={i}>
                {heroe.id} {heroe.name} {heroe.owner}
              </li>
            );
          }
        })}
      </ul>
      <p>Owners: { owner1 }, { owner2 }</p>
    </div>
  );
}

export {
  ImportExport as default,
  getHeroeById,
  getHeroeByOwner
};