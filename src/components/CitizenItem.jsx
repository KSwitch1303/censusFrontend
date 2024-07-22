import React from 'react';
import './CitizenItem.css';

const CitizenItem = ({ citizen }) => {
    return (
        <div className="card citizen-item">
            <div className="card-body">
                <h5 className="card-title">{citizen.name}</h5>
                <p className="card-text">Age: {citizen.age}</p>
                <p className="card-text">State: {citizen.state}</p>
                <p className="card-text">LGA: {citizen.lga}</p>
            </div>
        </div>
    );
};

export default CitizenItem;
