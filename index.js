const express = require("express");
const formidable = require("express-formidable");
const cors = require("cors");
// require("dotenv").config();

// Package mailgun
// const mailgun = require("mailgun-js")({
//   apiKey: process.env.MAILGUN_API_KEY,
//   domain: process.env.MAILGUN_DOMAIN,
// });

const app = express();
app.use(formidable());
app.use(cors());

app.post("/form", (req, res) => {
  console.log(req.fields);
  // Objet DATA avec les infos
  const data = {
    from: `${req.fields.firstname} ${req.fields.lastname}  <${req.fields.email}>`,
    to: "jd.edighoffer@gmail.com",
    subject: "Formulaire rempli",
    text: `${req.fields.message}`,
  };
});

//   Fonctions fournies par le package mailgun pour créer le mail et l'envoyer :
// mailgun.messages().send(data, (error, body) => {
//   la callback récupère un objet nommé error et un objet nommé body => ces 2 objets contiennent des infos sur la réussite ou l'échec de l'envoi du mail :
//   console.log(body);
//   console.log(error);

//   if (error === undefined) {
// s'il n'y a pas eu d'erreur lors de l'envoi du mail, on envoie la réponse suivante au frontend :
//     res.json({ message: "Données du form bien reçues, mail envoyé." });
//   } else {
// s'il y a eu une erreur lors de l'envoi du mail, on envoie la réponse suivante au frontend :
//     res.json(error);
//   }
// });

app.all("*", (req, res) => {
  res.json({ message: "All routes" });
});

app.listen(3000, () => {
  console.log("Server started");
});
