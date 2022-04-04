import React, {useState} from 'react';
import './ProfileCard.css';

const ProfileCard = ({card, show, style}) => {

    const src=`https://i.pravatar.cc/150?img=${card.id}`;
    const changePosts=()=> {
        const activeCard = card.id;
        const activeCardTitle =card.name;
        show(activeCard, activeCardTitle);
    }
    return (
        <div className={`card ${style}`} onClick={changePosts}>
            <img className="card_pic" src={src}/>
            <div className="card_header">{card.name}</div>
            <div className="card_text">{card.company.name}</div>
        </div>
    );
};

export default ProfileCard;