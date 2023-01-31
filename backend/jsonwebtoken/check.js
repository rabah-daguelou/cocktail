/***********************************/
/*** Import des module nécessaires */
const jwt = require('jsonwebtoken')

/*************************/
/*** Extraction du token */
const extractBearer = authorization => {

    if(typeof authorization !== 'string'){
        return false
    }

    // On isole le token
    const matches = authorization.match(/(bearer)\s+(\S+)/i)

    return matches && matches[2]

}


/******************************************/
/*** Vérification de la présence du token */
const checkTokenMiddleware = (req, res, next) => {

    const token = req.headers.authorization && extractBearer(req.headers.authorization)

    console.log ('********* Headers:', req.headers)
    console.log( '********* Token:', token)
    if(!token){
        return res.status(401).json({ message: 'Not token !'})
    }

    // Vérifier la validité du token
    jwt.verify(token, process.env.JWT_SECRET_TOKEN, (err, decodedToken) => {
        console.log('********* Erreur token:', err)
        console.log('********* DecodedToken:', decodedToken)
        if(err){
            return res.status(401).json({message: 'Bad token'})
        }

        next()
    })
}

module.exports = checkTokenMiddleware