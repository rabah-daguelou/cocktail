const errorHandler = (error, req, res, next) => {
    
    console.log (" Je suis dans le middleware errorHandler !");
    console.log ("Erreur:", error)
    
    return res.status(error.statusCode || 500).json({message: error.message, error: error})
}

module.exports = errorHandler