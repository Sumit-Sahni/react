import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Landingpage from './Landing/landingpage.js'
import Links from './Links/Links';
import { Route, Router, Switch} from 'react-router-dom';
import Home from "./components/Home";
import Navbar from './components/Navbar.js';
import Nasaphoto from "./components/Nasaphoto";
import MovieComponents from "./MovieApi/MovieComponents"

function App() {
  return (
    <div>
      <Router  basename={process.env.PUBLIC_URL }>
        <Switch>
       <Route exact path="/Navbar" component={Navbar} />
       <Route exact path="/Nasaphoto" component={Nasaphoto} />
       <Route exact path="https://sumit-sahni.github.io/react/" component={Landingpage} />
       <Route exact path="/https://sumit-sahni.github.io/react/" component={Links} />
       <Route exact path="/https://sumit-sahni.github.io/react/" component={Home} />
       <Route exact path="/MovieApis" component={MovieComponents} />
       </Switch>
     </Router>
    </div>
  );
}

export default App;
