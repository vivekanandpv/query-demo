import { Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import Sample from './Sample';

const App = (props) => {
  return (
    <>
      <div className='p-5'>
        <h2>React Query Demo</h2>

        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/sample'>Sample</Link>
          </li>
        </ul>
        <hr />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/sample'>
            <Sample />
          </Route>
        </Switch>
      </div>
    </>
  );
};

export default App;
