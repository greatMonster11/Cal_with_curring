// from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// gnerate a random value
export const randomInit = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)

  return Math.floor(Math.random() * (max - min)) + min
  //The maximum is exclusive and the minimum is inclusive
}

// pick a random value in array

export const pickArrayRandom = (array) => {
  return array[randomInit(0, array.length - 1)]
}