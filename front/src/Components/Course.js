import React from 'react'
import { Text, StyleSheet, View, ScrollView } from 'react-native'
import { Button, ListItem, Avatar, TextLink, Link } from 'react-native-elements';
import styles from './Shared.style';
import { Formik } from 'formik';
import { compose } from 'redux'
import withHeader from '../HOCs/withHeader';
import { withRouter, Router, Switch, Route } from '../Utils/Routing';
import JSImage from '../images/JS.jpg';
import fetch from 'fetch-hoc'
import {APP_URL, APP_URL_HTTP, APP_URL_HTTPS} from "../constants";



export default class Course extends React.Component{
    handleSubmit = (course_name) => {
        this.props.history.push({
          pathname: `/courses/get/${course_name}`
        });
    }

    render(){
        console.log('Hereee they areee', this.props)
        const { course } = this.props
        console.log(course)
        return (
            <View>
                <ScrollView> 
                    <View style={styling.container}>
                        <ListItem
                            key={course.id}
                            title={course.course_name}
                            subtitle={`${course.course_name} is ${course.notes}`}
                            leftAvatar={{ source: { uri: course.img_url } }}
                        /> 
                    </View>  
                </ScrollView> 
            </View>
        )
    }
}

const styling = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 0,
        borderWidth: 5,
        borderColor: '#d6d7da',
        marginRight: 5,
        marginLeft: 5,
    },
})

// export default compose(
//   withHeader({ title: 'الدورات المتاحة' }),
//   fetch(`${APP_URL}courses`),
//   withRouter,
// )(Course)

// export default withHeader({ title: 'Commits' })(Course);