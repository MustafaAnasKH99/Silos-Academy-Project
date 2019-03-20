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
        this.nextLevel = this.nextLevel.bind(this)
        this.state={
            answer: '',
            status: '',
            color: ''
        }
    }
    
    handleButton(){
        console.log(this.state.answer)
        Alert.alert(
            this.state.answer
        )
        try{
            let answer = eval(this.state.answer + this.props.level.test)
            console.log(answer)
            if(answer == this.props.level.expected_answer){
                alert('yaaaaay')
                this.setState({
                    status: 'أحسنت!',
                    color:'green'
                })
            } else {
                
            }
        } catch(e){
            // this.setState({err: e.error})
            // alert('nope')
            (this.setState({
                status: 'حاول مجدداً',
                color: 'red'
            }))
        }
    }

    nextLevel(){
        if(this.state.status === 'أحسنت!'){
            alert('moving to next level')
        } else (
            alert('keep trying!')
        )
    }

    render(){
        console.log(this.state.answer)
        const { level } = this.props
        console.log('Look for level details:', this.props)
        if(level.test === null){
            return (
                <View style={styling.container}>
                    <Text>{level.level_name}</Text>
                    <Text>{level.article}</Text>
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
                    </View>
                    <View style={styling.container}>
                        <View>
                            <Text>{level.level_name}</Text>
                            <Text>{level.article}</Text>
                        </View>
                        <View>
                            <Text style={{paddingTop: 20}}>{level.test_body}</Text>
                        </View>
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
                            containerStyle={{paddingTop: 20}}
                        />
                        <View style={{flex: 2, flexDirection: 'row'}}>
                            <Button 
                                title='قدم اجابتك'
                                icon={{
                                    color: 'white',
                                    name:'paper-plane',
                                    size: 15,
                                    type: 'font-awesome'
                                }}
                                onPress={this.handleButton}
                                buttonStyle={{backgroundColor: '#fdc300'}}
                                containerStyle={{ padding: 5 }}
                            />

                            <Button
                                title={`${this.state.status}`}
                                icon={{
                                    color: 'white',
                                    name:'paper-plane',
                                    size: 15,
                                    type: 'font-awesome'
                                }}
                                onPress={this.nextLevel}
                                buttonStyle={{backgroundColor: this.state.color}}
                                containerStyle={{ padding: 5 }}
                            />
                        </View>
                    </View> 
                </View>
            )
        }
    }
}

const styling = StyleSheet.create({
    container: {

        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        paddingBottom: 350,
        borderWidth: 5,
        borderColor: '#d6d7da',
        margin: 0,
        backgroundColor: '#dadada',
    },
    text:{
        padding: 5,
        backgroundColor: '#dadada',
    },

    alertContainer:{
        backgroundColor: '#66b8d9',
        color: '#fff',
        borderWidth: 5,
        borderRadius: 20,
        borderColor: '#fff',
        padding: 5,
        flex: 2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    mainBox: {
        margin: 0,
        borderWidth: 0,
        backgroundColor: '#dadada'
    }
})

export default compose(
    withHeader({title: 'something'}),
    withRouter,
)(Level)