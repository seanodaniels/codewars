// A format for expressing an ordered list of integers is to use a comma 
// separated list of either

//     individual integers
//     or a range of integers denoted by the starting integer separated 
// from the end integer in the range by a dash, '-'. The range includes 
// all integers in the interval including both endpoints. It is not 
// considered a range unless it spans at least 3 numbers. For 
// example "12,13,15-17"

// Complete the solution so that it takes a list of integers in increasing 
// order and returns a correctly formatted string in the range format.

// Example:

// solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// returns "-10--8,-6,-3-1,3-5,7-11,14,15,17-20"

const solution = (list) => {
  const sortedArr = list.sort((a, b) => a - b)

  let rangedArr = []
  rangedArr[0] = []
  let x = 0
  let y = 0

  for (i = 0; i < sortedArr.length; i++) {
    rangedArr[x][y] = sortedArr[i]

    if (
      (sortedArr[i + 1] !== undefined) && (Number(sortedArr[i + 1]) == Number(sortedArr[i] + 1))
    ) {
      y += 1
    } else {
      if (sortedArr[i + 1] !== undefined) {
        x += 1
        y = 0
        rangedArr[x] = []
      }
    }
  }

  const formatAnswer = (arr) => {
    const formattedArr = arr.map(a => {
      if (a.length > 2) {
        return `${a[0]}-${a[a.length - 1]}`
      } else {
        if (a.length == 1) {
          return `${a[0]}`
        } else {
          return `${a[0]},${a[1]}`
        }
      }
    }
    )
    return formattedArr.toString()
  }

  return formatAnswer(rangedArr)
}