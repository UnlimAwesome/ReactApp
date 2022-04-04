import React, {useState} from 'react';
import ProfileCard from "../ProfileCard/ProfileCard";
import "./Slider.css"

const Slider = ({setpost,styles}) => {
    const cardWidth = 330;
    const cardList=[
        {
            "id": 1,
            "name": "Leanne Graham",
            "username": "Bret",
            "email": "Sincere@april.biz",
            "address": {
                "street": "Kulas Light",
                "suite": "Apt. 556",
                "city": "Gwenborough",
                "zipcode": "92998-3874",
                "geo": {
                    "lat": "-37.3159",
                    "lng": "81.1496"
                }
            },
            "phone": "1-770-736-8031 x56442",
            "website": "hildegard.org",
            "company": {
                "name": "Romaguera-Crona",
                "catchPhrase": "Multi-layered client-server neural-net",
                "bs": "harness real-time e-markets"
            }
        },
        {
            "id": 2,
            "name": "Ervin Howell",
            "username": "Antonette",
            "email": "Shanna@melissa.tv",
            "address": {
                "street": "Victor Plains",
                "suite": "Suite 879",
                "city": "Wisokyburgh",
                "zipcode": "90566-7771",
                "geo": {
                    "lat": "-43.9509",
                    "lng": "-34.4618"
                }
            },
            "phone": "010-692-6593 x09125",
            "website": "anastasia.net",
            "company": {
                "name": "Deckow-Crist",
                "catchPhrase": "Proactive didactic contingency",
                "bs": "synergize scalable supply-chains"
            }
        },
        {
            "id": 3,
            "name": "Clementine Bauch",
            "username": "Samantha",
            "email": "Nathan@yesenia.net",
            "address": {
                "street": "Douglas Extension",
                "suite": "Suite 847",
                "city": "McKenziehaven",
                "zipcode": "59590-4157",
                "geo": {
                    "lat": "-68.6102",
                    "lng": "-47.0653"
                }
            },
            "phone": "1-463-123-4447",
            "website": "ramiro.info",
            "company": {
                "name": "Romaguera-Jacobson",
                "catchPhrase": "Face to face bifurcated interface",
                "bs": "e-enable strategic applications"
            }
        },
        {
            "id": 4,
            "name": "Patricia Lebsack",
            "username": "Karianne",
            "email": "Julianne.OConner@kory.org",
            "address": {
                "street": "Hoeger Mall",
                "suite": "Apt. 692",
                "city": "South Elvis",
                "zipcode": "53919-4257",
                "geo": {
                    "lat": "29.4572",
                    "lng": "-164.2990"
                }
            },
            "phone": "493-170-9623 x156",
            "website": "kale.biz",
            "company": {
                "name": "Robel-Corkery",
                "catchPhrase": "Multi-tiered zero tolerance productivity",
                "bs": "transition cutting-edge web services"
            }
        },
        {
            "id": 5,
            "name": "Chelsey Dietrich",
            "username": "Kamren",
            "email": "Lucio_Hettinger@annie.ca",
            "address": {
                "street": "Skiles Walks",
                "suite": "Suite 351",
                "city": "Roscoeview",
                "zipcode": "33263",
                "geo": {
                    "lat": "-31.8129",
                    "lng": "62.5342"
                }
            },
            "phone": "(254)954-1289",
            "website": "demarco.info",
            "company": {
                "name": "Keebler LLC",
                "catchPhrase": "User-centric fault-tolerant solution",
                "bs": "revolutionize end-to-end systems"
            }
        },
        {
            "id": 6,
            "name": "Mrs. Dennis Schulist",
            "username": "Leopoldo_Corkery",
            "email": "Karley_Dach@jasper.info",
            "address": {
                "street": "Norberto Crossing",
                "suite": "Apt. 950",
                "city": "South Christy",
                "zipcode": "23505-1337",
                "geo": {
                    "lat": "-71.4197",
                    "lng": "71.7478"
                }
            },
            "phone": "1-477-935-8478 x6430",
            "website": "ola.org",
            "company": {
                "name": "Considine-Lockman",
                "catchPhrase": "Synchronised bottom-line interface",
                "bs": "e-enable innovative applications"
            }
        },
        {
            "id": 7,
            "name": "Kurtis Weissnat",
            "username": "Elwyn.Skiles",
            "email": "Telly.Hoeger@billy.biz",
            "address": {
                "street": "Rex Trail",
                "suite": "Suite 280",
                "city": "Howemouth",
                "zipcode": "58804-1099",
                "geo": {
                    "lat": "24.8918",
                    "lng": "21.8984"
                }
            },
            "phone": "210.067.6132",
            "website": "elvis.io",
            "company": {
                "name": "Johns Group",
                "catchPhrase": "Configurable multimedia task-force",
                "bs": "generate enterprise e-tailers"
            }
        },
        {
            "id": 8,
            "name": "Nicholas Runolfsdottir V",
            "username": "Maxime_Nienow",
            "email": "Sherwood@rosamond.me",
            "address": {
                "street": "Ellsworth Summit",
                "suite": "Suite 729",
                "city": "Aliyaview",
                "zipcode": "45169",
                "geo": {
                    "lat": "-14.3990",
                    "lng": "-120.7677"
                }
            },
            "phone": "586.493.6943 x140",
            "website": "jacynthe.com",
            "company": {
                "name": "Abernathy Group",
                "catchPhrase": "Implemented secondary concept",
                "bs": "e-enable extensible e-tailers"
            }
        },
        {
            "id": 9,
            "name": "Glenna Reichert",
            "username": "Delphine",
            "email": "Chaim_McDermott@dana.io",
            "address": {
                "street": "Dayna Park",
                "suite": "Suite 449",
                "city": "Bartholomebury",
                "zipcode": "76495-3109",
                "geo": {
                    "lat": "24.6463",
                    "lng": "-168.8889"
                }
            },
            "phone": "(775)976-6794 x41206",
            "website": "conrad.com",
            "company": {
                "name": "Yost and Sons",
                "catchPhrase": "Switchable contextually-based project",
                "bs": "aggregate real-time technologies"
            }
        },
        {
            "id": 10,
            "name": "Clementina DuBuque",
            "username": "Moriah.Stanton",
            "email": "Rey.Padberg@karina.biz",
            "address": {
                "street": "Kattie Turnpike",
                "suite": "Suite 198",
                "city": "Lebsackbury",
                "zipcode": "31428-2261",
                "geo": {
                    "lat": "-38.2386",
                    "lng": "57.2232"
                }
            },
            "phone": "024-648-3804",
            "website": "ambrose.net",
            "company": {
                "name": "Hoeger LLC",
                "catchPhrase": "Centralized empowering task-force",
                "bs": "target end-to-end models"
            }
        }
    ];
    const [cards, setCards]=useState([
        {
            "id": 1,
            "name": "Leanne Graham",
            "username": "Bret",
            "email": "Sincere@april.biz",
            "address": {
                "street": "Kulas Light",
                "suite": "Apt. 556",
                "city": "Gwenborough",
                "zipcode": "92998-3874",
                "geo": {
                    "lat": "-37.3159",
                    "lng": "81.1496"
                }
            },
            "phone": "1-770-736-8031 x56442",
            "website": "hildegard.org",
            "company": {
                "name": "Romaguera-Crona",
                "catchPhrase": "Multi-layered client-server neural-net",
                "bs": "harness real-time e-markets"
            }
        },
        {
            "id": 2,
            "name": "Ervin Howell",
            "username": "Antonette",
            "email": "Shanna@melissa.tv",
            "address": {
                "street": "Victor Plains",
                "suite": "Suite 879",
                "city": "Wisokyburgh",
                "zipcode": "90566-7771",
                "geo": {
                    "lat": "-43.9509",
                    "lng": "-34.4618"
                }
            },
            "phone": "010-692-6593 x09125",
            "website": "anastasia.net",
            "company": {
                "name": "Deckow-Crist",
                "catchPhrase": "Proactive didactic contingency",
                "bs": "synergize scalable supply-chains"
            }
        },
        {
            "id": 3,
            "name": "Clementine Bauch",
            "username": "Samantha",
            "email": "Nathan@yesenia.net",
            "address": {
                "street": "Douglas Extension",
                "suite": "Suite 847",
                "city": "McKenziehaven",
                "zipcode": "59590-4157",
                "geo": {
                    "lat": "-68.6102",
                    "lng": "-47.0653"
                }
            },
            "phone": "1-463-123-4447",
            "website": "ramiro.info",
            "company": {
                "name": "Romaguera-Jacobson",
                "catchPhrase": "Face to face bifurcated interface",
                "bs": "e-enable strategic applications"
            }
        },
        {
            "id": 4,
            "name": "Patricia Lebsack",
            "username": "Karianne",
            "email": "Julianne.OConner@kory.org",
            "address": {
                "street": "Hoeger Mall",
                "suite": "Apt. 692",
                "city": "South Elvis",
                "zipcode": "53919-4257",
                "geo": {
                    "lat": "29.4572",
                    "lng": "-164.2990"
                }
            },
            "phone": "493-170-9623 x156",
            "website": "kale.biz",
            "company": {
                "name": "Robel-Corkery",
                "catchPhrase": "Multi-tiered zero tolerance productivity",
                "bs": "transition cutting-edge web services"
            }
        },
        {
            "id": 5,
            "name": "Chelsey Dietrich",
            "username": "Kamren",
            "email": "Lucio_Hettinger@annie.ca",
            "address": {
                "street": "Skiles Walks",
                "suite": "Suite 351",
                "city": "Roscoeview",
                "zipcode": "33263",
                "geo": {
                    "lat": "-31.8129",
                    "lng": "62.5342"
                }
            },
            "phone": "(254)954-1289",
            "website": "demarco.info",
            "company": {
                "name": "Keebler LLC",
                "catchPhrase": "User-centric fault-tolerant solution",
                "bs": "revolutionize end-to-end systems"
            }
        },
        {
            "id": 6,
            "name": "Mrs. Dennis Schulist",
            "username": "Leopoldo_Corkery",
            "email": "Karley_Dach@jasper.info",
            "address": {
                "street": "Norberto Crossing",
                "suite": "Apt. 950",
                "city": "South Christy",
                "zipcode": "23505-1337",
                "geo": {
                    "lat": "-71.4197",
                    "lng": "71.7478"
                }
            },
            "phone": "1-477-935-8478 x6430",
            "website": "ola.org",
            "company": {
                "name": "Considine-Lockman",
                "catchPhrase": "Synchronised bottom-line interface",
                "bs": "e-enable innovative applications"
            }
        },
        {
            "id": 7,
            "name": "Kurtis Weissnat",
            "username": "Elwyn.Skiles",
            "email": "Telly.Hoeger@billy.biz",
            "address": {
                "street": "Rex Trail",
                "suite": "Suite 280",
                "city": "Howemouth",
                "zipcode": "58804-1099",
                "geo": {
                    "lat": "24.8918",
                    "lng": "21.8984"
                }
            },
            "phone": "210.067.6132",
            "website": "elvis.io",
            "company": {
                "name": "Johns Group",
                "catchPhrase": "Configurable multimedia task-force",
                "bs": "generate enterprise e-tailers"
            }
        },
        {
            "id": 8,
            "name": "Nicholas Runolfsdottir V",
            "username": "Maxime_Nienow",
            "email": "Sherwood@rosamond.me",
            "address": {
                "street": "Ellsworth Summit",
                "suite": "Suite 729",
                "city": "Aliyaview",
                "zipcode": "45169",
                "geo": {
                    "lat": "-14.3990",
                    "lng": "-120.7677"
                }
            },
            "phone": "586.493.6943 x140",
            "website": "jacynthe.com",
            "company": {
                "name": "Abernathy Group",
                "catchPhrase": "Implemented secondary concept",
                "bs": "e-enable extensible e-tailers"
            }
        },
        {
            "id": 9,
            "name": "Glenna Reichert",
            "username": "Delphine",
            "email": "Chaim_McDermott@dana.io",
            "address": {
                "street": "Dayna Park",
                "suite": "Suite 449",
                "city": "Bartholomebury",
                "zipcode": "76495-3109",
                "geo": {
                    "lat": "24.6463",
                    "lng": "-168.8889"
                }
            },
            "phone": "(775)976-6794 x41206",
            "website": "conrad.com",
            "company": {
                "name": "Yost and Sons",
                "catchPhrase": "Switchable contextually-based project",
                "bs": "aggregate real-time technologies"
            }
        },
        {
            "id": 10,
            "name": "Clementina DuBuque",
            "username": "Moriah.Stanton",
            "email": "Rey.Padberg@karina.biz",
            "address": {
                "street": "Kattie Turnpike",
                "suite": "Suite 198",
                "city": "Lebsackbury",
                "zipcode": "31428-2261",
                "geo": {
                    "lat": "-38.2386",
                    "lng": "57.2232"
                }
            },
            "phone": "024-648-3804",
            "website": "ambrose.net",
            "company": {
                "name": "Hoeger LLC",
                "catchPhrase": "Centralized empowering task-force",
                "bs": "target end-to-end models"
            }
        }
    ]);
    const [translation, setTranslation] = useState(0);
    const [index,setIndex]=useState(1);

    const rightClick=()=>{
        setTranslation((currentTranslation)=>{
            const newTranslation = Math.max(currentTranslation -cardWidth,-330*5);
            if (newTranslation ===-330*5){
                setIndex((current)=>current===10?1:current+1)
                let clone = [];
                let clone2 = [];
                for (let key in cardList) {
                    clone[key] = cardList[key];
                }
                for (let key in cardList) {
                    clone2[key] = cardList[key];
                }
                clone=clone.filter(item=>item.id>index);
                clone2=clone2.filter(item=>item.id<=index);
                setCards([...clone,...clone2]);
            }
            return newTranslation;
        });

    }

    const LeftClick=()=>{
        setTranslation((currentTranslation)=>{
            const newTranslation = Math.min(currentTranslation + cardWidth, -330);
            if (newTranslation ===-330){
                setIndex((current)=>current===1?10:current-1)
                let clone = [];
                let clone2 = [];
                for (let key in cardList) {
                    clone[key] = cardList[key];
                }
                for (let key in cardList) {
                    clone2[key] = cardList[key];
                }
                clone=clone.filter(item=>item.id>=index);
                clone2=clone2.filter(item=>item.id<index);
                setCards([...clone,...clone2]);
            }
            return newTranslation;
        });
    }

    const showPosts=(activeCard, activeCardTitle)=>{
        setpost(activeCard, activeCardTitle);
    }

    return (
        <div className="slider">
            <div className="buttons">
                <button className="left_button" onClick={LeftClick}>
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24 0C17.6348 0 11.5303 2.52856 7.02944 7.02944C2.52856 11.5303 0 17.6348 0 24C0 30.3652 2.52856 36.4697 7.02944 40.9706C11.5303 45.4714 17.6348 48 24 48C30.3652 48 36.4697 45.4714 40.9706 40.9706C45.4714 36.4697 48 30.3652 48 24C48 17.6348 45.4714 11.5303 40.9706 7.02944C36.4697 2.52856 30.3652 0 24 0V0ZM34.5 22.5C34.8978 22.5 35.2794 22.658 35.5607 22.9393C35.842 23.2206 36 23.6022 36 24C36 24.3978 35.842 24.7794 35.5607 25.0607C35.2794 25.342 34.8978 25.5 34.5 25.5H17.121L23.562 31.938C23.7015 32.0775 23.8121 32.243 23.8876 32.4252C23.963 32.6075 24.0019 32.8028 24.0019 33C24.0019 33.1972 23.963 33.3925 23.8876 33.5748C23.8121 33.757 23.7015 33.9225 23.562 34.062C23.4225 34.2015 23.257 34.3121 23.0748 34.3876C22.8925 34.463 22.6972 34.5019 22.5 34.5019C22.3028 34.5019 22.1075 34.463 21.9252 34.3876C21.743 34.3121 21.5775 34.2015 21.438 34.062L12.438 25.062C12.2983 24.9227 12.1875 24.7571 12.1119 24.5749C12.0362 24.3927 11.9973 24.1973 11.9973 24C11.9973 23.8027 12.0362 23.6073 12.1119 23.4251C12.1875 23.2429 12.2983 23.0773 12.438 22.938L21.438 13.938C21.7197 13.6563 22.1017 13.4981 22.5 13.4981C22.8983 13.4981 23.2803 13.6563 23.562 13.938C23.8437 14.2197 24.0019 14.6017 24.0019 15C24.0019 15.3983 23.8437 15.7803 23.562 16.062L17.121 22.5H34.5Z" fill="#FE8700"/>
                    </svg>
                </button>
                <button className="right_button" onClick={rightClick}>
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24 0C30.3652 0 36.4697 2.52856 40.9706 7.02944C45.4714 11.5303 48 17.6348 48 24C48 30.3652 45.4714 36.4697 40.9706 40.9706C36.4697 45.4714 30.3652 48 24 48C17.6348 48 11.5303 45.4714 7.02944 40.9706C2.52856 36.4697 0 30.3652 0 24C0 17.6348 2.52856 11.5303 7.02944 7.02944C11.5303 2.52856 17.6348 0 24 0V0ZM13.5 22.5C13.1022 22.5 12.7206 22.658 12.4393 22.9393C12.158 23.2206 12 23.6022 12 24C12 24.3978 12.158 24.7794 12.4393 25.0607C12.7206 25.342 13.1022 25.5 13.5 25.5H30.879L24.438 31.938C24.2985 32.0775 24.1879 32.243 24.1124 32.4252C24.037 32.6075 23.9981 32.8028 23.9981 33C23.9981 33.1972 24.037 33.3925 24.1124 33.5748C24.1879 33.757 24.2985 33.9225 24.438 34.062C24.5775 34.2015 24.743 34.3121 24.9252 34.3876C25.1075 34.463 25.3028 34.5019 25.5 34.5019C25.6972 34.5019 25.8925 34.463 26.0748 34.3876C26.257 34.3121 26.4225 34.2015 26.562 34.062L35.562 25.062C35.7017 24.9227 35.8125 24.7571 35.8881 24.5749C35.9638 24.3927 36.0027 24.1973 36.0027 24C36.0027 23.8027 35.9638 23.6073 35.8881 23.4251C35.8125 23.2429 35.7017 23.0773 35.562 22.938L26.562 13.938C26.4225 13.7985 26.257 13.6879 26.0748 13.6124C25.8925 13.537 25.6972 13.4981 25.5 13.4981C25.3028 13.4981 25.1075 13.537 24.9252 13.6124C24.743 13.6879 24.5775 13.7985 24.438 13.938C24.2985 14.0775 24.1879 14.243 24.1124 14.4252C24.037 14.6075 23.9981 14.8028 23.9981 15C23.9981 15.1972 24.037 15.3925 24.1124 15.5748C24.1879 15.757 24.2985 15.9225 24.438 16.062L30.879 22.5H13.5Z" fill="#FE8700"/>
                    </svg>
                </button>
            </div>
            <div className="cards">
                <div className="moving" style={{transform:`translateX(${translation-330}px)`}}>{cards.map((card) =>
                    <ProfileCard show={showPosts} card={card} key={card.id} style={styles[card.id-1]}/>
                )}</div>
            </div>
        </div>
    );
};

export default Slider;