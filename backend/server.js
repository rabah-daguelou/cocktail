/******************************/
/*  Import des modules */ 

const express= require('express');
const cors = require ('cors');

const errorHandler = require ('./errors/errorHandler')


/*** Import de la connexion à la DB  */
let DB = require('./db.config')

/***         */
const checkTokenMiddleware = require ('./jsonwebtoken/check')
/***********************/
/*** Initialisation de l'API */
const app = express();

app.use(cors());
app.use(express.json());
//app.use(express.urlencoded({extented:true}));

/******************************/
// Import des modules de routage
const user_router= require('./routes/users');
const cocktail_router= require('./routes/cocktails');
const auth_router = require ('./routes/auth.js');

/*****************************/
/*** Mise en place du routage */
app.get('/', (req, res)=> res.send("I'm online weldone !"));

app.use('/users', user_router);
app.use('/cocktails', cocktail_router);
app.use('/auth', auth_router);

// Une ressource inexistante
app.get ('*', (req, res)=> res.status(501).send (" What the hell are you doing ?! "));

// Gestion des erreurs
app.use(errorHandler)

/***********************/
/*** Démarrer le serveur */
DB.authenticate()
    .then (()=> console.log ('Database connection OK!'))
    .then(()=> {
        app.listen (process.env.SERVER_PORT, ()=> {
        console.log(`The server is running on port ${process.env.SERVER_PORT}. Have fun !`)
        })
    })
    .catch (error => console.log ('Database Error!',error) )

