import React, { PureComponent } from 'react';
import { View } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { Formik } from 'formik';

import styles from './Shared.style';
import { withRouter } from '../Utils/Routing';
import {APP_URL} from "../constants";

export default class UserProfile extends React.PureComponent{
      componentDidMount(){
        // fetch(`${APP_URL}users`)
        // .then( response => response.json())
        // .then( text =>{
        //     this.setState({users_list: text.result})
        // })
      }

    render(){
        console.log(this.props)
        return(
            <View style={styles.container}>
                <Button 
                    title={"نظرة"}
                    type="outline"
                />
            </View>
        )
    }
}

// export default compose(
//     withHeader({ title: 'Users' }),
//     fetch(`${APP_URL}users`)
//   )(Users);