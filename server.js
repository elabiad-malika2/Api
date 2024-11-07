const express = require("express");
const app = express();
const fs = require('fs');
const PORT =3000;

// Laitiers
app.get('/api/laitiers', (req, res) => {
    fs.readFile('./laitiers.json',  (err, data) => {
        if (err) {
            console.error("Erreur lors de la lecture du fichier JSON", err);
            res.status(500).send("Erreur interne du serveur");
            return;
        }
        res.status(200).json(JSON.parse(data));
    });
});
// Produit Menage
app.get('/api/ProduitMenage', (req, res) => {
    fs.readFile('./ProduitMenage.json',  (err, data) => {
        if (err) {
            console.error("Erreur lors de la lecture du fichier JSON", err);
            res.status(500).send("Erreur interne du serveur");
            return;
        }
        res.status(200).json(JSON.parse(data));
    });
});

// Charcuterie

app.get('/api/charcuterie', (req, res) => {
    fs.readFile('./charcuterie.json',  (err, data) => {
        if (err) {
            console.error("Erreur lors de la lecture du fichier JSON", err);
            res.status(500).send("Erreur interne du serveur");
            return;
        }
        res.status(200).json(JSON.parse(data));
    });
});

// Viande

app.get('/api/viande', (req, res) => {
    fs.readFile('./viande.json',  (err, data) => {
        if (err) {
            console.error("Erreur lors de la lecture du fichier JSON", err);
            res.status(500).send("Erreur interne du serveur");
            return;
        }
        res.status(200).json(JSON.parse(data));
    });
});

// Legume Fruit

app.get('/api/legumeFruit', (req, res) => {
    fs.readFile('./legumeFruit.json',  (err, data) => {
        if (err) {
            console.error("Erreur lors de la lecture du fichier JSON", err);
            res.status(500).send("Erreur interne du serveur");
            return;
        }
        res.status(200).json(JSON.parse(data));
    });
});

app.listen(PORT,()=>{
    console.log(`Le serveur est lancé sur le port ${PORT}`);
});


