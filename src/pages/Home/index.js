import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import LocomotiveScroll from 'locomotive-scroll';
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Home = props => {
  const language = useSelector(state => state.language);
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
      <motion.div ref={pageElem} id="home" className="page"
        initial={{backgroundColor: '#a3daff'}}
        animate={{backgroundColor: '#9b796b'}}
        exit='exit'
        transition={{duration: .6, ease:[0.43, 0.13,  0.23, 0.96]}}>
        <div id="wrap">
          <motion.span style={{position:'absolute',bottom:'200%'}}
            initial={{opacity: 0}}
            animate={{opacity: 1, transition:{duration: .6, ease:[0.43, 0.13,  0.23, 0.96]}}}
            exit={{opacity:0}} 
            transition={{duration: .3, ease:[0.43, 0.13,  0.23, 0.96]}}>
            Home {count}
          </motion.span>
          <Link to={`/${language}/about/`}>
            <motion.div
              initial={{scale: 0}}
              animate={{scale: 1, transition:{delay:.3, duration: .6, ease:[0.43, 0.13,  0.23, 0.96]}}}
              exit={{scale: 0}}>
              <motion.div
                whileHover={{scale: 1.5}}
                transition={{duration: .6, ease:[0.43, 0.13,  0.23, 0.96]}}
              />
            </motion.div>
          </Link>
        </div>
      </motion.div>
  )
}

export default Home;