import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { Button, ListItem } from 'react-native-elements';
import styles from './Shared.style';
import { withRouter } from '../Utils/Routing';
import withHeader from '../HOCs/withHeader';
import { compose } from 'redux'
import Course from './Course'


class Courses extends React.Component{
    state = {
        courses_list:[],
    }

    componentDidMount(){
        fetch('http://localhost:8080/courses')
         .then()
         .then( response => response.json())
         .then( text =>{
             this.setState({courses_list: text.result})
        })
    }

    render(){
        const { courses_list } = this.state
        console.log(courses_list)
        return(
            <View style={styles.container}>
                <View>
                    <Text>تصفح الدورات المتاحة على منصتنا هنا!</Text>
                    <Course 
                        courses_list={courses_list}
                    />
                </View>
            </View>
        )
    }
}

export default compose(
    withHeader({ title: 'الدورات المتاحة' })
  )(Courses);