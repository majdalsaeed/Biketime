import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Shop from './Components/Shop/Shop';
import Marken from './Components/Marken/Marken';
import Service from './Components/Service/Service';
import Blog from './Components/Blog/Blog';
import KundenKonto from './Components/KundenKonto/KundenKonto';
function App() {
  return (
    <>
      <Router>
        <Navbar>
          <Switch>
            <Route path='./' exact component={Home} />
            <Route path='./Home' component={Home} />
            <Route path='./Shop' component={Shop} />
            <Route path='./Marken' component={Marken} />
            <Route path='./Service' component={Service} />
            <Route path='./Blog' component={Blog} />
            <Route path='./KundenKonto' component={KundenKonto} />
          </Switch>
        </Navbar>
      </Router>
    </>
  );
}

export default App;
