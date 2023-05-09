import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import BlogForm from './components/BlogForm';

function App() {
  return (
    < Router >
    <div>
      < Navbar/>
      <Switch >
      <Route exact path="/" component={Home} />
          <Route path="/add-blog" component={BlogForm} />
          </Switch>
    </div>
    </Router>
  );
}

export default App;
