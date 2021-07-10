// Program a function sumAverage(arr) where arr is an array containing arrays full of numbers, for example:
const sumAverage = (arr) => {
  let result = arr.map(a=>a.reduce((a,b)=>a+b)/a.length).reduce((a,b)=>a+b)
  return Math.floor(result);
}
