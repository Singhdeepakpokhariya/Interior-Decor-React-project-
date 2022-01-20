import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Help from './components/Help';
import Services from './components/Services';
import Kitchen from './components/kitchen';
import Ourwork from './components/Ourwork';
import Furniture from './components/Furniture';
import SignUp from './components/SignUp';
import Login from './components/Login';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
      <Header />
      
      
      
      <main>
        <section>
          <Switch>
            <Route path="/" exact component={Home} />

            <Route path="/about" exact component={About} />

            <Route path="/help" exact component={Help} />

            <Route path="/services" exact component={Services} />

            <Route path="/furniture" exact component={Furniture} />

            <Route path="/ourwork" exact component={Ourwork} />

            <Route path="/kitchen" exact component={Kitchen} />
            
            <Route path="/login" exact component={Login} />

            <SignUp />
            

          </Switch>
          
          
        </section>
      </main>

     
      
      </Router>
     
     
      
    </div>
  );
}

export default App;
