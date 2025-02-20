export function createScoreBoard() {
    const players = {
      points:{
       'The Best Ever': 1000000
      }
    }
    return players.points;
  }
  export function addPlayer(scoreBoard, player, score) {
    createScoreBoard(scoreBoard)
    scoreBoard[player] = score
  
    return scoreBoard;
  }
  export function removePlayer(scoreBoard, player) {
    delete scoreBoard[player];
    return scoreBoard;
  }
  export function updateScore(scoreBoard, player, points) {
    scoreBoard[player] += points
    return scoreBoard;
  }
  export function applyMondayBonus(scoreBoard) {
    for(let key in scoreBoard){
      scoreBoard[key] += 100
    }
    return scoreBoard;
  }
  export function normalizeScore(params) {
    return params.normalizeFunction(params.score);
  }
  