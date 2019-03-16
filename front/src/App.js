import React, { Component } from 'react';
import Home from './Components/Home';
import Users from './Components/Users';
import Courses from './Components/Courses';
import Course from './Components/Course';
import withHeader from './HOCs/withHeader';
import { compose } from 'redux'
import UserProfile from './Components/UserProfile';
import CommitList from './Components/Commit/CommitList';
import { Route, Router, Switch } from './Utils/Routing';
import { View, Text, ActivityIndicator, StyleSheet, FlatList } from 'react-native';
import { Button, ListItem } from 'react-native-elements';


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

  renderCourse(course){
    console.log('course:::',course)
    const { loading, levels_list } = this.state
      let thisCourseLevels = levels_list.filter(e => e.course_name === course.course_name)
      if (loading === 'loading'){
        return (
          <View style={[styling.container, styling.horizontal]}>
            <ActivityIndicator size="large" color="#00ff00" />
          </View>
        )
    } else {
      return (
        <View style={styling.container}>
          <ListItem
              key={course.id}
              title={course.course_name}
              subtitle={`this is ${course.course_name} sub-name`}
          />
          {/* <FlatList 
            data={course}
            renderItem={({course}) => <Text>{course.course_name}</Text>}
          /> */}
              {
                thisCourseLevels.map(level => (
                  <View>
                    <FlatList 
                      data={[{level_name: `${level.level_name}`},{article: `${level.article}`}, {test: `${level.test}`}, {expected_answer: `${level.expected_answer}`}]}
                      renderItem={({item}) => (
                        <View>
                          <Text>{item.level_name}</Text>
                          <Text>{item.article}</Text>
                          <Text>{item.test}</Text>
                          <Text>{item.expected_answer}</Text>
                        </View>
                      )}
                    />
                    <Button
                      title={`Start ${level.level_name}`}
                      icon={{
                          color: 'white',
                          name: 'paper-plane',
                          size: 15,
                          type: 'font-awesome'
                      }}
                      onPress={() => this.handleSubmit(course.course_name)}
                    />
                  </View>
                ))
              }
      </View>
      )
    }
  }

componentDidMount(){
  console.log('porpssss',this.props)
  fetch('http://localhost:8080/courses')
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
              <Route exact key={course.id} path={`/courses/get/${course.course_name}`} component={() => this.renderCourse(course)} />
            ))
          }
        </Switch>
      </Router>
    );
  }
}

const styling = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
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