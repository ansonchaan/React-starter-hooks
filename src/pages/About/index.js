import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { SmoothScroll } from '../../../globalFunc';
import './about.scss';

const About = props => {
    const count = useSelector(state => state.count);
    const mainScroll = useRef(null);

    useEffect(()=>{ 
        let smooth = new SmoothScroll(mainScroll.current,(s, y, h) => {});
        smooth.on();
        smooth.showScrollBar();

        return () => {
            smooth.hideScrollBar();
            smooth.off();
            smooth = null;
        }
    },[])

    return (
        <div id="about">
            <div ref={mainScroll} id="mainScroll">
                About {count}
            </div>
        </div>
    )
}

export default About;