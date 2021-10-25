import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Landingpage from './Landing/landingpage.js'
import Links from './Links/Links';
import { Route} from 'react-router-dom';
import Home from "./components/Home";
import Nasaphoto from "./components/Nasaphoto";
import MovieComponents from "./MovieApi/MovieComponents"
import Footercomp from "./components/Footer";



function App() {

  return (
    <div>
        
          <Route exact path="/Nasaphoto" component={Nasaphoto} />
          <Route exact path="/" component={Landingpage} />
          <Route exact path="/" component={Home} />
          <Route exact path="/" component={Links} />
      <Route exact path="/MovieApis" component={MovieComponents} />
      <Route exact path="/" component={Footercomp}/>
      
    </div>
  );
}

export default App;
