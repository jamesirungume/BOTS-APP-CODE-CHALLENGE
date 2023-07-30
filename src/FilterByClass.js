import React, { useState, useEffect } from "react";
import './App.css';

function FilterByClass({ onClassChange }) {
  const [selectClasse, setSelectedClassse] = useState([]);
  const classes = ["Support", "Medic", "Assault", "Defender", "Captain", "Witch"];

  useEffect(() => {
    onClassChange(selectClasse);
  }, [selectClasse]);

  function handleClassChange(e) {
    const selectedClass = e.target.value;

    if (e.target.checked) {
      setSelectedClassse((prevClass) => [...prevClass, selectedClass]);
    } else {
      setSelectedClassse((prevClass) =>
        prevClass.filter((classe) => classe !== selectedClass)
      );
    }
  }

  return (
    <div style={{ display:"flex", justifyContent:"center",gap:"40px",fontSize:"large",backgroundColor:"#CBD4C2",height:"29px" }}>
      {classes.map((classe) => (
        <label key={classe}>
          <input
            type="checkbox"
            value={classe}
            checked={selectClasse.includes(classe)}
            onChange={handleClassChange}
          />
          {classe}
        </label>
      ))}
    </div>
  );
}

export default FilterByClass;
