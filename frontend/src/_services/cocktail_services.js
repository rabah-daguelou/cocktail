import Axios from './caller_service'

// 1- Récupérer tous les cocktails
let getAllCocktails = () => {
    return Axios.get('/cocktails')
}

// 2- Récupérer un seul utilisateur
let getOneCocktail = (id) => {
    return Axios.get(`/cocktails/${id}`)
}

// 3- Modifier un utilisateur
let modifyOneCocktail = (cocktail) => {
    return Axios.patch(`cocktails/${cocktail.id}`, user)
}

// 4- Créer un utilisateur
let addOneCocktail = (cocktail) => {
    return Axios.put ('cocktails', cocktail)
}

// -5 Supprimer un utilisateur
let deleteOneCocktail = (cocktailId) => {
    return Axios.delete ('cocktails/trash/'+cocktailId)
}

// Exporter les fonctions
export const cocktailServices= {
    getAllCocktails,
    getOneCocktail,
    modifyOneCocktail,
    addOneCocktail,
    deleteOneCocktail
}
