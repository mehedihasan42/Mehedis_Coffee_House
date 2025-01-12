import React from 'react';
import Banner from '../Banner/Banner';
import Feature from '../Feature/Feature';
import Popular from '../Popular/Popular';
import Follow from '../Follow/Follow';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Feature></Feature>
            <Popular></Popular>
            <Follow></Follow>
        </div>
    );
};

export default Home;