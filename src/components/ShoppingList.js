import React, { useEffect, useState } from 'react'
import '../styles/ShoppingList.css'
import Categorie from './Categorie'
import Pannier from './Pannier';
import '../styles/Pannier.css';
import { plantList } from '../plantList'
import PlantItem from './PlantItem';
import Addplant from './Addplant';
const ShoppingList = () => {
	const addToCart = (plant) => {
		const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
		existingCart.push(plant);
		localStorage.setItem('cart', JSON.stringify(existingCart));
	  };
	
	
	const Categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category), [])
	return (
		<div >
			<Pannier/>
			<Categorie />
			<PlantItem addToCart={addToCart}/>
			<Addplant/>
			<br />
			<hr />
		</div>
	)
}

export default ShoppingList