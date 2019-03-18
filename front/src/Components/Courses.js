import React from 'react'
import {Text, StyleSheet, View, ActivityIndicator} from 'react-native'
import {Button, ListItem} from 'react-native-elements';
import styles from './Shared.style';
import {withRouter} from '../Utils/Routing';
import withHeader from '../HOCs/withHeader';
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
                <View>
                    <Text style={styling.text}>تصفح الدورات المتاحة هنا!</Text>
                    {courses_list.map(course => (
                            <View>
                                <Course
                                    course={course}
                                />
                                 <Button
                                    style={styling.button}
                                    title={`Start`}
                                    icon={{
                                        color: 'white',
                                        name: 'paper-plane',
                                        size: 15,
                                        type: 'font-awesome'
                                    }}
                                    onPress={() => this.handleSubmit(course.course_name)}
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
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
        color: '#2089dc',
        padding: 10,
    },
    button: {
        margin: 5,
        marginTop: 0,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0,
    }
})

export default compose(
    withHeader({title: 'الدورات المتاحة'}),
    withRouter
)(Courses);