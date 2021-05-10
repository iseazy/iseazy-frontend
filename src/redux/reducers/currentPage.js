import * as actionTypes from 'actionTypes'
import PAGES from '../../js/pages'

export const currentPage = (state = null, action) => {
	switch(action.type) {
		case actionTypes.CURRENT_PAGE:
			return action.payload
		case actionTypes.RESET_GAME:
			return PAGES.GAME
		default:
			return state
	}
}