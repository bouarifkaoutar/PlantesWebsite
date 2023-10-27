import React, { useEffect, useState } from 'react';
import '../styles/Pannier.css';

const Pannier = () => {
  // Utilisez le state local pour stocker les éléments du panier et le total
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Récupérez les éléments du panier depuis le Local Storage lors de l'initialisation
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCart);
  }, []);

  const viderPanier = () => {
    localStorage.removeItem('cart');
    setCartItems([]); // Mettez à jour l'état local pour vider le panier
  };

  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="cart">
      <p>Panier</p>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.name} - {item.price} $
          </li>
        ))}
      </ul>
      <p>Total : {total} $</p>
      <button onClick={viderPanier}>Vider le panier</button>
    </div>
  );
};

export default Pannier;
