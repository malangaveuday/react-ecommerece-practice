import React, { Component } from 'react';
import './App.css';
import HomePageContainer from './pages/home/HomePageContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Shop from './pages/shop/Shop';
import Header from './components/header/Header';
import SignInSignUp from './pages/sign_in_sign_up/SignInSignUp';
import { AUTH } from './firebase/util';
import { createUser } from './firebase/crud';


class App extends Component {
  constructor() {
    super()
    this.state = {
      currentUser: null
    }
  }

  componentDidMount() {
    this.authUnSubscription = AUTH.onAuthStateChanged(async userAuth => {
      const userRef = await createUser(userAuth);
      if (userRef) {
        userRef.onSnapshot(snapShot => {
          this.setState(() => ({ currentUser: {
            id: snapShot.id,
            ...snapShot.data()
          } }));
        })
      }
    })
  }

  componentWillUnmount() {
    this.authUnSubscription();
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header currentUser={this.state.currentUser} />
          <Switch>
            <Route exact path="/" component={HomePageContainer} />
            <Route path="/shop" component={Shop} />
            <Route path="/signIn" component={SignInSignUp} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
