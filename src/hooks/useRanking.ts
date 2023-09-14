import { useMutation, useQuery } from "@tanstack/react-query";
import { addDoc, collection } from "firebase/firestore/lite";
import { loadCollection } from "../helpers/loadCollection";
import { FirebaseDB } from "../firebase/config";
import { RankingItem } from "../interfaces/ranking.interface";

const getRanking = async() => {
    const ranking = await loadCollection('ranking');
    const rankingOrdered = ranking.sort((a, b) => a.time - b.time);
    return rankingOrdered;
}

const setRanking = async(params: RankingItem) => {
    const collectionRef = collection( FirebaseDB, 'ranking' );
    const docs = await addDoc( collectionRef, params);
    return docs;
}

export const useRanking = () => {
    const rankingQuery = useQuery(
        ['ranking'],
        () => getRanking(),
        { refetchOnWindowFocus: false }
    );
    return {
        rankingQuery,
    }
}

export const useSetRanking = (params: RankingItem) => {

    const { isLoading: isSetRankingLoading, mutate: addRanking } = useMutation(
        async() => setRanking(params)
    );

    return {
        isSetRankingLoading,
        addRanking
    }
}