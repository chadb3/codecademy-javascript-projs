/*
 * const team is an object that stores players and games
 * _players contains the players' names and ages. 
 * _games contains the games played with team played and the score of each team.
 * get players() returns this._players
 * 		- This is so you don't have to call team._players
 * get games() returns this._games
 * 		- this is so you don't have to call team._games
 * addPlayer takes in 3 variables
 * -firstName = player's first name
 * -lastName = player's last name
 * -age = players age
 * =These 3 are used to create a player that is added to the end of the _players array
 * 
 * addGame takes in 3 variables 
 * -opponent = name of opponent team
 * -teamPoints = number of points scored by "our" team
 * -opponentPoints = number of points scored by the opponent 
 * =these 3 variables are used to create a new game to appened to the end of _games.
 */
const team={
	_players:[{firstName: 'Pete', lastName: 'Wheeler', age: 54},{firstName: 'Frederick', lastName: 'Jenny', age: 22},{firstName: 'Micheal', lastName: 'Cecil', age: 19}],
	_games:[{opponent: 'Alpha',teamPoints:10,opponentPoints:12},{opponent: 'Bravo',teamPoints:12,opponentPoints:22},{opponent: 'Charlie',teamPoints:40,opponentPoints:12}],
	get players(){
		return this._players;
	},
	get games(){
		return this._games;
	},
	addPlayer(firstName,lastName,age){
		const newPlayer={firstName:firstName,lastName:lastName,age:age};
		//console.log(newPlayer);
		this._players.push(newPlayer);
	},
	addGame(opponent,teamPoints,opponentPoints){
		const newGame={opponent:opponent,teamPoints: teamPoints, opponentPoints: opponentPoints};
		//console.log(newGame);
		this._games.push(newGame);
	}
};
//adding new player
team.addPlayer("Bugs","Bunny",76);
//logging new player
console.log(team.players);
//adding new game
team.addGame("Titans",100,98);
//logging new game
console.log(team.games);
