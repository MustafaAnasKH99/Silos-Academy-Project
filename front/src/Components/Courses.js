import React from 'react'
import { Text, StyleSheet, View, ActivityIndicator } from 'react-native'
import { Button, ListItem } from 'react-native-elements';
import styles from './Shared.style';
import { withRouter } from '../Utils/Routing';
import withHeader from '../HOCs/withHeader';
import { compose } from 'redux'
import Course from './Course'
import Home from './Home'
import { Router, Switch, Route, Link } from "../Utils/Routing";



class Courses extends React.Component{
    state = {
        courses_list:[],
        status: 'loading'
    }

    componentDidMount(){
        fetch('http://localhost:8080/courses')
         .then()
         .then( response => response.json())
         .then( text =>{
             this.setState({courses_list: text.courses_list, status: 'loaded'})
        })
    }

    render(){
        const { courses_list, status } = this.state
        console.log(status)
        if(status === 'loading'){
            return(
            <View style={[styling.container, styling.horizontal]}>
                <ActivityIndicator size="large" color="red" />
            </View>
            )
        } else {
            return(
                <View>
                    <Text>تصفح الدورات المتاحة على منصتنا هنا!</Text>
            {    courses_list.map(course => (
                    <View> 
                        <Course 
                            course={course}
                        />
                    </View>
                ) 
            )}
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
    withHeader({ title: 'الدورات المتاحة' }),
    withRouter
)(Courses);