import { FC } from 'react';
import { Link } from 'react-router-dom';
import { RankingItem } from '../../interfaces/ranking.interface';
import { useRanking } from '../../hooks/useRanking';
import { Button } from '../../components';
import { RankingTableHeader, RankintTableItem } from './components';
import './ranking.css';
import { constants } from '../../constants/constants';

export const Ranking: FC = () => {
    const { rankingQuery } = useRanking();
    return (
        <div className="ranking animate__animated animate__fadeIn">
            <h1 className="ranking__h1">{constants.ranking.title}</h1>
            <div className="ranking__box">
                <RankingTableHeader />
                {
                    rankingQuery.data?.map((item: RankingItem, index: number) => (
                        <RankintTableItem key={index} item={item} index={index} />
                    )) 
                }
                {
                    rankingQuery.data?.length === 0 && <div className="ranking__nodata">{constants.ranking.noData}</div>
                }
            </div>
            <div className="ranking__buttons">
                <Link to="/">
                    <Button text={constants.ranking.goBack} className="button"/>
                </Link>
            </div>
        </div>
    )
}

export default Ranking;