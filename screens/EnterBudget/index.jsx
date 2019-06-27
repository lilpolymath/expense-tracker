import React, { Component } from 'react';
import { Text, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types' 
import * as dateMethods from '../../utils/dateMethods';
import Styles from './styles';

export class index extends Component {
  constructor (props) = {
  super();
  this.state = {
    budget: undefined;
    }
  }

  PropTypes = {
    monthString = PropTypes.string.isRequired;
    saveAndUpdateBudget = PropTypes.func.isRequired;
  }

  saveGoalValue(budget) {
    this.setState: {
      budget,
    }
  }

  _saveAndUpdateBudget() {
    this.props.this._saveAndUpdateBudget(budget);
    this.props.navigator.pop();
  }

  render() {
    let month = dateMethods.getMonthString(dateMethods.getMonth())

    return (
      <View style={Styles.container}>
        <Text style={Styles.header}> Enter Your {this.props.monthString} Budget </Text>
        <Text styles={Styles.monthGoal}> What is your Spending Goal? </Text>
        <TextInput
          style={Styles.budgetInput}
          onChangeText={(budget) => this.saveGoalValue(budget)}
          keyboardType='numeric'
          placeholder='0'
          value={this.state.budget}
          placeholderTextColor='rgba(255,255,255, 0.4)'
        />
        <TouchableOpacity
          disabled={!this.state.budget}
          onPress={this._saveBudget}
          style={Styles.saveButton}>
          <Text>Save Budget</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default index;