module.exports = function toReadable (number) {
  let res = ''; 
  let lengthNumber = number.toString().length;
  let unitNumber, 
  tenNumber, 
  hundredNumber;
  unitNumber = number % 10;
  tenNumber = ((number % 100) - unitNumber) / 10;
  hundredNumber = ((number % 1000) - unitNumber - (tenNumber*10)) / 100;
  if (unitNumber === 0 && tenNumber === 0 && hundredNumber === 0){
    return 'zero';
  }
  if (hundredNumber === 1) {
    res = 'one hundred';
  } else if (hundredNumber === 2) {
    res = 'two hundred';
  } else if (hundredNumber === 3) {
    res = 'three hundred';
  } else if (hundredNumber === 4) {
    res = 'four hundred';
  } else if (hundredNumber === 5) {
    res = 'five hundred';
  } else if (hundredNumber === 6) {
    res = 'six hundred';
  } else if (hundredNumber === 7) {
    res = 'seven hundred';
  } else if (hundredNumber === 8) {
    res = 'eight hundred';
  } else if (hundredNumber === 9) {
    res = 'nine hundred';
  }
  if ((res != '') && (tenNumber != 0)) {
    res += ' ';
  }
  if (tenNumber === 1) {
    if (unitNumber === 0) {
      res += 'ten'
    } else if (unitNumber === 1) {
      res += 'eleven'
    } else if (unitNumber === 2) {
      res += 'twelve'
    } else if (unitNumber === 3) {
      res += 'thirteen'
    } else if (unitNumber === 4) {
      res += 'fourteen'
    } else if (unitNumber === 5) {
      res += 'fifteen'
    } else if (unitNumber === 6) {
      res += 'sixteen'
    } else if (unitNumber === 7) {
      res += 'seventeen'
    } else if (unitNumber === 8) {
      res += 'eighteen'
    } else if (unitNumber === 9) {
      res += 'nineteen'
    }
    return res;
  } else if (tenNumber === 2) {
    res += 'twenty'
  } else if (tenNumber === 3) {
    res += 'thirty'
  } else if (tenNumber === 4) {
    res += 'forty'
  } else if (tenNumber === 5) {
    res += 'fifty'
  } else if (tenNumber === 6) {
    res += 'sixty'
  } else if (tenNumber === 7) {
    res += 'seventy'
  } else if (tenNumber === 8) {
    res += 'eighty'
  } else if (tenNumber === 9) {
    res += 'ninety'
  } 
  if ((res != '') && (unitNumber != 0)) {
    res += ' ';
  }
  if (unitNumber === 1) {
    res += 'one';
  } else if (unitNumber === 2) {
    res += 'two';
  } else if (unitNumber === 3) {
    res += 'three';
  } else if (unitNumber === 4) {
    res += 'four';
  } else if (unitNumber === 5) {
    res += 'five';
  } else if (unitNumber === 6) {
    res += 'six';
  } else if (unitNumber === 7) {
    res += 'seven';
  } else if (unitNumber === 8) {
    res += 'eight';
  } else if (unitNumber === 9) {
  res += 'nine';
  } 
  return res;
}
