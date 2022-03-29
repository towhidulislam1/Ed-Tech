import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';

import Service from './components/Service/Service';
import Contact from './components/Contact/Contact';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Detalis from './components/Detalis/Detalis/Detalis';
import Login from './components/Login/Login/Login';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import Register from './components/Register/Register';


function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
        <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home" >
          <Home></Home>
          </Route>
          <Route path="/about" >
            <About></About>
          </Route>
          <Route path="/service" >
            <Service></Service>
          </Route>
          <Route path="/contact" >
            <Contact></Contact>
          </Route>
          <PrivateRoute path="/detalis/:serviceId">
            <Detalis></Detalis>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>

          <Route path="*" >
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
      
    </div>
  );
}

export default App;