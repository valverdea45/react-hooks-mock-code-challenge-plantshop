import React, { useState } from "react";

function NewPlantForm({ onAddPlant }) {

  const [ plantImage, setPlantImage ] = useState("")
  const [ plantCost, setPlantCost ] = useState(0)
  const [ plantName, setPlantName ] = useState("")

  function handleSubmit(e) {

    console.log("Submitted!!!!!")
    
    e.preventDefault()
    const objToBeSent = {
      name: plantName,
      image: plantImage,
      price: plantCost
    }

    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(objToBeSent)
    })
    .then((data) => data.json())
    .then((newPlant) => onAddPlant(newPlant))

    setPlantName("")
    setPlantCost(0)
    setPlantImage("")

  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setPlantName(e.target.value)} value={plantName} name="name" placeholder="Plant name" />
        <input type="text" onChange={(e) => setPlantImage(e.target.value)} value={plantImage} name="image" placeholder="Image URL" />
        <input onChange={(e) => setPlantCost(parseFloat(e.target.value))} type="number" name="price" value={plantCost} step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
