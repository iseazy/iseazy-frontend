import { useEffect, useState } from "react";

export const useChronometer = () => {

    const [timer, setTimer] = useState<number>(0);
    const [stopTimer, setStopTimer] = useState<boolean>(false);

    useEffect(() => {
        if ( stopTimer ) return;
        const interval = setInterval(() => {
            setTimer(timer => timer + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, [stopTimer]);

    return {
        timer,
        setStopTimer
    }
}