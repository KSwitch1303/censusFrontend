import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const AddressChart = ({ citizens }) => {
    const addressDistribution = {};

    citizens.forEach(citizen => {
        const { state : address } = citizen;
        if (addressDistribution[address]) {
            addressDistribution[address]++;
        } else {
            addressDistribution[address] = 1;
        }
    });

    const data = Object.keys(addressDistribution).map(address => ({
        address,
        count: addressDistribution[address],
    }));

    return (
        <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="address" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="count" fill="#8884d8" />
            </BarChart>
        </ResponsiveContainer>
    );
};

export default AddressChart;
