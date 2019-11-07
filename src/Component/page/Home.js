import React from 'react';
import { useSelector } from 'react-redux';
import './home.scss';

const Home = props => {
    const count = useSelector(state => state.count);

    return (
        <div id="home">Home {count}
        </div>
    )
}

export default Home;