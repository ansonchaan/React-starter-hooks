import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { adjustFontSize } from './globalFunc';
import './scss/style.scss';

// Component
import Nav from './Component/Nav';
import Home from './Component/page/Home';
import About from './Component/page/About';


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


  const Pages = props => {

    // update language state when language is zh from started
    if(props.match.params.language !== language)
      dispatch({type: 'UPDATE_LANGUAGE'})

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


  return (
    <Router>
      <Route exact path="/:language?/:section?/"
        render={ props => {
          if(/^(en|zh)$/.test(props.match.params.language)){
            return <Pages {...props} />
          }
          else{
            return <Redirect from="*" to={`/${language}/`} />
          }
        }
      }>
      </Route>
    </Router>
  );
}

export default App;
