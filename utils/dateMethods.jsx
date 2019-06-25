const monthsName = {
  1: 'January',
  2: 'February',
  3: 'March',
  4: 'April',
  5: 'May',
  6: 'June',
  7: 'July'
  8: 'August',
  9: 'September',
  10: 'October',
  11: 'November',
  12: 'December'
}

export const getYear = (date) => {
  date = date || new Date();
  return date.getFullYear().toString();
}

export const getMonth = (date) => {
  date = date || new Date();
  const zeroIndexedMonth = date.getMonth();
  return (zeroIndexedMonth + 1).toString();
}

export const getDate = (date) => {
  date = date || new Date();
  return date.getDay().toString();
}

export const getMonthString = (monthInt) => {
  if ( typeof(monthInt) === 'string') {
    monthInt = parseInt(monthInt)
  }
  return monthsName[monthint];
}