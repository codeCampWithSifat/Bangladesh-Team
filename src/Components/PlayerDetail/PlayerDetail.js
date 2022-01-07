import React from 'react';
import './PlayerDetail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPointRight } from '@fortawesome/free-solid-svg-icons'
const PlayerDetail = (props) => {
    const {name , image , email , gender , salary } = props.player
    return (
        <div>
            <div className="single-player">
            <h4>Name : {name}</h4>
            <img src={image} alt="" />
            <p>{email}</p>
            <p>Gender : {gender}</p>
            <h6>Salary : {salary}</h6>
            <button 
             onClick={() => props.handleButton(props.player)}
             className="main-button"> <FontAwesomeIcon icon={faHandPointRight} /> Add Team</button>
            </div>
        </div>
    );
};

export default PlayerDetail;