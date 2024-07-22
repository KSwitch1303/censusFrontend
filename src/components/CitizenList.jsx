import React from 'react';
import CitizenItem from './CitizenItem';
import './CitizenList.css';

const CitizenList = ({ citizens }) => {
    return (
        <div className="citizen-list">
            {citizens.map((citizen) => (
                <CitizenItem key={citizen._id} citizen={citizen} />
            ))}
        </div>
    );
};

export default CitizenList;
