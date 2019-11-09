import React from 'react';
import './App.css';
import HomePageContainer from './components/home/HomePageContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


const Hats = () => <h1>Hats</h1>

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePageContainer} />
          <Route path="/shop/:shopItem" component={Hats} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
