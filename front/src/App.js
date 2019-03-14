import React, { Component } from 'react';
import Home from './Components/Home';
import Users from './Components/Users';
import Courses from './Components/Courses';
import Course from './Components/Course';
import UserProfile from './Components/UserProfile';
import CommitList from './Components/Commit/CommitList';
import { Route, Router, Switch } from './Utils/Routing';
import { View, Text } from 'react-native';
import { Button, ListItem } from 'react-native-elements';
import withHeader from './HOCs/withHeader';
import { compose } from 'redux'

export default class App extends Component {
  state = {
    courses_list: []
  }

  renderCourse(course){
      return(
        <View>
          <ListItem
              key={course.id}
              title={course.course_name}
              subtitle={`this is ${course.course_name} sub-name`}
          /> 
          <Button
              title={`Start ${course.course_name}`}
              icon={{
                  color: 'white',
                  name: 'paper-plane',
                  size: 15,
                  type: 'font-awesome'
              }}
              onPress={() => this.handleSubmit(course.id)}
          />
      </View>
      )
  }

componentDidMount(){
  fetch('http://localhost:8080/courses')
    .then()
    .then( response => response.json())
    .then( text =>{
    this.setState({courses_list: text.result})
  })
}

  render() {
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
            <Route exact path={`/courses/get/${course.id}`} component={() => this.renderCourse(course)} />
            ))
          }
        </Switch>
      </Router>
    );
  }
}
