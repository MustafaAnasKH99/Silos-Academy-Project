import React, { Component } from 'react';
import Home from './Components/Home';
import Users from './Components/Users';
import Courses from './Components/Courses';
import Course from './Components/Course';
import withHeader from './HOCs/withHeader';
import { compose } from 'redux'
import UserProfile from './Components/UserProfile';
import Levels from './Components/Levels';
import Level from './Components/Level';
import CommitList from './Components/Commit/CommitList';
import { Route, Router, Switch } from './Utils/Routing';
import { View, Text, ActivityIndicator, StyleSheet, FlatList } from 'react-native';
import { Button, ListItem } from 'react-native-elements';
import {APP_URL_HTTP} from "./constants";

export default class App extends Component {
  state = {
    courses_list: [],
    levels_list: [],
    loading: 'loading',
  }

  handleSubmit = (course_name) => {
    this.props.history.push({
      pathname: `/courses/levels/${course_name}`
    });
  }

componentDidMount(){
  console.log('porpssss',this.props)
  fetch(`${APP_URL_HTTP}courses`)
    .then( response => response.json())
    .then( text =>{
    this.setState({courses_list: text.courses_list, levels_list: text.levels_list, loading: 'loaded'})
  })
}

  render() {
    console.log(this.state)
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/users" component={Users} />
          <Route exact path="/courses" component={Courses} />
          <Route exact path="/user-profile" component={UserProfile} />
          <Route exact path="/commit" component={CommitList} />
          {
            this.state.courses_list.map(course => (
              <Route exact key={course.id} path={`/courses/${course.course_name}`} component={(props) => <Levels {...props} course={course} />} />
            ))
          }
          {
            this.state.levels_list.map(level => (
              <Route exact path={`/courses/${level.level_name}`} component={(props) => <Level {...props} level={level} />} />
            ))
          }
        </Switch>
      </Router>
    )
  }
}

const styling = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  }
})

// export default compose(
//   withHeader({ title: 'الدورات المتاحة' }),
// )(App)