import shuffleArray from '../js/shuffleArray'

const CARDS = [
    "black_dude", 
    "dwight_schrute", 
    "fry", 
    "funny_cat", 
    "patrick_star", 
    "smiling_weird_face",
    "surprised_dog",
    "terrorific_girl",
    "think_my_friend"
]
 
const getInitializedCards = () => {
    return shuffleArray([...CARDS, ...CARDS])
}

export default getInitializedCards