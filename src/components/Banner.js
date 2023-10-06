import React from 'react'
 import '../styles/Banner.css'
import logo from '../assets/logo.png';

const Banner = () => {
  return (
    <div style={{
        color:'black',
        textAlign:'right',
        padding:32,
        borderBottom:'solid 3px black',
        display:'flex',
        flexDirection:'row',
        justifyContent:'end'
    }}>
        
        <img  width="50px" height="50px" src={logo}></img>
        <h1>La maison jungle</h1></div>
  )
}

export default Banner