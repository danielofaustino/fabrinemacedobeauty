import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Carousel from './components/Carousel';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Carousel />
          </Route>
          <Route exact path="/services" component={() => <div>Services</div>} />
          <Route
            exact
            path="/customsoftware"
            component={() => <div>Custom Software</div>}
          />
          <Route
            exact
            path="/mobileapps"
            component={() => <div>Mobile Apps</div>}
          />
          <Route exact path="/websites" component={() => <div>WebSites</div>} />
          <Route
            exact
            path="/revolution"
            component={() => <div>Revolution</div>}
          />
          <Route exact path="/about" component={() => <div>About</div>} />
          <Route exact path="/contact" component={() => <div>Contact</div>} />
          <Route exact path="/estimate" component={() => <div>Estimate</div>} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
