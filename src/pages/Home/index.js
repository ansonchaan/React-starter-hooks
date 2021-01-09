import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import LocomotiveScroll from 'locomotive-scroll';

const Home = props => {
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
        <div ref={pageElem} id="home" className="page">
            Home {count}
        </div>
    )
}

export default Home;