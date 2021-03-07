import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';
import USERS from './users';

import About from './components/about/About';
import ForgotPassword from './components/forms/forgot-password';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Logout from './components/logout/Logout';
import Nav from './components/nav/nav';
import NotFound from './components/NotFound';
import PrivateRoute from './routes/PrivateRoute';
import SignUpForm from './components/forms/sign-up';
import UserList from './components/user-list/user-list';
import { isLoggedIn } from './utils/isAuth';


class App extends Component {
  constructor(props) {
    super(props);
    // posible values "available/busy and on-campus/home-office"
    this.state = {
      myUser: { ...USERS[0] },
      users: [...USERS],
      redirect: null
    }
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div className="App">
            <header className="App-header">
              <Nav links={this.state.links} />
            </header>
            <main>
              <Switch>
                <Route path="/dashboard">
                  <UserList users={this.state.users} />
                </Route>
                <PrivateRoute exact path="/user">
                  <Home user={this.state.myUser} onChangePlace={this.updateUserPlace} onChangeStatus={this.updateUserStatus} />
                </PrivateRoute>
                <Route path="/login">
                  <Login handleLogIn={this.handleLogIn} handleLogOut={this.handleLogOut} redirect={this.state.redirect} isAuth={this.state.isAuth} />
                </Route>
                <Route path="/logout">
                  <Logout handleLogIn={this.handleLogIn} handleLogOut={this.handleLogOut} redirect={this.state.redirect} isAuth={this.state.isAuth} />
                </Route>
                <Route path="/signup">
                  <SignUpForm />
                </Route>
                <Route path="/forgotpassword">
                  <ForgotPassword />
                </Route>
                <Route exact path="/">
                  <About />
                </Route>
                <Route>
                  <NotFound />
                </Route>
              </Switch>
            </main>
          </div>
        </Router>
      </div>
    );
  }

  updateUserPlace = (onCampus) => {
    const place = onCampus ? 'on-campus' : 'home-office';
    this.setState((state) => {

      let newUserList = [...this.state.users];
      //myUser is always in pos[0] in the demo. However, in real app this will not be true.
      newUserList[0].place = place;

      return {
        myUser: {
          ...state.myUser,
          place
        },
        users: newUserList
      }
    });
  }

  updateUserStatus = (available) => {
    const status = available ? 'available' : 'busy';
    this.setState((state) => {

      let newUserList = [...this.state.users];
      //myUser is always in pos[0] in the demo. However, in real app this will not be true.
      newUserList[0].status = status;

      return {
        myUser: {
          ...state.myUser,
          status
        },
        users: newUserList
      }
    });
  }

  handleLogIn = () => {
    localStorage.setItem('userAuth', JSON.stringify(true));
    const isAuth = isLoggedIn();
    this.setState({
      isAuth,
      redirect: "/user",
      links: ['home', 'user', 'dashboard', 'logout']
    });
  };

  handleLogOut = () => {
    localStorage.removeItem('userAuth');
    this.setState({
      isAuth: false,
      redirect: undefined,
      links: undefined
    });
  };
}

export default App;