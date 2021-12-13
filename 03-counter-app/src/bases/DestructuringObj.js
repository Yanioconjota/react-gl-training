function DestructuringObj() {
  const person = {
    username: "Tony",
    age: 45,
    password: "Ironman",
  };

  const person2 = {
    username: "Peter",
    age: 17,
    password: "spiderman"
  };

  const { username, age, password } = person;
  // console.log(username, age, password);

  const useContext = ({username, age, password, powers = 'does whatever a spider can'}) => {
    //console.log(username, age, password, powers);
    return {
      codeName: password,
      ability: powers,

      latLng: {
        lat: 40.7535178,
        lng: -73.9789399
      }
    };
  };

 const avenger = useContext(person2);

 const { codeName, ability, latLng: {lat, lng} } = avenger;

 console.log({codeName, ability, lat, lng})

  return (
    <div>
      <p> {username} {age} {password}</p>
      <p> {codeName} {ability}</p>
      <p> {lat} {lng}</p>
    </div>
  );
}

export default DestructuringObj;