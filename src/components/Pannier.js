import React from 'react'
import { useEffect,useState } from 'react';
import '../styles/Pannier.css'
const Pannier = ({ plant, addToCart }) => {

   // Utilisez le state local pour stocker les éléments du panier et le total
   const [cartItems, setCartItems] = useState([]);
   const [total, setTotal] = useState(0);
   
   useEffect(() => {
     // Récupérez les éléments du panier depuis le Local Storage lors de l'initialisation
     const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
     setCartItems(storedCart);
     console.log(storedCart);
 
     // Calculez le total
     const calculatedTotal = storedCart.reduce((acc, item) => acc + item.price, 0);
     setTotal(calculatedTotal);
   }, []);
   const viderPanier=()=>{
    localStorage.removeItem('cart');
   }
  return (
   
    <div className="cart">
      <p>Panier</p>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>{item.name} - {item.price} $</li>
        ))}
      </ul>
      <p>Total : {total} $</p>
      <button onClick={()=>viderPanier()}>vider le panier</button>
    </div>
  );
};
  


export default Pannier