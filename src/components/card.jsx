import React, { useState } from 'react';
import './card.css'

const Card = ({ data }) => {

    const [name, setName] = useState('');

    function getName(event) {
        setName(event.target.value);
    }

    return (
        <div className='card-box'>
            <div className="search-div">
                <input className='input-box' type='text' placeholder='name-search' onChange={getName}></input>
            </div>
            <div className="card-container">    
            {data.images.map ((item, index) => {
                    return <div className= {item.alt.toLowerCase().includes(name.toLowerCase()) ? 'cards-list' : 'cards-list-hidden cards-list'}>
                             <><div className="card"><img src={item.src} alt={item.alt} key={index} email={item.email} className='images' />
                        <h4 key={index}>{item.alt}</h4>
                        <p key={index}> {item.email}</p>
                        </div>
                    </>                    
                    </div>

                })}
            </div>
        </div>
    )
}

export default Card;