import React from 'react';
import './App.css';
import HomePageContainer from './pages/home/HomePageContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Shop from './pages/shop/Shop';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePageContainer} />
          <Route path="/shop" component={Shop} />
          {/* <Route path="/shop/:shopItem" component={Hats} /> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
