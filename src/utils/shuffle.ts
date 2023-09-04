export function shuffle<T>(array: T[]): T[] {
  const newArray = [...array];
  const length = newArray.length;
  
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * length);
    
    const temp = newArray[i];
    newArray[i] = newArray[randomIndex];
    newArray[randomIndex] = temp;
  }
  
  return newArray;
}