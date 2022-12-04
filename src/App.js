import { useEffect, useState } from "react";
import DogsList from "./DogsList";
import DogDetails from "./DogDetails";
import "./App.css";

function App() {
  const [dogs, setDogs] = useState();
  const [input, setInput] = useState();
  const [clicked, setclicked] = useState(false);

  function getDogs() {
    const url = "https://run.mocky.io/v3/bead2d59-fd3e-428a-8c90-8db02c40165e";
    fetch(url)
      .then((response) => response.json())
      .then((data) => setDogs(data.pets.map((item) => item)))
      .catch((err) => console.log(err));
  }

  function getDogDetails() {
    const url = "https://run.mocky.io/v3/058a2383-9e30-4322-aff6-d297b053ae85";
    fetch(url)
      .then((response) => response.json())
      .then((data) => setDogs(data.data))
      .catch((err) => console.log(err));
  }

  console.log(dogs);

  useEffect(() => {
    getDogs();
  }, []);

  function handleInput(e) {
    setInput(e.target.value);
  }

  function handleClick(id) {
    getDogDetails();
    setclicked(true);
    setDogs(dogs.filter((item) => item.id === id));
  }

  return (
    <>
      <input type="text" name="test" onChange={handleInput} value={input} />
      <div className="container">
        <div className="dogs-list">
          {input && !clicked
            ? dogs.map((item) => (
                <DogsList
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  breed={item.breed}
                  photo={item.photo}
                  handleClick={handleClick}
                />
              ))
            : null}
          {clicked && (
            <DogDetails
              key={dogs.id}
              name={dogs.name}
              breed={dogs.breed}
              photo={dogs.photo}
              vaccination={dogs.vaccination}
              weight={dogs.weight}
              dob={dogs.dob}
              gender={dogs.gender}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
