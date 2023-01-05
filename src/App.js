import './App.css';
import React from 'react';
import { ListMovies } from './components/ListMovies';

import Header from './shared/components/Header';
import { Route } from 'wouter';
import DetailMovie from './components/DetailMovie';
import { Home } from './pages/home';
import LazyFooter from 'shared/components/footer';

function App() {
  return (
    <div className="app"> 
      <Header />
      <section className="container-fluid main">
          <Route path="/" component={Home} />
          <Route path="/movies/:category" component={ListMovies} />
          <Route path="/movies/detail/:idMovie" component={DetailMovie} />
      </section>
      <LazyFooter />
    </div>
  );
}

export default App;
