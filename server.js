const express = require("express");
const app = express();
const fs = require('fs');
const PORT =3000;

app.listen(PORT,()=>{
    console.log(`Le serveur est lancé sur le port ${PORT}`);
});


app.get('/api/users', (req, res) => {
    fs.readFile('./data.json',  (err, data) => {
        if (err) {
            console.error("Erreur lors de la lecture du fichier JSON", err);
            res.status(500).send("Erreur interne du serveur");
            return;
        }
        res.json(JSON.parse(data));
    });
});