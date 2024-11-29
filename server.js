const express = require("express");
const app = express();
const fs = require('fs');
const PORT =3000;
const cors = require("cors");
app.use(cors({
    origin: '*' 
}));

// Laitiers
app.get('/api/data', (req, res) => {
    fs.readFile('./data.json',  (err, data) => {
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

// API laitiers :
    // https://api-pr0m.onrender.com/api/laitiers
// API Produit Menage :
    // https://api-pr0m.onrender.com/api/ProduitMenage
// API charcuterie:
    //  https://api-pr0m.onrender.com/api/charcuterie
// API viande:
    //  https://api-pr0m.onrender.com/api/viande

// API Legume Fruit:
    //  https://api-pr0m.onrender.com/api/legumeFruit