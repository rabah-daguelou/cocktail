
class Eleve {
    constructor (nom, note) {
        this.nom = nom;
        this.note = note;
    }
    sePresenter() {
        return `Bonjour ${this.nom}`
    }
    moyenne () {
        let total = 0;
        for ( let x of this.note) {
            total += x;
        }
        if (this.note.length == 0) {
            return 0;
        } else {
            return parseInt(total / this.note.length);
        }
    }
}

let eleve1 = new Eleve ('Lounis', [10, 14, 16]);
let eleve2 = new Eleve ('Lounis', [12, 14, 20]);
let eleve3 = new Eleve ('Lounis', [15, 14, 20]);

console.log (eleve1.sePresenter());
