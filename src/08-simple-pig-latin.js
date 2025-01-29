// Move the first letter of each word to the end of it, then add "ay" to 
// the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str) {
  punctArray = ['!', '?', '.']

  const wordArray = str.split(' ')
  const splitPunct = wordArray.reduce((acc, curr) => {
    if (curr.length === 1 && punctArray.includes(curr)) {
      return acc.concat(curr)
    }
    if (curr.length > 1 && punctArray.includes(curr)) {
      return acc.concat(curr.substr(0, curr.length - 1)).concat(curr[curr.length - 1])
    }
    return acc.concat(curr)
  }, [])

  const pigged = splitPunct.reduce((acc, curr) => {
    const pigMe = (str) => {
      return str.substr(1, str.length) + str[0] + "ay"
    }
    if (punctArray.includes(curr)) {
      return acc.concat(curr)
    } else {
      return acc.concat(pigMe(curr))
    }
  }, [])

  return pigged.join(' ')
}