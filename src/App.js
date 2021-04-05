import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import  Header  from "./components/header";

import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Dashboard from './components/dashboard';
import About from './components/about';
import Contact from './components/contact';
import Users from './components/users';
import Salary from './components/salary';

function App() {
  return (
   <div className="main">
      <BrowserRouter>
      <Header/>
        <Switch>
          <Route exact path="/" component={Dashboard}/>
          <Route path="/about/:username" component={About}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/users" component={Users}/>
          <Route path="/salary" component={Salary}/>
        </Switch>
      </BrowserRouter>
   </div>
  );
}

export default App;
