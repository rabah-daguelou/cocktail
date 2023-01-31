class MainErrors extends Error {
    
    constructor (errorMessage, errorType=''){
       super()

       //this.name = this.consturctor.name
       this.message = errorMessage

       switch (this.constructor.name) {
        
        case 'AuthenticationErrors':
            switch (errorType) {
                case 0:
                    this.statusCode = 400
                    break
                case 1: 
                    this.statusCode = 404
                    break
                case 2: 
                this.statusCode = 401
                break
                case 3: 
                    this.statusCode = 500
                    break
                default:
                    this.statusCode = 500
            }
            break

        case 'UserErrors':
            if (errorType == 0) {
                this.statusCode = 404
            } else {
                this.statusCode = 409
            }
            break

        case 'CocktailErrors':
           
            if (errorType == 0) {
                this.statusCode = 404
            } else {
                this.statusCode = 409
            }
            
            break

        case 'RequestErrors':
            this.statusCode = 400
            break

        default:
            console.log("No handler for that !")
       }    
    }
}

class AuthenticationErrors extends MainErrors{}
class RequestErrors extends MainErrors{}
class UserErrors extends MainErrors {}
class CocktailErrors extends MainErrors{}

module.exports = { AuthenticationErrors, RequestErrors, UserErrors, CocktailErrors}