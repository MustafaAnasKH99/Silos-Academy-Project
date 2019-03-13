import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { Button, ListItem } from 'react-native-elements';
import styles from './Shared.style';
import { withRouter } from '../Utils/Routing';
import withHeader from '../HOCs/withHeader';
import { compose } from 'redux'


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
                <Text>تصفح الدورات المتاحة على منصتنا هنا!</Text>
                <View>
                {
                    courses_list.map(course => (
                    <View>
                        <ListItem
                            key={course.id}
                            // leftAvatar={{ source: { uri: l.avatar_url } }}
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
            </View>
        )
    }
}

export default compose(
    withHeader({ title: 'الدورات المتاحة' })
  )(Courses);