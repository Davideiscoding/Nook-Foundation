import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Homepage from './components/layout/Homepage'
import Navbar from './components/layout/Navbar'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import Review from './components/layout/Review'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path= '/' exact component={Homepage} />
            <Route path='/review' exact component={Review} />
            <Route path='/signin' exact component={SignIn} />
            <Route path='/signup' exact component={SignUp} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
