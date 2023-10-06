import React from 'react'
import { plantList } from '../plantList'
import { useEffect,useState } from 'react';
const PlantItem = () => {
    let [pannier, setPannier] = useState([]);




      const handleAddToCart = (plant) => {
        // Récupérez le panier existant depuis le Local Storage (s'il existe)
        const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    
        // Ajoutez le nouveau plant au panier
        existingCart.push(plant);
    
        // Mettez à jour le panier dans le Local Storage
        localStorage.setItem('cart', JSON.stringify(existingCart));
      };
  return (
    <div><ul className='Plantes'>
    <div className='pannier'>
        
    </div>
    {plantList.map((plant) => {
        return <div className='ImageName'><li key={plant.id}><img className=" ImageP" src={plant.cover}></img> <p>{plant.name}</p><p>{plant.category}</p><p>{plant.light}</p><p>{plant.price}</p>
            <button onClick={()=>{handleAddToCart(plant)}} >Ajouter au panier</button>
        </li>
        </div>
    })}
</ul></div>
  )
}

export default PlantItem