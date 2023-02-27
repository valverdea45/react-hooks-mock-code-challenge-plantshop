import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, onUpdatedPlant, onDeletePlant }) {

  const plantCards = plants.map((plant) => {
    return <PlantCard onUpdatedPlant={onUpdatedPlant} key={plant.id} plant={plant} onDeletePlant={onDeletePlant} />
  })

  return (
    <ul className="cards">{plantCards}</ul>
  );
}

export default PlantList;
