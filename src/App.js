import React from 'react';
import './App.css';
import Home from './pages/Home';
import SearchResults from './pages/Search'
import Detail from './pages/Detail'
import { Link, Route } from "wouter";
import {GifsContextsProvider} from './context/GifsContext'

function App() {
  return (
   
    <div className="App">
      <section className="App-content">
       <Link to="/">
        <h1>App</h1>
        </Link> 
    <GifsContextsProvider>
        <Route 
         component={Home}
         path="/"
          />
        <Route
        component={SearchResults}
        path="/search/:keyword" 
        />
        <Route
        component={Detail}
        path="/gif/:id" 
        />
        </GifsContextsProvider>
      </section>
    </div>
  
  );
}

export default App;
