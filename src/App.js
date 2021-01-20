import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion'
import { adjustFontSize } from './globalFunc';
import AsyncLoadComponent from './components/AsyncLoadComponent';

// Async to load component
const Nav = AsyncLoadComponent(import('./components/Nav'));
const Home = AsyncLoadComponent(import('./pages/Home'));
const About = AsyncLoadComponent(import('./pages/About'));

const App = () => {
  const language = useSelector(state => state.language);
  // const dispatch = useDispatch();

  const resize = () => {
    adjustFontSize();
  }

  useEffect(()=>{
    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
    }
  },[]);


  return (
    <Router basename="/test/">
      <Route exact path="/:language?/:section?/"
        render={ props => {
          if(!/^(en|zh)$/.test(props.match.params.language)){
            return <Redirect from="*" to={`/${language}/`} />
          }

          return (
            <div id="bodyWrap" className={`bodyWrap ${language}`}>
              <Nav {...props} />
              <AnimatePresence initial={false} exitBeforeEnter>
                <Switch location={props.location} key={props.location.pathname}>
                  <Route exact path="/:language/" component={Home} />
                  <Route exact path="/:language/about/" component={About} />
                  <Redirect from="*" to={`/${language}/`} />
                </Switch>
              </AnimatePresence>
            </div>
          )
        }
      }/>
    </Router>
  );
}

export default App;
