import * as actionTypes from 'actionTypes'

export const matches = (state = null, action) => {
	switch(action.type) {
		case actionTypes.MATCHES:
			const tmpState = [...state]
			tmpState.push(action.payload)
			
			return tmpState
		case actionTypes.RESET_GAME:
			return action.payload.matches
		default:
			return state
	}
}