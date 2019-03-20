import React from 'react'
import { Text, StyleSheet, View, ScrollView } from 'react-native'
import { Button, ListItem, Avatar, TextLink, Link } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './Shared.style';
import { Formik } from 'formik';
import { compose } from 'redux'
import withHeader from '../HOCs/withHeader';
import { withRouter, Router, Switch, Route } from '../Utils/Routing';
import JSImage from '../images/JS.jpg';
import fetch from 'fetch-hoc'
import {APP_URL, APP_URL_HTTP, APP_URL_HTTPS} from "../constants";
import {ImageBackground} from 'react-native-web'



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
            <View style={styling.container}>
                <ListItem
                    key={course.id}
                    title={course.course_name}
                    subtitle={`${course.notes}`}
                    leftAvatar={{ source: { uri: course.img_url } }}
                    titleStyle={{ color: 'white', paddingLeft: 10, paddingTop: 0 }}
                    subtitleStyle={{ color: 'white', paddingLeft: 10, paddingTop: 0 }}
                    containerStyle={{
                        backgroundColor: '#FDC300',
                        borderRadius: 10,
                    }}
                    rightContentContainerStyle={{
                        backgroundColor: 'white',
                    }}
                /> 
                <Icon style={styling.icon} name='angle-double-right' type='font-awesome' size={25} color='white' />
            </View>
        )
    }
}

const styling = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'stretch',
        // paddingHorizontal: 0,
        margin: 5,
        marginRight: 5,
        marginLeft: 5,
        backgroundColor: '#FDC300',
        borderRadius: 10,
        borderWidth: 0,
        padding: 5,
    },
    icon: {
        padding:25,
    },
    text:{
        color: '#dadada'
    }
})

// export default compose(
//   withHeader({ title: 'الدورات المتاحة' }),
//   fetch(`${APP_URL}courses`),
//   withRouter,
// )(Course)
// export default withHeader({ title: 'Commits' })(Course);