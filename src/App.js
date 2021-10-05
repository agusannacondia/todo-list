import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import pages from './pages'

const App = () => 
(
    <Router>
      <Switch>
      {
        pages.map((page, key) => <Route exact path={page.path} component={page.component} key={key} />)
      }
      </Switch>
    </Router>
);

export default App