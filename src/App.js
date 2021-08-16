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
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Single from './pages/Single';
import Error from './pages/Error';
function App() {
  return (
    <div>
      <Router>
      <Header />
        
        <Switch>
        <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/gallery" component={Gallery} />
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/services" component={Services} />
                    <Route exact path="/single" component={Single} />
                    <Route component={Error} />
        </Switch>
    <Footer/>
    </Router>
</div>
  );
}

export default App;
