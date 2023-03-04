// Import des modules

const bcrypt= require ('bcrypt');
const jwt= require ('jsonwebtoken');
const { AuthenticationErrors } = require('../errors/customErrors');
const User= require ('../models/user');

// Routage de la ressource auth
exports.login = async (req, res, next)=> {
       try {
        const {email, password} = req.body;

        // Vérifier s'il y'a l'email et le password
        if(!email || !password) {
            throw new AuthenticationErrors('Bad email or password ! ', 0)
        //  return res.status(400).json({ message: ' Missing email or password !'})
        }
 
         // Vérifier l'existance de l'email dans la DB
        let user = await User.findOne({where:{email:email}, row: true})
        if (user===null) {
            throw new AuthenticationErrors ('This user does not exists ! ', 1)
            //return res.status(400).json({message: 'This user does not exists !'})
        }

        // Vérifier le mot de passe
        let test = await User.checkPassword(password, user.password)
            if (!test) {
                throw new AuthenticationErrors ('Wrong password !', 2)
            }
    
            // Génération du token
        const token = await jwt.sign (
            {
                id: user.id,
                first_name: user.first_name,
                last_name: user.last_name,
                email: user.email
            },
            process.env.JWT_SECRET_TOKEN,
            {
                expiresIn: process.env.JWT_DURING
            }
        )
        console.log ('Connecté !')
        return res.json({access_token: token})
    } catch (err) {
        next (err)
    }
}