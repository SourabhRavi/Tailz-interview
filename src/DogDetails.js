import React from "react";

function DogDetails({ name, breed, photo, vaccination, date, dob, gender }) {
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
          <b>Vaccination:</b> {vaccination}
        </p>
        <p>
          <b>Date:</b> {date}
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
