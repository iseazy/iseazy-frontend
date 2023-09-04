import { saveScore } from '../../utils/localStorage';

describe('saveScore', () => {
  const SCORES_KEY = 'iseazy-scores';

  beforeEach(() => {
    localStorage.clear();
  });

  it('should save the score when localStorage is empty', () => {
    const score = 50;
    saveScore(score);

    const storedValue = localStorage.getItem(SCORES_KEY);
    const parsedScores = storedValue ? JSON.parse(storedValue) : null;

    expect(parsedScores).toEqual([score]);
  });

  it('should save the score and keep the top 3 scores when localStorage has scores', () => {
    const existingScores = [80, 60, 70];
    localStorage.setItem(SCORES_KEY, JSON.stringify(existingScores));

    const newScore = 90;
    saveScore(newScore);

    const storedValue = localStorage.getItem(SCORES_KEY);
    const parsedScores = storedValue ? JSON.parse(storedValue) : null;;

    expect(parsedScores).toEqual([90, 80, 70]);
  });
});