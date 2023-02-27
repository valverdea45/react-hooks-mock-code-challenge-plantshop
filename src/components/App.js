import React, { useState, useEffect } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {

  const [plants, setPlants] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then((data) => data.json())
    .then((allPlants) => setPlants(allPlants))
  }, [])

  function onAddPlant(newPlant) {
    setPlants([ ...plants, newPlant ])
  }
  
  const currentDisplay = plants.filter((plant) => {
    return plant.name.toLowerCase().includes(search.toLowerCase())
  })

  function onUpdatedPlant(updatedPlant) {
    const newArrayOfPlants = plants.map((plant) => {
      if(updatedPlant.id === plant.id) {
        return updatedPlant
      } else {
        return plant
      }
    })
    setPlants(newArrayOfPlants)
  }

  function onDeletePlant(deletedPlant) {
    const newArrayOfPlants = plants.filter((plant) => {
      return plant.id !== deletedPlant.id
    })
    setPlants(newArrayOfPlants)
  }

  return (
    <div className="app">
      <Header />
      <PlantPage plants={currentDisplay} onAddPlant={onAddPlant} search={search} setSearch={setSearch} onUpdatedPlant={onUpdatedPlant} onDeletePlant={onDeletePlant} />
    </div>
  );
}

export default App;
