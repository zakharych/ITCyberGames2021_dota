import { Map } from 'dotagsi';
import React from 'react';
import './mapScore.scss';

interface Props {
    map: Map;
}

function MapScore(props: Props) {
    const map = props.map;
    console.log(map);

    return (
        <div className="gameScore">
            <div className="radiantScore">
                {map.radiant.map_score
                    ? [...Array(map.radiant.map_score)].map((x, i) => <div className="scoreItem scoreItemRadiant"></div>)
                    : null}
            </div>
            <div className="direScore">
                {map.dire.map_score
                    ? [...Array(map.dire.map_score)].map((x, i) => <div className="scoreItem scoreItemDire"></div>)
                    : null}
            </div>
        </div>
    );
}

export default MapScore;
