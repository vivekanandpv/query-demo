import { Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import Sample from './Sample';
import Demo from './Demo';
import Counter from './Counter';

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
          <li>
            <Link to='/demo'>Demo</Link>
          </li>
          <li>
            <Link to='/counter'>Counter</Link>
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
          <Route exact path='/demo'>
            <Demo />
          </Route>
          <Route exact path='/counter'>
            <Counter />
          </Route>
        </Switch>
      </div>
    </>
  );
};

export default App;
