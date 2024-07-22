import React, { useState, useEffect } from 'react';
import CitizenForm from './components/CitizenForm';
import CitizenList from './components/CitizenList';
import AgeChart from './components/AgeChart';
import './App.css';

const App = () => {
    const [citizens, setCitizens] = useState([]);

    useEffect(() => {
        fetchCitizens();
    }, []);

    const fetchCitizens = async () => {
        const response = await fetch('http://localhost:5000/api/citizens');
        const data = await response.json();
        setCitizens(data);
        // const sortedByAddress = data.sort((a, b) => a.address.localeCompare(b.address));
        // setCitizens(sortedByAddress);
    };

    const addCitizen = async (citizen) => {
        const response = await fetch('http://localhost:5000/api/citizens', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(citizen),
        });
        const newCitizen = await response.json();
        setCitizens([...citizens, newCitizen]);
    };

    return (
        <div className="App">
            <h1 className="text-center">Census Management System</h1>
            <div className="row">
                <div className="">
                    <CitizenForm onAddCitizen={addCitizen} />
                </div>
                <div className="">
                    <AgeChart citizens={citizens} />
                </div>
            </div>
            <CitizenList citizens={citizens} />
        </div>
    );
};

export default App;
