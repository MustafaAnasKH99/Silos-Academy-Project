import React, { PureComponent } from 'react';
import { Route, Router, Switch } from '../Utils/Routing';
import { View, Text, ActivityIndicator, StyleSheet, FlatList, Image } from 'react-native';
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
    console.log('imagggeeee',course.img_url)
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
              subtitle={`${course.course_name} is ${course.notes}`}
              containerStyle={{
                backgroundColor: '#dadada',
              }}
          />
          {
            thisCourseLevels.map(level => (
              <View style={{flex: 1, flexDirection: 'row', paddingRight: 15, paddingLeft: 15, paddingBottom: 5}}>
                <FlatList 
                  style={styling.list}
                  data={[{level_name: `${level.level_name}`},{article: `${level.article}`}, {test: `${level.test}`}, {expected_answer: `${level.expected_answer}`}]}
                  renderItem={({item}) => (
                    <View>
                      <Text>{item.level_name}</Text>
                    </View>
                  )}
                  containerStyle={{
                    backgroundColor: '#dadada',
                  }}
                />
                <Button
                  title={`ابدا ${level.level_name}`}
                  icon={{
                    color: 'white',
                    name: 'paper-plane',
                    size: 15,
                    type: 'font-awesome'
                  }}
                  buttonStyle={{
                    backgroundColor: '#fdc300',
                  }}
                  onPress={() => this.handleSubmit(level)}
                />
              </View>
            ))
          }
          <Image
            source={{ uri: course.img_url }}
            style={{ width: '100%', height: 200 }}
            PlaceholderContent={<ActivityIndicator />}
          />
      </View>
      )
    }
    }
}

const styling = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#dadada',
      paddingBottom: 40,
      borderColor: '#dadada'
    },
    horizontal: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 5
    },
})

export default compose(
  withHeader({ title: 'الدورات المتاحة'}),
  withRouter,
)(Levels)