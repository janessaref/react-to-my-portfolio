// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';

function App() {
  return (

    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/portfolio" component={Portfolio} />
        </Switch>
      </div>
    </Router>
     
  );
}

export default App;


