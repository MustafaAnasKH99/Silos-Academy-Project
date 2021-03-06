import React from 'react';
import { View, Text } from 'react-native';
import { Input, Button, ListItem, FlatList } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './Shared.style';
// import fetch from 'fetch-hoc';
import { withRouter } from '../Utils/Routing';
import withHeader from '../HOCs/withHeader';
import {APP_URL} from "../constants";

export default class Users extends React.PureComponent{
    state = {
        users_list:[],
        error_message: ''
    }

    // getUsers(){
    //     try{
    //       fetch(`${APP_URL}users`)
    //         .then(response => response.json())
    //         .then(answer => console.log(answer))
    //     //   .then(
    //     //   answer = response.json()
    //     //   console.log(answer)
    //     //     if (answer.success){
    //     //       const users_list = answer.result
    //     //       this.setState({users_list});
    //     //     } else {
    //     //       const error_message = answer.message
    //     //       this.setState({error_message})
    //     //     }
    //     //   )
    //     } catch(error) {
    //       this.setState({error_message: error})
    //     }
    // }

      componentDidMount(){
         // this.getUsers()
        // fetch(`${APP_URL}users`)
        fetch(`${APP_URL}users`)
        .then( response => response.json())
        .then( text =>{
            this.setState({users_list: text.result})
        })
      }

    render(){
        const { users_list } = this.state
        console.log(this.props)
        return(
            <View style={styles.container}>
            { users_list.map( user => (
                <View key={user.id}>
                    <Text>{user.email} - {user.username} - {user.first_name} - {user.last_name}</Text>
                </View>
            ))}
                <Button
                    title="SUBMIT"
                    type="outline"
                    // backgroundColor='#2ecc40'
                    icon={{
                        color: 'white',
                        name:'arrow-right',
                        size: 15,
                        type: 'font-awesome',
                    }}
                    raised = 'true'
                />

                
                <Input
                placeholder='BASIC INPUT'
                />

                <Input
                placeholder='INPUT WITH ICON'
                leftIcon={{ type: 'font-awesome', name: 'chevron-left' }}
                />

                <Input
                placeholder='INPUT WITH CUSTOM ICON'
                leftIcon={
                    <Icon
                    name='code'
                    size={24}
                    color='black'
                    />
                }
                />

                <Input
                placeholder='INPUT WITH SHAKING EFFECT'
                shake={true}
                />

                <Input
                placeholder='INPUT WITH ERROR MESSAGE'
                errorStyle={{ color: 'red' }}
                errorMessage='ENTER A VALID ERROR HERE'
                />

            </View>
        )
    }
}

// export default compose(
//     withHeader({ title: 'Users' }),
//     fetch(`${APP_URL}users`)
//   )(Users);