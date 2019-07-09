import React, { Component } from 'react';
import { Alert, Text, View } from 'react-native';
import Styles from './styles';
import * as dateMethods from '../utils/dateMethods';
import * as storageMethods from '../utils/storageMethods';

export class Home extends Component {
  constructor(props) {
    super();
    this.state = {
      budget: undefined,
    }
  }

  componentWillMount() {
    this.setState({
      month: dateMethods.getMonth,
      year: dateMethods.getYear,
    });
    this._updateBudget();
  }

  _renderEnterBudgetComponent() {
    this.props.navigator.push({
      component: EnterBudget,
      navigationBarHidden: true,
      passProps: {
        monthString: dateMethods.getMonthString(this.state.month),
        saveAndUpdateBudget: (budget) =>
          this._saveAndUpdateBudget(budget)
      }
    });
  }

  async _saveAndUpdateBudget(budget) {
    await storageMethods.saveMonthlyBudget(this.state.month, this.state.year, budget)

    this._updateBudget();
  }

  async _updateBudget() {
    let response = await storageMethods.checkCurrentMonthBudget();
    if (response !== false) {
      this.setState({
        budget = response;
      })
      return;
    }
    this._renderEnterBudgetComponent();
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
