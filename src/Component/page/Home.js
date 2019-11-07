import React from 'react';
import { useSelector } from 'react-redux';

const Home = props => {
    const count = useSelector(state => state.count);

    return (
        <div>Home {count}
        </div>
    )
}

export default Home;