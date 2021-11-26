import React from 'react';
import { Draft, Team, Faction, Player, TeamDraft } from 'dotagsi';
import { apiUrl } from '../../api/api';
// import flag from './flag.svg'

const TopSideBar = ({
    children,
    type,
    teamId,
    show,
    team,
}: {
    children: any;
    type: Faction;
    teamId: string;
    show: boolean;
    team: Team;
}) => {
    
    return (
        <div className={`top_side_bar ${type === 'radiant' ? 'left' : 'right'} ${!show ? 'hide' : ''}`}>
            {type === 'radiant' ? (
                <div className={`teamSidebar ${type}`}>
                    <div className="teamName">{team.name}</div>
                    <div className="teamFlag">
                        <img src={`${apiUrl}api/teams/logo/${teamId}`} alt="" />
                    </div>
                    {team.extra.shortName?  <div className="teamShortName">{team.extra.shortName}</div> : null}
                </div>
            ) : null}
            {children}
            {type === 'dire' ? (
                <div className={`teamSidebar ${type}`}>
                    <div className="teamName">{team.name}</div>
                    <div className="teamFlag">
                        <img src={`${apiUrl}api/teams/logo/${teamId}`} alt="" />
                    </div>
                    {team.extra.shortName?  <div className="teamShortName">{team.extra.shortName}</div> : null}
                </div>
            ) : null}
        </div>
    );
};

export default TopSideBar;
