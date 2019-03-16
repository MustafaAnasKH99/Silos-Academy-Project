import React from 'react'
import { Text, StyleSheet, View, ScrollView } from 'react-native'
import { Button, ListItem, TextLink, Link } from 'react-native-elements';
import styles from './Shared.style';
import { Formik } from 'formik';
import { withRouter, Router, Switch, Route } from '../Utils/Routing';


class Course extends React.Component{
    handleSubmit = (course_name) => {
        this.props.history.push({
          pathname: `/courses/get/${course_name}`
        });
    }

    render(){
        const { course } = this.props
        return (
            <View>
                <ScrollView> 
                    <View style={styling.container}>
                        <ListItem
                            key={course.id}
                            title={course.course_name}
                            subtitle={`this is ${course.course_name} sub-name`}
                            avatar={{uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'}}
                        /> 
                        <Button
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
                </ScrollView> 
            </View>
        )
    }
}

const styling = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
        borderWidth: 5,
        borderColor: '#d6d7da',
        margin: '10px'
    },
})

export default withRouter(Course)