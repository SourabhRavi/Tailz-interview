import React from "react";

function DogDetails({ name, breed, photo, vaccination, weight, dob, gender }) {
  return (
    <>
      <div className="dog-item">
        <img src={photo} alt="..." />
        <p>
          <b>Name:</b> {name}
        </p>
        <p>
          <b>Breed:</b> {breed}
        </p>
        <p>
          <b>Vaccination:</b> {vaccination ? "Done" : "Not done"}
        </p>
        <p>
          <b>Weight:</b> {weight}
        </p>
        <p>
          <b>DOB:</b> {dob}
        </p>
        <p>
          <b>Gender:</b> {gender}
        </p>
      </div>
    </>
  );
}

export default DogDetails;
