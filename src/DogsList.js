import React from "react";

function DogsList({ name, breed, photo, handleClick, id }) {
  return (
    <>
      <div className="dog-item" onClick={() => handleClick(id)}>
        <img src={photo} alt="..." />
        <p>
          <b>Name:</b> {name}
        </p>
        <p>
          <b>Breed:</b> {breed}
        </p>
      </div>
    </>
  );
}

export default DogsList;
