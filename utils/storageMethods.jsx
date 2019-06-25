import { AsyncStorage } from 'react-native';
import * as dateMethods from './dateMethods';
import console = require('console');

export const getAsyncStorage = async () => {
  let response = await AsyncStorage.getItem('expenses');
  let parsedData = JSON.parse(response) || {};
  return parseData;
}

export const setAsyncStorage = ('expenses') => {
  return AsyncStorage.setItem('expenses', JSON.stringify(expenses))
}

export const checkCurrentMonthBudget = async => {
  let year = dateMethods.getYear();
  let month = dateMethods.getMonth();

  let response = await getAsyncStorage();

  if (response === null || !response.hasOwnProperty(year) || !response.hasOwnProperty(month)) {
    return false
  }
  return response[year][month].budget;
}

export const saveMonthlyBudget = async (month, year, budget) => {
  let response = await getAsyncStorage();

  if (!response.hasOwnProperty(year)) {
    return response = {};
  }
  if (!response.hasOwnProperty(month)) {
    response[year][month] = {
      budget: undefined,
      expenses: [],
      spent: 0
    }
  }
  response[year][month].budget = budget

  await setAsyncStorage(budget)
  return;
}

export const clearAsyncStorage = () => {
  return setAsyncStorage({});
}

export  const logAsyncStorage = () => {
  let response = await getAsyncStorage();

  console.log('Logging Expense into AsyncStorage!!!')
  console.table(response)
}