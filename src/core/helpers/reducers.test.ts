import { Card } from '../../hooks/AppContext'
import { updateFlippedCardsArray} from './reducers'


describe("Reducers", () => {
    test("Update Array ", () => {
        const cards: Card[] = []
        const card = {id: "123",index:1}
        const updatedArray = updateFlippedCardsArray(cards,card)
        expect(updatedArray).toContain([{id:'123',index:1}])
    })
})
