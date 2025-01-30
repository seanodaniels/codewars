// Create a function taking a positive integer between 1 and 3999 (both 
// included) as its parameter and returning a string containing the 
// Roman Numeral representation of that integer.

// Modern Roman numerals are written by expressing each digit 
// separately starting with the leftmost digit and skipping any digit 
// with a value of zero. There cannot be more than 3 identical symbols 
// in a row.

// In Roman numerals:

// 1990 is rendered: 1000=M + 900=CM + 90=XC; resulting in MCMXC.
// 2008 is written as 2000=MM, 8=VIII; or MMVIII.
// 1666 uses each Roman symbol in descending order: MDCLXVI.
// Example:

//    1 -->       "I"
// 1000 -->       "M"
// 1666 --> "MDCLXVI"
// Help:

// Symbol    Value
// I          1
// V          5
// X          10
// L          50
// C          100
// D          500
// M          1,000

function solution(number) {
  // convert the number to a roman numeral
  let rnArr = []
  let rnKey = [[4000, ''], [1000, 'M'], [500, 'D'], [100, 'C'], [50, 'L'], [10, 'X'], [5, 'V'], [1, 'I'], [0, '']]
  let num = number

  if (num > 3999) return null

  const myRound = (myNum) => {
    const numString = myNum.toString()
    let newString = ''
    for (let i = 0; i < numString.length; i++) {
      i === 0 ? newString = newString.concat(numString[i].toString()) : newString = newString.concat('0')
    }
    const returnNumber = parseInt(newString)
    return returnNumber
  }

  const testForDouble = (testNum, upperBound) => {
    let finalNum = false
    let testNumRounded = myRound(testNum)
    let testArr = []
    for (let i = 1; i < rnKey.length - 1; i++) {
      testArr = rnKey[i]
      if (parseInt(rnKey[i][0]) < parseInt(upperBound[0]) && (parseInt(upperBound[0]) - parseInt(rnKey[i][0]) === testNumRounded)) {
        finalNum = `${rnKey[i][1]}${upperBound[1]}`

        break
      }
    }
    if (parseInt(upperBound[0]) === 4000) {
      testNumRounded = testArr[0]
    }
    return [finalNum, testNumRounded]
  }

  while (num > 0) {
    for (let i = 1; i < rnKey.length - 1; i++) { // we run the current number though the key array
      if (num < parseInt(rnKey[i - 1][0]) && num >= parseInt(rnKey[i][0])) { // if that number is a hit
        let doubleVal = [false, false]

        parseInt(myRound(num)) === parseInt(rnKey[i][0])
          ? doubleVal = [false, false]
          : doubleVal = testForDouble(num, rnKey[i - 1])

        if (doubleVal[0] !== false) { // test for double roman numeral
          rnArr.push(doubleVal[0])
          num -= parseInt(doubleVal[1])
        } else {
          for (let j = 0; j < 3; j++) { // loop 3 times max
            if (num >= parseInt(rnKey[i][0])) { // if the number is greater than or = the lower boundry
              rnArr.push(rnKey[i][1]) // push it
              num -= rnKey[i][0] // and decrement num by the value
            }
          }
        }
      }
    }
  }

  return rnArr.join('')
}