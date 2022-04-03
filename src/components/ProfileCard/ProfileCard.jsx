import React, {useState} from 'react';
import './ProfileCard.css';

const ProfileCard = ({card}) => {
    const [style, setStyle] = useState()

    const changeStyle = ({style}) =>{
        if ({style}==="clicked"){
            console.log('prikol')
            setStyle("undefined")
        }
        else{
            setStyle("clicked");
        }

    }

    return (
        <div className={'card' +' '+ style} onClick={changeStyle}>
            <img className="card_pic" src="https://i.pravatar.cc/300/"/>
            <div className="card_header">{card.name}</div>
            <div className="card_text">{card.company.name}</div>
            <div className="card_id">{card.id}</div>
        </div>
    );
};

export default ProfileCard;