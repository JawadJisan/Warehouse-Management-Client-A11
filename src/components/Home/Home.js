import React from 'react';
import Inventories from '../Inventory/Inventories';
import NewArrived from '../NewArrived/NewArrived';
import Review from '../Review/Review';
import TopBanner from '../TopBanner/TopBanner';

const Home = () => {
    return (
        <div style={{ backgroundColor: '#12161f' }}>
            <TopBanner></TopBanner>
            <Inventories></Inventories>
            <NewArrived></NewArrived>
            <Review></Review>
                        
        </div>
    );
};

export default Home;