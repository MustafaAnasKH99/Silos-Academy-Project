import React from 'react'
import {Text, StyleSheet, Platform, View, ActivityIndicator, ScrollView, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback} from 'react-native'
import {Button, ListItem} from 'react-native-elements';
import styles from './Shared.style';
import {withRouter} from '../Utils/Routing';
import withHeader from '../HOCs/withHeader';
import Icon from 'react-native-vector-icons/FontAwesome';
import {compose} from 'redux'
import Course from './Course'
import Home from './Home'
import {Router, Switch, Route, Link} from "../Utils/Routing";
import {APP_URL, APP_URL_HTTP, APP_URL_HTTPS} from "../constants";

class Courses extends React.Component {
    state = {
        courses_list: [],
        status: 'loading'
    }

    handleSubmit = (course_name) => {
        this.props.history.push({
          pathname: `/courses/${course_name}`
        });
    }   

    componentDidMount() {
        fetch(`${APP_URL}courses`)
            .then()
            .then(response => response.json())
            .then(text => {
                this.setState({courses_list: text.courses_list, status: 'loaded'})
            })
    }

    render() {
        const {courses_list, status} = this.state
        console.log(status)
        if (status === 'loading') {
            return (
                <View style={[styling.container, styling.horizontal]}>
                    <ActivityIndicator size="large" color="red"/>
                </View>
            )
        } else {
            console.log('is there a problem ' ,this.state.courses_list)
            return (
                <View style={styling.container}>
                {courses_list.map(course => (
                        <TouchableOpacity onPress={() => this.handleSubmit(course.course_name)} style={styling.backGC}>
                            <Course
                                course={course}
                            />
                        </TouchableOpacity> 
                    )
                )}
                </View>
            )
        }
    }
}

const styling = StyleSheet.create({
    container: {
        flex: 2,
        alignSelf: 'stretch',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 5,
        backgroundColor: '#dadada',
        height: '100%',
        width: '100%',
        paddingBottom: 150,
        paddingTop: 20,
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
        color: '#2089dc',
        padding: 0,
    },
    button: {
        // margin: 5,
        marginTop: 0,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0,
    },
    backGC: {
        backgroundColor: '#dadada', 
    }
})

export default compose(
    withHeader({title: 'الدورات المتاحة'}),
    withRouter
)(Courses);