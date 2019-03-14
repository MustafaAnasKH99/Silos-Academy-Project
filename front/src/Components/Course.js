import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { Button, ListItem, TextLink, Link } from 'react-native-elements';
import styles from './Shared.style';
import { Formik } from 'formik';
import { withRouter, Router, Switch, Route } from '../Utils/Routing';


class Course extends React.Component{
    handleSubmit = (id) => {
        this.props.history.push({
          pathname: `/courses/get/${id}`
        });
    }

    render(){
        const { courses_list } = this.props
        return (
            <Formik>
            <View>
            {/* <Formik> */}
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
                                icon={{
                                    color: 'white',
                                    name: 'paper-plane',
                                    size: 15,
                                    type: 'font-awesome'
                                }}
                                onPress={() => this.handleSubmit(course.id)}
                            />
                        </View>   
                    ))
                }
                {/* </Formik> */}
            </View>
            </Formik>
        )
    }
}

export default withRouter(Course)