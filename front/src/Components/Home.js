import React, { PureComponent } from 'react';
import { View, Alert, StyleSheet, Linking } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { Formik } from 'formik';
import BackGImage from '../images/Silos.png'
import { compose } from 'redux'
import withHeader from '../HOCs/withHeader';

import styles from './Shared.style';
import { withRouter, Link, Router, Switch, Route } from '../Utils/Routing';

import Courses from './Courses'

class Home extends PureComponent {
  onPressButton = ({ owner, repo }) => {
    this.props.history.push({
      pathname: '/courses',
      state: { owner, repo }
    });
  }

  render() {
    return (
      // <Formik initialValues={{ owner: '', repo: '' }} onSubmit={this.onPressButton}>
          <View style={styling.containerMain}>
            <View style={styling.containerButton}>
              <Button
                style={styling.button1}
                title='تصفح الدورات المتاحة هنا'
                icon={{
                  color: 'white',
                  name: 'search',
                  size: 15,
                  type: 'font-awesome'
                }}
                onPress = {this.onPressButton}
                buttonStyle={{
                  backgroundColor: '#fdc300'
                }}
              />
            </View>

            <View style={styling.container}>
              <Button
                style={styling.button2}
                title='تابعنا على'
                icon={{
                  color: 'white',
                  name: 'instagram',
                  size: 15,
                  type: 'font-awesome'
                }}
                buttonStyle={{
                  backgroundColor: '#fdc300'
                }}
              />
              <Button
                style={styling.button2}
                title='تابعنا على'
                icon={{
                  color: 'white',
                  name: 'facebook',
                  size: 15,
                  type: 'font-awesome'
                }}
                buttonStyle={{
                  backgroundColor: '#fdc300',
                }}
                // titleStyle={{
                //   color: '#dadada'
                // }}
                onPress = {() => { Linking.openURL('https://www.facebook.com/SilosArAcademy')}}
              />
            </View>
          </View>
      /* </Formik> */
    );
  }
}

const styling = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
    paddingTop: 5,
    height: '100%',
    width: '100%',
  },

  containerButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
    padding: 2,
  },

  containerMain: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#3c3c3b',
    paddingBottom: 500,
    paddingTop: 150,
  },

  button1: {
    alignItems: 'center',
    padding: 2,
  },

  button2: {
    alignItems: 'center',
    padding: 2
  },
  
  textLink: {
    color: '#FF00FF'
  },
})

export default withRouter(Home);
