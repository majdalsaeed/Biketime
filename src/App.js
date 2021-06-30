import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Shop from "./Components/Shop/Shop";
import Service from "./Components/Service/Service";
import KundenKonto from "./Components/KundenKonto/KundenKonto";
import Cart from "./Components/Cart/Cart";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { DataProvider } from "./Components/Shop/DataProvider";

function App() {
  return (
    <DataProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/shop" exact component={Shop} />
            <Route path="/service" exact component={Service} />
            <Route path="/kundenKonto" exact component={KundenKonto} />
            <Route path="/cart" exact component={Cart} />
          </Switch>
        </div>
      </Router>
    </DataProvider>
  );
}

export default App;
