// The rgb function is incomplete. Complete it so that passing in RGB decimal 
// values will result in a hexadecimal representation being returned. Valid 
// decimal values for RGB are 0 - 255. Any values that fall out of that range 
// must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 
// will not work here.

function rgb(r, g, b) {
  const boundValue = (v) => {
    if (v < 0) return 0
    if (v > 255) return 255
    return v
  }
  const hexIt = (v) => {
    const answer = boundValue(v).toString(16).toLocaleString('en-US', {
      minimumIntegerDigits: 2,
      useGrouping: false
    })
    return answer.length < 2 ? ("0" + answer).toUpperCase() : answer.toUpperCase()
  }
  return hexIt(r) + hexIt(g) + hexIt(b)
}