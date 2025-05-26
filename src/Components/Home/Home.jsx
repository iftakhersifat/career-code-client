import React from 'react';
import Banner from './Banner';
import Job from './Job';

const Home = () => {
    return (
        <div className='container mx-auto'>
            <Banner></Banner>
            <Job></Job>
        </div>
    );
};

export default Home;