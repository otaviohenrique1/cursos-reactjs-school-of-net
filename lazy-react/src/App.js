import React, { lazy, Suspense } from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const AboutComponent = lazy(() => import('./components/About'));
const HomeComponent = lazy(() => import('./components/Home'));

function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
        </div>
        <Switch>
          <Suspense fallback={<h1>Loading...</h1>}>
            <Route path="/about" exact component={AboutComponent}/>
            <Route path="/home" exact component={HomeComponent}/>
          </Suspense>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
