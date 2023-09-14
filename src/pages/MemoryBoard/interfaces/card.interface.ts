export interface Card {
    id: number;
    content: string;
    cardPairID: number;
    flipped: boolean;
    revealed: boolean;
}