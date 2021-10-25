import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import './App.css';
import ServicesPage from './pages/ServicesPage/ServicesPage';
import EditItemPage from './pages/EditItemPage/EditItemPage';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/serviсes/:id' component={EditItemPage}/>
          <Route path='/serviсes' component={ServicesPage}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
