import React, { useState, useEffect } from "react";

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
    <div>
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
