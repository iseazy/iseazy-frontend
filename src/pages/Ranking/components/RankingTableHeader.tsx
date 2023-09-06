import { FC } from 'react';
export const RankingTableHeader: FC = () => {
    return (
        <div className="ranking__item">
            <span className="ranking__position--header">Pos</span>
            <span className="ranking__name--header">Nombre</span>
            <span className="ranking__time--header">Tiempo</span>
            <span className="ranking__movements--header">Mov.</span>
        </div>
    )
}
