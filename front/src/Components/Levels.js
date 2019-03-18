import React, { PureComponent } from 'react';
import { Route, Router, Switch } from '../Utils/Routing';
import { View, Text, ActivityIndicator, StyleSheet, FlatList } from 'react-native';
import { Button, ListItem } from 'react-native-elements';
import withHeader from '../HOCs/withHeader';
import { withRouter } from '../Utils/Routing';
import { compose } from 'redux'
import { APP_URL} from '../constants';

class Levels extends PureComponent{
    state={
        levels_list: [],
        status: 'loading'
    }

    handleSubmit = (level) => {
        this.props.history.push({
          pathname: `/courses/${level.level_name}`
        });
        console.log(this.props.history)
    }
    
    componentDidMount(){
        fetch(`${APP_URL}courses`)
        .then()
        .then(response => response.json())
        .then(text => {
            this.setState({levels_list: text.levels_list, status: 'loaded'})
        })
    }
    render(){
        console.log('not passed?', this.props)
    const { loading, levels_list } = this.state
    const { course } = this.props
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
                  onPress={() => this.handleSubmit(level)}
                />
              </View>
            ))
          }
      </View>
      )
    }
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

export default compose(
  withHeader({ title: 'الدورات المتاحة'}),
  withRouter,
)(Levels)