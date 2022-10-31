const str = `
010-7749-7240
thesecon@gmail.com
https://www.omdbapi.com/apikey=7035c60c&s=frozen
The quick brwosn fox jumps over the lazy dog.
aaabbccdddd
`

// console.log(
//   str.match(/.{1,}(?=@)/g)
// )
console.log(
  str.match(/(?<=@).{1,}/g)
)