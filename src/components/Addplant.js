import React, { useState } from 'react';
import axios from 'axios';
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '10px',
    marginLeft:'0px'
  },
  input: {
    padding: '5px',
    width: '100%',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  fileInput: {
    padding: '5px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  fileInfo: {
    marginTop: '10px',
  },
  button: {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '10px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

const Addplant = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [light, setLight] = useState("");
  const [water, setWater] = useState("");
  const [price, setPrice] = useState("");

  const handleFileInput = (event) => {
    setSelectedFile(event.target.files[0]);
  }

  const onFileUpload = () => {
    // Créez un objet FormData pour envoyer les données
    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("name", name);
    formData.append("category", category);
    formData.append("light", light);
    formData.append("water", water);
    formData.append("price", price);

    // Utilisez Axios pour envoyer les données au serveur
    axios.post('http://localhost:8081/plantes/add', formData)
      .then((response) => {
        console.log(response.data); // Gérer la réponse du serveur ici
        // Réinitialisez les champs du formulaire ou effectuez d'autres actions après l'ajout
        setSelectedFile(null);
        setName("");
        setCategory("");
        setLight("");
        setWater("");
        setPrice("");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
   
      <div style={styles.container}>
        <form>
          <label style={styles.label}>
            Name:
            <input type="text" style={styles.input} value={name} onChange={(e) => setName(e.target.value)} />
          </label>
          <label style={styles.label}>
            Category:
            <input type="text" style={styles.input} value={category} onChange={(e) => setCategory(e.target.value)} />
          </label>
          <label style={styles.label}>
            Light:
            <input type="text" style={styles.input} value={light} onChange={(e) => setLight(e.target.value)} />
          </label>
          <label style={styles.label}>
            Water:
            <input type="text" style={styles.input} value={water} onChange={(e) => setWater(e.target.value)} />
          </label>
          <label style={styles.label}>
            Price:
            <input type="text" style={styles.input} value={price} onChange={(e) => setPrice(e.target.value)} />
          </label>
          <input type="file" style={styles.fileInput} onChange={handleFileInput} />
          <p style={styles.fileInfo}>{selectedFile ? selectedFile.name : 'Aucun fichier sélectionné'}</p>
          <button type="button" style={styles.button} onClick={onFileUpload}>Créer la plante</button>
        </form>
      </div>
    );
    
};


export default Addplant;
