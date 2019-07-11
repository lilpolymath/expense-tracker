import React, { Component } from 'react';
import { Alert, Text, View } from 'react-native';
import Styles from './styles';
import * as storageMethods from '../utils/storageMethods';

export class Home extends Component {
  constructor(props) = {
    super();
    this.state = {
      budget: undefined,
    }
  }
  async componentWillMount() {
    let response = await storageMethods.checkCurrentMonthBudget;

    if(response !== false) {
      this.setState({
        budget: response
      });
      return
    }
    Alert.alert('Error', 'You have not set a budget for this month yet.')
  }
  
  render() {
    return (
      <View style={Styles.container}>
        <Text> Your Budget is {this.state.budget || 'not set.'} </Text>
      </View>
    )
  }
}

export default Home
