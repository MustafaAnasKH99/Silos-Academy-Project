import React, { PureComponent } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from '../Components/Shared.style';

const containerStyle = {
  alignItems: 'center',
  height: 50,
  justifyContent: 'center',
  paddingHorizontal: 0,
  paddingTop: 0,
  width: '100%'
};

const centerContainerStyle = { paddingRight: 20 };

const buttonStyle = {
  alignItems: 'center',
  height: 48,
  justifyContent: 'center',
  paddingRight: 5,
  width: 40
};

const textStyle = { color: '#fff' };

const withHeader = ({ title = '' }) => (WrappedComponent) => {
  class HOC extends PureComponent {
    goBack = () => this.props.history.goBack();

    goHome = () => this.props.history.replace('/');

    horizontalComponent = (name, size, onPress) => (
      <TouchableOpacity onPress={onPress} style={buttonStyle}>
        <Icon name={name} size={size} color='#fff' />
      </TouchableOpacity>
    );
  
    centerComponent = (title) => ({
      text: title.toUpperCase(),
      style: textStyle
    });

    render() {
      const _title = (this.props.level && this.props.level.level_name) || (this.props.course && this.props.course.course_name) || title
      return (
        <View style={styles.container}>
          <Header
            containerStyle={containerStyle}
            centerContainerStyle={centerContainerStyle}
            leftComponent={this.horizontalComponent('chevron-left', 20, this.goBack)}
            centerComponent={this.centerComponent(_title)}
            rightComponent={this.horizontalComponent('home', 25, this.goHome)}
          />
          <WrappedComponent {...this.props}/>
        </View>
      );
    }
  }

  return HOC;
}

export default withHeader;