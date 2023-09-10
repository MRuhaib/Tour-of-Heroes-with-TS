import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './navbar';
import Dashboard from './Dashboard';
import Heroes from './Heroes';
import Create from './create';
import HeroDetails from './HeroDetails';
import NotFound from './NotFound';

const App: React.FC = (): JSX.Element => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Dashboard />
            </Route>
            <Route exact path="/heroes">
              <Heroes />
            </Route>
            <Route exact path = '/add'>
              <Create />
            </Route>
            <Route exact path ='/heroes/:id'>
              <HeroDetails />
            </Route>
            <Route path='*'>
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
