//import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import Banner from './components/Banner';
import Footer from './components/Footer';
import ShoppingList from './components/ShoppingList';
import Pannier from './components/Pannier';
function App() {
  
  return (
    <div className="App">
      <Banner/>
      
      <ShoppingList/>
      <Footer/>
    </div>
  );
}

export default App;
