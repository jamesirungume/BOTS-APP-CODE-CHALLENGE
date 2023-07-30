import React, { useState } from "react";

function FilterByClass()  {
    const [selectClasse,setSelectedClassse] = useState([])
    const classes = ["Support", "Medic", "Assault", "Defender", "Captain", "Witch"]
  
function handleClassChange(e) {
const 
}

    return (
 <div>
    {classes.map(classe => (
     <label>
        <input
        type="checkbox"
        value={classe}
        checked={selectClasse.includes(classe)}
        onChange={handleClassChange}
        />
     </label>
            ))}
         
  </div>
    )
}

export default FilterByClass;