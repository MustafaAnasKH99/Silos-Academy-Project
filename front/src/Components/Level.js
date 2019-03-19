import React, { PureComponent } from 'react';
import { Route, Router, Switch } from '../Utils/Routing';
import { View, Text, ActivityIndicator, StyleSheet, FlatList, Alert } from 'react-native';
import { Button, ListItem, Input, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import withHeader from '../HOCs/withHeader';
import { withRouter } from '../Utils/Routing';
import { compose } from 'redux'
import { APP_URL} from '../constants';

class Level extends React.Component{
    constructor(props){
        super(props)
        this.handleButton = this.handleButton.bind(this)
        this.state={
            answer: ''
        }
    }
    
    handleButton(){
        console.log(this.state.answer)
        Alert.alert(
            this.state.answer
        )
    }

    render(){
        console.log(this.state.answer)
        const { level } = this.props
        console.log('Look for level details:', this.props)
        if(level.test === null){
            return (
                <View>
                    <View style={styling.container}>
                        <Text>{level.level_name}</Text>
                        <Text>{level.article}</Text>
                    </View> 
                </View>
            )
        } else {
            return (
                <View style={styling.mainBox}>
                    <View style={styling.alertContainer}>
                            <Icon
                                name='warning'
                                size={24}
                                color='black'
                            />
                            <Text>هناك اختبار أدنى هذا المستوى. تأكد ان ترفع مستوى تركيزك خلال القراءة لتتمكن من الاجاببة وتخطي المستوى  </Text>
                            {/* <Text>Read carefully so you answer the question to pass this level     </Text> */}
                    </View>
                    <View style={styling.container}>
                        <Text>{level.level_name}</Text>
                        <Text>{level.article}</Text>
                        <Input
                            placeholder='إجابتك هنا'
                            leftIcon={
                                <Icon
                                    name='code'
                                    size={24}
                                    color='black'
                                />
                            }
                            onChange={(e) => this.setState({answer: e.target.value})}
                        />
                        <Button 
                            title='قدم اجابتك'
                            icon={{
                                color: 'white',
                                name:'paper-plane',
                                size: 15,
                                type: 'font-awesome'
                            }}
                            onPress={this.handleButton}
                        />
                    </View> 
                </View>
            )
        }
    }
}

const styling = StyleSheet.create({
    container: {
        // flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        borderWidth: 5,
        borderColor: '#d6d7da',
        margin: 5,
    },
    text:{
        padding: 5,
    },

    alertContainer:{
        backgroundColor: 'rgba(255, 82, 82, 0.8)',
        color: '#fff',
        borderWidth: 5,
        borderRadius: 20,
        borderColor: '#fff',
        padding: 5,
        flex: 2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default compose(
    withHeader({title: 'something'}),
    withRouter,
)(Level)