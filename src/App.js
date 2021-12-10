import logo from './logo.svg';
import './App.css';
import Service from './Pages/Service/Service';
import Works from './Pages/Works/Works';
import { BrowserRouter as Router,Switch,Route,} from 'react-router-dom';
import Home from './Pages/Home/Home';
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails';
import Header from './Pages/Shared/Header/Header';
import Login from './Pages/Login/Login/Login';
import AuthProvider from './Context/AuthProvider';
import SingleService from './Pages/ServiceDetails/SingleService';
import Registration from './Pages/Login/Registration/Registration';
import NotFound from './Pages/Home/NotFound/NotFound';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Footer from './Pages/Home/Footer/Footer';

function App() {
  return (
    <div>
     <AuthProvider>

     <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>

          </Route>
          <Route  path="/home">
            <Home></Home>
            <Footer></Footer>
          </Route>
          <Route exact path="/service">
            <Service></Service>
          </Route>
          
         
          <PrivateRoute exact path="/serviceDetails/:serviceId">
               <SingleService></SingleService>
          </PrivateRoute>
          <Route exact path="/works">
            <Works></Works>
          </Route>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route path="/registration">
          <Registration></Registration>
          </Route>
          <Route exact path="/*">
            <NotFound></NotFound>
          </Route>

        </Switch>
      
      </Router>

     </AuthProvider>
   
    </div>
  );
}

export default App;
