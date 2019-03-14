import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { Button, ListItem } from 'react-native-elements';
import styles from './Shared.style';
import { withRouter } from '../Utils/Routing';
import withHeader from '../HOCs/withHeader';
import { compose } from 'redux';


export default class Course extends React.Component{
    state = {
        courses_list:[],
    }

    // getCourse = async () => {
    //     fetch(`http://localhost:8080/courses/get/`)
    //     .then()
    //     .then( response => response.json())
    //     .then( text =>{
    //         this.setState({courses_list: text.result})
    //    })
    // }

    render(){
        const { courses_list } = this.props
        console.log(courses_list)
        console.log(this.props)
        return (
            <View>
                {
                    courses_list.map(course => (
                        <View>
                            <ListItem
                                key={course.id}
                                title={course.course_name}
                                subtitle={`this is ${course.course_name} sub-name`}
                            />
                            <Button 
                                title={`Start ${course.course_name}`}
                            />   
                        </View>   
                    ))
                }
            </View>
        )
    }
}