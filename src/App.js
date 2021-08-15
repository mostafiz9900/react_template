import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './pages/Header';
import Footer from './pages/Footer';
import Home from './pages/Home';
import About from './pages/About';
function App() {
  return (
    <div>
      <Router>
      <Header />
        
        <Switch>
        <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    {/* <Route exact path="/services" component={Services} /> */}
                    {/* <Route exact path="/contact" component={Contact} /> */}
                    {/* <Route component={Error} /> */}
        </Switch>
    <Footer/>
    </Router>
</div>
  );
}

export default App;
