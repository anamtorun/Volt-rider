import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Bikes from './Pages/Bikes/Bikes'
import About from './Pages/About/About';
import Help from './Pages/Help/Help';
import Login from './Pages/Login/Login';
import Footer from './Pages/Shared/Footer/Footer';
import Register from './Pages/Register/Register';
import Dashboard from './Pages/Dashboard/Dashboard';
import OrderNow from './Pages/OrderNow/OrderNow'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route path='/home'>
          <Home/>
        </Route>
        <Route path='/bikes'>
          <Bikes/>
        </Route>
        <Route path='/order/:carname'>
          <OrderNow/>
        </Route>
        <Route path='/about'>
          <About/>
        </Route>
        <Route path='/help'>
          <Help/>
        </Route>
        <Route path='/login'>
          <Login/>
        </Route>
        <Route path='/register'>
          <Register/>
        </Route>
        <Route path='/dashboard'>
          <Dashboard/>
        </Route>
        <Route path='/footer'>
          <Footer/>
        </Route>
      </Switch>
   
    </Router>
  );
}

export default App;
