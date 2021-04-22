const DEFAULT_CARDS = 18;

const generateInitialCards = (numCards = DEFAULT_CARDS) =>
  Array.from({ length: numCards }, (x, index) => {
    const cat = Math.floor(index / 2) + 1;
    return {
      id: `card-${index + 1}`,
      category: cat,
      active: false,
      solved: false,
    };
  });

const initialCards = generateInitialCards();

export { generateInitialCards, initialCards };
