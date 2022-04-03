import React from 'react';
import ProfileCard from "../ProfileCard/ProfileCard";

const CardList = ({cards,translating}) => {
    return (
        <div className="moving" style={{
                transform:`translateX(${translating-330}px)`,
            }}>{cards.map((card) =>
                <ProfileCard card={card} key={card.id}/>
            )}
        </div>
    );
};

export default CardList;