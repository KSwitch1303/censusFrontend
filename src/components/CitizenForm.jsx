import React, { useState } from 'react';
import './CitizenForm.css';

const CitizenForm = ({ onAddCitizen }) => {
    const [name, setName] = useState('');
    // const [age, setAge] = useState('');
    const [state, setState] = useState('');
    const [gender, setGender] = useState('');
    const [lga, setLga] = useState('');
    const [dob, setDob] = useState('');
    // const [address, setAddress] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const age = 2024 - parseInt(dob.split('-')[0]);
        const address = `${lga}, ${state}`;
        onAddCitizen({ name, age, state, lga, dob, address, gender });
        setName('');
        setState('');
        setGender('');
        setLga('');
        setDob('');
        alert('Citizen added successfully');
        // setAge('');
        // setAddress('');
    };

    return (
        <form onSubmit={handleSubmit} className="citizen-form">
            <div className="form-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <input
                    type="date"
                    className="form-control"
                    placeholder="Date of Birth"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <select
                    className="form-control"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    required
                >
                    <option disabled value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
            </div>
            {/* <div className="form-group">
                <input
                    type="number"
                    className="form-control"
                    placeholder="Age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    required
                />
            </div> */}
            <div className="form-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="State"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="LGA"
                    value={lga}
                    onChange={(e) => setLga(e.target.value)}
                    required
                />
            </div>
            <button type="submit" className="btn btn-primary">Add Citizen</button>
        </form>
    );
};

export default CitizenForm;
