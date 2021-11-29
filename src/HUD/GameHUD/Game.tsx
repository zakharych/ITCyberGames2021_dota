import React from 'react';
import { Draft, Team, Faction, Player, TeamDraft } from 'dotagsi';
import { apiUrl } from '../../api/api';
import playerInfoBg from './playerInfoBg.svg';

const ObservedPlayer = ({
    players,
    player,
    team,
    show,
}: {
    show: boolean;
    player: Player | null;
    players: Player[];
    team: Team | null;
}) => {
    const getPlayerById = (id: number) => {
        return players.find((player) => player.id === id);
    };

    return (
        <>
            {player ? (
                <div className={`playerInfoBlock ${player.team_name} ${!show ? 'hide' : ''}`}>
                    <div className="playerInfo" style={{ backgroundImage: `url(${playerInfoBg})` }}>
                        <div className="playerNickName">{player.name}</div>
                        <div className="playerNickRealName">
                            <div className="playerName">{player.realName ? player.realName.split(' ')[0] : null}</div>
                            <div className="playerLastName">
                                {player.realName ? player.realName.split(' ')[1] : null}
                            </div>
                        </div>
                        <div className="playerKills">
                            {player.kills ? (
                                <>
                                    {player.kill_list.map((killEntry) => {
                                        const victim = getPlayerById(killEntry.victimid);
                                        if (!victim || !victim.hero || !victim.hero.name) return null;

                                        return (
                                            <div className="killItem">
                                                <div className="killItemImg">
                                                    <img
                                                        src={`./heroes/icons/${victim.hero.name.replace(
                                                            'npc_dota_hero_',
                                                            '',
                                                        )}.png`}
                                                        alt=""
                                                        className="killutemIcon"
                                                    />
                                                </div>
                                                <div className="killItemText">x{killEntry.amount}</div>
                                            </div>
                                        );
                                    })}
                                </>
                            ) : null}
                        </div>
                        <div className="playerStatistics">
                            <div className="playerStatisticItem">
                                <div className="statisticAbr">K</div>
                                <div className="statisticCount">{player.kills}</div>
                            </div>
                            <div className="playerStatisticItem">
                                <div className="statisticAbr">D</div>
                                <div className="statisticCount">{player.deaths}</div>
                            </div>
                            <div className="playerStatisticItem">
                                <div className="statisticAbr">A</div>
                                <div className="statisticCount">{player.assists}</div>
                            </div>
                        </div>
                        <svg
                            className={`teamBox ${player.team_name}`}
                            width="76"
                            height="317"
                            viewBox="0 0 76 317"
                            fill="#C4C4C4"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g filter="url(#filter0_i_103_85)">
                                <path d="M0.5 0H8.5L76 218L63 316L54 317L65.5 218L0.5 0Z" />
                            </g>
                            <defs>
                                <filter
                                    id="filter0_i_103_85"
                                    x="0.5"
                                    y="0"
                                    width="75.5"
                                    height="321"
                                    filterUnits="userSpaceOnUse"
                                    color-interpolation-filters="sRGB"
                                >
                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                    <feColorMatrix
                                        in="SourceAlpha"
                                        type="matrix"
                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                        result="hardAlpha"
                                    />
                                    <feOffset dy="4" />
                                    <feGaussianBlur stdDeviation="2" />
                                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.34 0" />
                                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_103_85" />
                                </filter>
                            </defs>
                        </svg>
                    </div>
                    <div className="playerAvatar">
                        <svg
                            className="playerAvatarLeftBorder"
                            width="36"
                            height="208"
                            viewBox="0 0 36 208"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M0 2L7 0.5L36 208H28L0 2Z" fill="#3D454B" />
                        </svg>

                        {player.avatar ? <img className="playerAvatarImg" src={player.avatar} alt="" /> : null}
                        <svg
                            className="playerAvatarRightBorder"
                            width="38"
                            height="236"
                            viewBox="0 0 38 236"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M30 1L37.5 0L7 236H0L30 1Z" fill="#2D3641" />
                        </svg>
                    </div>
                </div>
            ) : null}
        </>
    );
};

export default ObservedPlayer;
