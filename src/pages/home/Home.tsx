import React from 'react';
import './Home.less'

const Home: React.FC = () => {
    return (
        <div className='home'>
            这是首页
            <div className='star'></div>
            <div className='big-star'></div>
            <div className='small-star'></div>
        </div>
    );
}

export default Home;
