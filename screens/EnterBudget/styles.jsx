import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    height: Navigator.NavigatorBar.Styles.General.TotalNavHeight,
  },
  header: {
    fontSize: 26,
    margin: 10,
    textAlign: 'center',
    color: '#242E36',
  },
  saveButton: {
    margin: 30,
    textAlign: 'center',
    backgroundColor: '#02317d',
  },
  budgetInput: {
    height: 50,
    padding: 7,
    margin: 15,
    textAlign: 'center',
    borderColor: 'black',
    borderWidth: 1
  }
  monthGoal: {
    fontSize: 26,
    margin: 10,
    textAlign: 'center',
    color: '#242E36',
  },
})
export default Styles;