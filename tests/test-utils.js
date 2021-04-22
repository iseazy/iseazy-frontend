import { generateInitialCards } from '../src/api/gameContext/gameContextData';
import {
  KEY_CTXT_ACTIVE_CARDS,
  KEY_CTXT_ALLOWED,
  KEY_CTXT_CARDS,
  KEY_CTXT_FOUND_CARDS,
  KEY_CTXT_GAME_FINISHED,
} from '../src/api/gameContext/gameContextKeys';

const mockDataCards = generateInitialCards(4);

const mockDefaultContext = {
  [KEY_CTXT_CARDS]: mockDataCards,
  [KEY_CTXT_ACTIVE_CARDS]: [],
  [KEY_CTXT_FOUND_CARDS]: 0,
  [KEY_CTXT_ALLOWED]: true,
  [KEY_CTXT_GAME_FINISHED]: false,
};

export { mockDataCards, mockDefaultContext };
