import getInitializedCards from "../js/cards"
import PAGES from '../js/pages'

const getAppInitialState = () => {
    return {
        cards: getInitializedCards(),
        currentPage: PAGES.HOME,
        firstCard: "",
        matches: [],
        secondCard: "",
        startGameTime: new Date().getTime()
    }
}

export default getAppInitialState