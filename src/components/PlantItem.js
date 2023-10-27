import React from 'react'
import axios from 'axios';
import { useEffect,useState } from 'react';
const PlantItem = () => {
    let [pannier, setPannier] = useState([]);
    const [plants, setPlants] = useState([]);
    
useEffect(()=>{
  fetch('http://localhost:8081/plantes')
  .then((response) => response.json())
  .then((data)=>setPlants(data))
  .catch((error)=>console.log(error));
},[plants]);

const handleDeleteplant=async (plant) => {
  try {
     const response = await axios.delete(`http://localhost:8081/plantes/delete/${plant.id}`);
     console.log(response.data);
  } catch (error) {
     console.error(error);
  }
};

      const handleAddToCart = (plant) => {
        // Récupérez le panier existant depuis le Local Storage (s'il existe)
        const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    
        // Ajoutez le nouveau plant au panier
        existingCart.push(plant);
    
        // Mettez à jour le panier dans le Local Storage
        localStorage.setItem('cart', JSON.stringify(existingCart));
      };
 
   
   return (
    <div>
      <ul className='Plantes'>
       
        {plants.length === 0 ? (
          <p>Chargement en cours...</p>
        ) : (
          plants.map((plant) => (
            <div className='ImageName' key={plant.id}>
              <img className='ImageP' src={plant.cover} alt={plant.name} />
              <p>{plant.name}</p>
              <p>{plant.category}</p>
              <p>{plant.light}</p>
              <p>{plant.price}</p>
              <button onClick={() => handleAddToCart(plant)}>Ajouter au panier</button>
              <button onClick={()=>handleDeleteplant(plant)}>supprimer plante</button>
            </div>
          ))
        )}
      </ul>
    </div>
  );
};


export default PlantItem