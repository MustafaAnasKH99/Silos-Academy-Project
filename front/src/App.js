import React, { Component } from 'react';
import Home from './Components/Home';
import Users from './Components/Users';
import Courses from './Components/Courses';
import Course from './Components/Course';
import UserProfile from './Components/UserProfile';
import CommitList from './Components/Commit/CommitList';
import { Route, Router, Switch } from './Utils/Routing';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/users" component={Users} />
          <Route exact path="/courses" component={Courses} />
          <Route exact path="/user-profile" component={UserProfile} />
          <Route exact path="/commit" component={CommitList} />
        </Switch>
      </Router>
    );
  }
}

export default App;
