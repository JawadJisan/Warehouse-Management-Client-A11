import React from 'react';
import Inventory from '../Inventory/Inventory';
import TopBanner from '../TopBanner/TopBanner';

const Home = () => {
    return (
        <div>
            <TopBanner></TopBanner>
            <Inventory></Inventory>
            
        </div>
    );
};

export default Home;