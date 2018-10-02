import React, { Component } from 'react';

import styles from './styles';
import { TouchableOpacity, Text } from 'react-native';

export default class HeaderRight extends Component{
  signOut = () => {

  }
  render() {
    return (
      <TouchableOpacity onPress={this.signOut}>
      <Text>Sair</Text>
      </TouchableOpacity>
    );
  }
}
