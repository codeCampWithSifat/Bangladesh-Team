import React, { useState,useEffect } from 'react';
import PlayerDetail from '../PlayerDetail/PlayerDetail';
import Team from '../Team/Team';
import './Player.css'
const Player = () => {
    const [players , setPlayers] = useState([]);
    const [team ,setTeam] = useState([]);
    useEffect (() => {
        fetch("https://mocki.io/v1/06fb333a-eca4-4686-86e6-dd3fc33cfac0")
        .then(res => res.json())
        .then(data =>setPlayers(data))
    },[])

    const handleButton = (player) => {
        const newTeam = [...team , player];
        setTeam(newTeam)
    }
    return (
        <div >
            <h2 className="heading text-primary">Bangladesh Cricket Team</h2>
          <div className="team-container">
          <div className="players-style">
           {
              players.map(player => <PlayerDetail handleButton={handleButton} key ={player.id} player={player}></PlayerDetail>)
            }
           </div>
           <div className="team-style">
               <Team team = {team}></Team>
           </div>
          </div>
        </div>
    );
};

export default Player;