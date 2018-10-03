import React, { Component } from 'react';

import Icon from 'react-native-vector-icons/FontAwesome';

import { TouchableOpacity } from 'react-native';

import styles from './styles';

export default class HeaderRight extends Component{
  signOut = () => {

  }
  render() {
    return (
      <TouchableOpacity onPress={this.signOut}>
      <Icon name="exchange" size={16} style={styles.icon}/>
      </TouchableOpacity>
    );
  }
}
