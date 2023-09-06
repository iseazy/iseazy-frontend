import { FC } from 'react';
import { constants } from '../../../constants/constants';
export const RankingTableHeader: FC = () => {
    return (
        <div className="ranking__item">
            <span className="ranking__position--header">{constants.ranking.header.position}</span>
            <span className="ranking__name--header">{constants.ranking.header.name}</span>
            <span className="ranking__time--header">{constants.ranking.header.time}</span>
            <span className="ranking__attempts--header">{constants.ranking.header.attempts}</span>
        </div>
    )
}
