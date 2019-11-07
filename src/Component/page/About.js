import React from 'react';
import { useSelector } from 'react-redux';

const About = props => {
    const count = useSelector(state => state.count);

    return (
        <div>About {count}
        </div>
    )
}

export default About;