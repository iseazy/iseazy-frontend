import CardImg1 from 'assets/images/card1.png'
import CardImg2 from 'assets/images/card2.png'
import CardImg3 from 'assets/images/card3.png'
import CardImg4 from 'assets/images/card4.png'
import CardImg5 from 'assets/images/card5.png'
import CardImg6 from 'assets/images/card6.png'
import CardImg7 from 'assets/images/card7.png'
import CardImg8 from 'assets/images/card8.png'
import CardImg9 from 'assets/images/card9.png'

const cardList = [
  CardImg1,
  CardImg2,
  CardImg3,
  CardImg4,
  CardImg5,
  CardImg6,
  CardImg7,
  CardImg8,
  CardImg9
]

const cards = [...cardList, ...cardList]
  .map((img, index) => ({
    img,
    isFlipped: false,
    found: false,
    id: index + 1
  }))
  .sort(() => Math.random() - 0.5)

const CardsSufled = () => cards.sort(() => Math.random() - 0.5)

export { CardsSufled }
