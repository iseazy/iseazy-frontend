import {STARTGAME, SOLVEDMATCH, FINISHGAME, FLIPPEDCARD} from "../../models/constants";

export function startGame(){
  return {
    type: STARTGAME
  };
};

export function finishGame(formatDate: string){
    return {
      type: FINISHGAME,
      formatDate: formatDate
    };
};

export function solvedMatch(){
  return {
    type: SOLVEDMATCH,
  };
};

export function flippedCard(cardID: number){
  return {
    type: FLIPPEDCARD,
    cardID: cardID
  };
};