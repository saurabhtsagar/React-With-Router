import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import  Header  from "./components/header";

import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Dashboard from './components/dashboard';
import About from './components/about';
import Contact from './components/contact';


function App() {
  return (
   <div className="main">
      <BrowserRouter>
      <Header/>
        <Switch>
          <Route exact path="/" component={Dashboard}/>
          <Route path="/about/:username" component={About}/>
          <Route path="/contact" component={Contact}/>
        </Switch>
      </BrowserRouter>
   </div>
  );
}

export default App;
