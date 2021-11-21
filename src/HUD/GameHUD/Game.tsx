import React from "react";
import { Draft, Team, Faction, Player, TeamDraft } from "dotagsi";
import { apiUrl } from "../../api/api";

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
        <div
          className={`player_container ${player.team_name} ${
            !show ? "hide" : ""
          }`}
        >
          <div className="player_info">
            <svg
              className={`${player.team_name} team_box`}
              width="32"
              height="85"
              viewBox="0 0 32 85"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M23 0H32L10 84L0.5 85L23 0Z" />
            </svg>
            <div className="username shadowed-text">
              <div className="usernameNicname">{player.name}</div>
              <div className="usernameReal">{player.realName}</div>
            </div>
          </div>
          <div className="player_picture">
            <svg
              className="player_picture_border_left"
              width="36"
              height="208"
              viewBox="0 0 36 208"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 2L7 0.5L36 208H28L0 2Z" fill="#3D454B" />
            </svg>

            {player.avatar ? <img src={player.avatar} alt="" /> : null}
            <svg
              className="player_picture_border_right"
              width="7"
              height="237"
              viewBox="0 0 7 237"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 1.55493L7 0.696313V237H0V1.55493Z" fill="#2D3641" />
            </svg>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ObservedPlayer;
