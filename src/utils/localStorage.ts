const SCORES_KEY = 'iseazy-scores';

export const saveScore = (score: number): void => {
  const storedValue = localStorage.getItem(SCORES_KEY)

  if (storedValue) {
    const scores: number[] = JSON.parse(storedValue);
    scores.push(score);

    scores.sort((a, b) => b - a);
    localStorage.setItem(SCORES_KEY, JSON.stringify(scores.slice(0, 3)));
  } else {
    localStorage.setItem(SCORES_KEY, JSON.stringify([score]));
  }
}

export const getScores = (): number[] => {
  const storedValue = localStorage.getItem(SCORES_KEY)

  if (!storedValue) {
    return [];
  }

  return JSON.parse(storedValue);
}