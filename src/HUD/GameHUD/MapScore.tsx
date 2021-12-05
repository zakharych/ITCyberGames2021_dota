import { Map } from 'dotagsi';
import React from 'react';

interface Props {
    map: Map;
}

function MapScore(props: Props) {
    const map = props.map;
    console.log(map);

    return <>{map.radiant.map_score ? [...Array(map.radiant.map_score)].map((x, i) => <>i</>) : null}</>;
}

export default MapScore;
