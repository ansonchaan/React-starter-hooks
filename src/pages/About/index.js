import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import LocomotiveScroll from 'locomotive-scroll';

const About = props => {
    const count = useSelector(state => state.count);
    const pageElem = useRef(null);

    useEffect(()=>{
        const scroll = new LocomotiveScroll({
          el: pageElem.current,
          smooth: true
        });

        return () => {
          scroll.destroy();
        }
    },[])

    return (
        <div ref={pageElem} id="about" className="page">
            About {count}
        </div>
    )
}

export default About;