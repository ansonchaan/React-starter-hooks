import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { SmoothScroll } from '../../globalFunc';

const Home = props => {
    const count = useSelector(state => state.count);
    const mainScroll = useRef(null);

    useEffect(()=>{ 
        let smooth = new SmoothScroll(mainScroll.current,(s, y, h) => {});
        smooth.on();

        return () => {
            smooth.off();
            smooth = null;
        }
    },[])

    return (
        <div id="home">
            <div ref={mainScroll} id="mainScroll" className="blue">
                Home {count}
            </div>
        </div>
    )
}

export default Home;