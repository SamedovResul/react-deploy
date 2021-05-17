import React from 'react';
import 'react-bootstrap';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import environment from './component/environmentFolder/environment'
import technology from './component/technologyFolder/technology'
import NavBar from './component/NavFolder/Navigation'
import HomeBanner from './component/homeFolder/homeBanner'
import SkillBanner from './component/skillFolder/skill'

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar  />
          <Switch>
            <Route path="/environment" component={environment} />
            <Route path="/technology" component={technology} />
            <Route path="/skill" component={SkillBanner} />
            <HomeBanner />
          </Switch>
      </div>
    </Router>
  );
}

export default App;
