import { RankingItem } from "../../../interfaces/ranking.interface";
import { getTimeFormatted } from "../../MemoryBoard/helpers/getTimeFormatted";

interface Props {
    index: number;
    item: RankingItem;
}

export const RankintTableItem = ({index, item}: Props) => {
    return (
        <div className={`ranking__item ${index===0 ? 'animate__animated animate__pulse animate__infinite' : ''}`}>
            <span className="ranking__position">{index+1}</span>
            <span className="ranking__name">{item.name}</span>
            <span className="ranking__time">{getTimeFormatted(item.time)}</span>
            <span className="ranking__attempts">{item.attempts}</span>
        </div>
    )
}
