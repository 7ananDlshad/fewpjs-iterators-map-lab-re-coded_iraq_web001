const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = (str) => {
  str = str.split(" ")
  str.map(ele => {
    ele = ele[0].toUpperCase() + ele.substr(1)
  })
  return str.join(" ")
}
console.log(titleCased(tutorials))

