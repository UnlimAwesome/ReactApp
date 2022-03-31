import React from 'react';
import './ProfileCard.css';

const ProfileCard = ({card}) => {
    let path="https://i.pravatar.cc/150?img=" + Math.floor(Math.random()*(100-1)+1);
/*    document.getElementsByClassName('card_pic').src =path;*/
    console.log(path);
    return (
        <div className="card">
            <img src="https://i.pravatar.cc/300"/>
{/*            <img className="card_pic"/>*/}
            <div className="card_header">{card.name}</div>
            <div className="card_text">{card.company.name}</div>
        </div>
    );
};

export default ProfileCard;