import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { adjustFontSize } from './globalFunc';
import AsyncLoadComponent from './components/AsyncLoadComponent';

// Async to load component
const Nav = AsyncLoadComponent(import('./components/Nav'));
const Home = AsyncLoadComponent(import('./pages/Home'));
const About = AsyncLoadComponent(import('./pages/About'));

const App = () => {
  const language = useSelector(state => state.language);
  const dispatch = useDispatch();

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
            <div id="bodyWrap" className={`body_wrap ${language}`}>
              <Nav {...props} />
              <Switch>
                <Route exact path="/:language/" component={Home} />
                <Route exact path="/:language/about/" component={About} />
                <Redirect from="*" to={`/${language}/`} />
              </Switch>
            </div>
          )
        }
      }>
      </Route>
    </Router>
  );
}

export default App;
