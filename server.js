const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 8081;
const fileUpload = require('express-fileupload');
app.use(fileUpload());
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const dbConfig=require("./src/db.Config.js");
const cors = require('cors');
app.use(cors());
// create connection
const connection = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
});


connection.connect(
    (error)=>{
        if(error) throw error;
        console.log("Successfully connected to the database.");
    });
    app.listen(port,()=>{
      console.log(`Server is running on http://localhost:${port}`);
    });
  app.get('/plantes',(req,res)=>{
    const query= 'SELECT * FROM plantes';
    connection.query(query,(err,results)=>{
      if(err){
        res.status(500).send('Erreur lors de la récuperation des données des plantes');
        }else {
        
          res.json(results)
      };
    });
  })
  
  //: id => c a dire que id est un parametre dynamique , toute attribut qui contient ":"  , c'est un attribut dynamique
  app.delete('/plantes/delete/:id', (req, res) => {
    const id = req.params.id;
    const sql = 'DELETE FROM plantes WHERE id = ?';
  
    connection.query(sql, [id], (err, results) => {
      if (err) {
        console.log('Impossible de supprimer la plante');
        res.status(500).send('Erreur lors de la suppression de la plante');
      } else {
        res.json({ message: 'Plante supprimée avec succès' });
      }
    });
  });
  // Définissez une nouvelle route POST pour ajouter une plante
  app.post('/plantes/add', (req, res) => {
    const { name, category, light, price, water } = req.body;
  
    // Effectuez des validations des données si nécessaire
  
    const sql = 'INSERT INTO plantes (name, category, light, price, water, cover) VALUES (?, ?, ?, ?, ?, ?)';
  
    connection.query(sql, [name, category, light, price, water, req.file], (err, results) => {
      if (err) {
        console.log('Impossible d\'ajouter la plante');
        res.status(500).send('Erreur lors de l\'ajout de la plante');
      } else {
        res.json({ message: 'Plante ajoutée avec succès' });
      }
    });
  });
  

module.exports=connection;

