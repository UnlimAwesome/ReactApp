import React, {useState} from 'react';
import './ProfileCard.css';

const ProfileCard = ({card, show}) => {

    const [style, setStyle] = useState()
    const src=`https://i.pravatar.cc/150?img=${card.id}`;
    const changePosts=()=> {
        setStyle("active_card");
        const activeCard = card.id;
        show(activeCard);
    }
    return (
        <div className={`card ${style}`} onClick={changePosts}>
            <img className="card_pic" src={src}/>
            <div className="card_header">{card.name}</div>
            <div className="card_text">{card.company.name}</div>
            <div className="card_id">{card.id}</div>
        </div>
    );
};

export default ProfileCard;