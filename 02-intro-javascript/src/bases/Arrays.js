const array = [1, 2, 3, 4];

let array2 = [...array, 5];

console.log(array);
console.log(array2);

let array3 = array2.map((x) => x * 2);
let array4 = array2.filter((x) => x % 2 === 0);

console.log(array);
console.log(array2);
console.log(array3);
console.log(array4);

function Arrays() {
  const array = [1, 2, 3, 4];

  let array2 = [...array, 5];

  console.log(array);
  console.log(array2);

  let array3 = array2.map((x) => x * 2);
  let array4 = array2.filter((x) => x % 2 === 0);

  let arrayToShow = [array, array2, array3, array4]

  console.log(array);
  console.log(array2);
  console.log(array3);
  console.log(array4);
  
  return (
    <div>
      <ul>
        {arrayToShow.map((el, i) => {
          return <li key={i}>{el}</li>;
        })}
      </ul>
    </div>
  );
}

export default Arrays;