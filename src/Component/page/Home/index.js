import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { SmoothScroll } from '../../../globalFunc';
import './home.scss';

const Home = props => {
    const count = useSelector(state => state.count);

    useEffect(()=>{ 
        let smooth = new SmoothScroll('#scrollWrap',(s, y, h) => {});
        smooth.on();
        smooth.showScrollBar();

        return () => {
            smooth.hideScrollBar();
            smooth.off();
            smooth = null;
        }
    },[])

    return (
        <div id="home">
            <div id="scrollWrap">
                Home {count}
            </div>
        </div>
    )
}

export default Home;