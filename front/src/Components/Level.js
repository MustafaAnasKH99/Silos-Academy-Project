import React, { PureComponent } from 'react';
import { Route, Router, Switch } from '../Utils/Routing';
import { View, Text, ActivityIndicator, StyleSheet, FlatList } from 'react-native';
import { Button, ListItem } from 'react-native-elements';
import withHeader from '../HOCs/withHeader';
import { withRouter } from '../Utils/Routing';
import { compose } from 'redux'
import { APP_URL} from '../constants';

class Level extends React.Component{
    render(){
        const { level } = this.props
        console.log('Look for level details:', this.props)
        return (
            <View>
                    <View>
                        <Text>{level.level_name}</Text>
                        <Text>{level.article}</Text>
                        <Text>{level.test}</Text>
                        <Text>{level.level_index}</Text>
                        <Text>{level.expected_answer}</Text>
                    </View> 
            </View>
        )
    }
}

export default compose(
    withHeader({title: 'something'}),
    withRouter,
)(Level)