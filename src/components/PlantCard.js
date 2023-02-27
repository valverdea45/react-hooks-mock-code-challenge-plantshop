import React, { useState } from "react";
// import EditForm from "./EditForm";

function PlantCard({ plant, onUpdatedPlant, onDeletePlant }) {

  const [ isStocked, setIsStocked] = useState(true)
  const [ isClicked, setIsClicked ] = useState(false)
  const [ newPlantPrice, setNewPlantPrice ] = useState(plant.price)

  function handleClick() {
    setIsStocked((isStocked) => !isStocked)
  }

  function handlePriceChange() {
    setIsClicked((isClicked) => !isClicked)
  }

  function handleNewPriceChange(e) {
    setNewPlantPrice(e.target.value)
  }

  function handleSubmit(e) {

    e.preventDefault()

    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "price": parseFloat(newPlantPrice)
      })
    })
    .then((data) => data.json())
    .then((updatedPlant) => onUpdatedPlant(updatedPlant))
    setIsClicked(false)
  }

  function handleDeleteClick() {
    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: "DELETE"
    })
    onDeletePlant(plant)
  }

  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      {isClicked ? 
      <form onSubmit={handleSubmit}><input value={newPlantPrice} placeholder={plant.price} onChange={handleNewPriceChange}/> <button type="submit">submit</button></form> 
      : 
      <p onClick={handlePriceChange}>Price: {plant.price}</p>}
      {isStocked ? (
        <button onClick={handleClick} className="primary">In Stock</button>
      ) : (
        <button onClick={handleClick}>Out of Stock</button>
      )}
      <button onClick={handleDeleteClick}>Remove Plant</button>
    </li>
  );
}

export default PlantCard;
