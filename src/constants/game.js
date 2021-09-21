export const GAME_STATE = {
    IDLE: 'idle',
    PLAY: 'play',
    END: 'end'
}

export const GAME_ACTIONS = {
    START: 'game_start',
    END: 'game_end',
    CLICK: 'game_click',
    UPDATE: 'game_update'
}

export const INITIAL_STATE = {
    gameState: GAME_STATE.IDLE,
    cards: [],
    startTime: 0,
    totalTime: 0
}

export const REPEATED_CARDS =  2;

export const GAME_UPDATE_DELAY = 500;
