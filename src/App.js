import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Shop from './Components/Shop/Shop';
import Service from './Components/Service/Service';
import Marken from './Components/Marken/Marken';
import Blog from './Components/Blog/Blog';
import KundenKonto from './Components/KundenKonto/KundenKonto';
import Cart from './Components/Cart/Cart';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        < Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/shop' exact component={Shop} />
          <Route path='/service' exact component={Service} />
          <Route path='/marken' exact component={Marken} />
          <Route path='/blog' exact component={Blog} />
          <Route path='/kundenKonto' exact component={KundenKonto} />
          <Route path='/cart' exact component={Cart} />
        </Switch>

      </div>
    </Router>

  );
}

export default App;
