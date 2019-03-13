import React from 'react';
import { View, Text } from 'react-native';
import { Input, Button, ListItem, FlatList } from 'react-native-elements';
import styles from './Shared.style';
// import fetch from 'fetch-hoc';
import { withRouter } from '../Utils/Routing';
import withHeader from '../HOCs/withHeader';

export default class Users extends React.PureComponent{
    state = { 
        users_list:[],
        error_message: ''
    }

    // getUsers(){
    //     try{
    //       fetch('//localhost:8080/users')
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
        //  this.getUsers()
        // fetch('//localhost:8080/users')
        fetch('//localhost:8080/users')
        .then( response => response.json())
        .then( text =>{
            this.setState({users_list: text.result})
        })
      }

    render(){
        const { users_list } = this.state
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
                        name:'arrow-left',
                        size: 15,
                        type: 'font-awesome',
                    }}
                    raised = 'true'   
                />
            </View>
        )
    }
}

// export default compose(
//     withHeader({ title: 'Users' }),
//     fetch('//localhost:8080/users')
//   )(Users);