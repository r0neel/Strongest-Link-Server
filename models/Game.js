const gamesData = [];

class Game {
    constructor(data){
        for(let key in data) {
            // change this later
            this[key] = data[key];
        }
    }

    static get all() {
        
    }

    static get leaderboard() {
        
    }

    static createGame(){

    }

    updateOptions(){
        
    }

    startGame(){

    }
    
    joinGame(user){

    }

    delete(){

    }
}