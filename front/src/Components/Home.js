import React, { PureComponent } from 'react';
import { View, Alert, StyleSheet, ImageBackground } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { Formik } from 'formik';
import BackGImage from '../images/Silos.png'

import styles from './Shared.style';
import { withRouter, Link, Router, Switch, Route } from '../Utils/Routing';

import Courses from './Courses'

// const showAlert = () =>{
//   Alert.alert(
//     'Take me to courses'
//   )
// }

class Home extends PureComponent {
  onPressButton = ({ owner, repo }) => {
    this.props.history.push({
      pathname: '/courses',
      state: { owner, repo }
    });
  }

  render() {
    const { input, button } = styles;
    return (
      <Formik initialValues={{ owner: '', repo: '' }} onSubmit={this.onPressButton}>
        {/* {({ handleChange, handleSubmit, values }) => ( */}
          {/* <View style={styling.container}> */}
          <ImageBackground source={BackGImage} style={{height: '600px', width: '300px'}}>
            <Button
                title='Courses'
                icon={{
                  color: 'white',
                  name: 'paper-plane',
                  size: 15,
                  type: 'font-awesome'
                }}
                // onPress={() => showAlert()}
                onPress = {this.onPressButton}
            />
            {/* <Input
              containerStyle={input.containerStyle}
              inputStyle={input.inputStyle}
              label='Owner'
              onChangeText={handleChange('owner')}
              placeholder="Github's owner"
              value={values.owner}
            />
            <Input
              containerStyle={input.containerStyle}
              inputStyle={input.inputStyle}
              label='Repo'
              onChangeText={handleChange('repo')}
              placeholder="Github's repository name"
              value={values.repo}
            />
            <Button
              title='SUBMIT'
              icon={{
                color: 'white',
                name: 'paper-plane',
                size: 15,
                type: 'font-awesome'
              }}
              buttonStyle={button.containerStyle}
              onPress={handleSubmit}
            /> */}
            </ImageBackground>
          {/* </View> */}
      </Formik>
    );
  }
}

const styling = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 200,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  },
  countContainer: {
    alignItems: 'center',
    padding: 50
  },
  textLink: {
    color: '#FF00FF'
  }
})

export default withRouter(Home);
