import React, { PureComponent } from 'react';
import { View, Alert } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { Formik } from 'formik';

import styles from './Shared.style';
import { withRouter } from '../Utils/Routing';

const showAlert = () =>{
  Alert.alert(
    'Take me to courses'
  )
}

class Home extends PureComponent {
  onPressButton = ({ owner, repo }) => {
    this.props.history.push({
      pathname: '/commit',
      state: { owner, repo }
    });
  }

  render() {   
    const { input, button } = styles;
    return (
      <Formik initialValues={{ owner: '', repo: '' }} onSubmit={this.onPressButton}>
        {({ handleChange, handleSubmit, values }) => (
          <View style={styles.container}>
          <Button
              title='Courses'
              icon={{
                color: 'white',
                name: 'paper-plane',
                size: 15,
                type: 'font-awesome'
              }}
              onPress={() => showAlert()}
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
          </View>
        )}
      </Formik>
    );
  }
}

export default withRouter(Home);
