import React from 'react';
import Banner from '../Banner/Banner';
import Feature from '../Feature/Feature';
import Popular from '../Popular/Popular';
import Follow from '../Follow/Follow';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Feature></Feature>
            <Popular></Popular>
            <Follow></Follow>
            <Footer></Footer>
        </div>
    );
};

export default Home;