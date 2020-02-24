const myArray = [2, 5, 8, 20, 18]
console.log(myArray)

// traditional For loop
let sum = 0
for (let index = 0; index < myArray.length; index++) {
  sum = sum + myArray[index]
}
console.log(sum)

// other For loop example
sum = 0
for (const item of myArray) {
  sum = sum + item
}
console.log(sum)

// Divide each element by two
console.log('before', myArray)
for (let index = 0; index < myArray.length; index++) {
  myArray[index] = myArray[index] / 2
}
console.log('after', myArray)

// store result in new array rather than old array
const newArray = []
console.log('before', myArray)
for (let index = 0; index < myArray.length; index++) {
  newArray.push(myArray[index] / 2)
}
console.log('after', newArray, 'original', myArray)

// map method of array
function addTwo (value, index, array) {
  return value + 2
}
const resultArray = myArray.map(addTwo)
console.log(resultArray)

// arrow method 1
const arrFun = (value) => value + 2
const resultArray2 = myArray.map(arrFun)
console.log(resultArray2)

// arrow method 2 (easier)
const resultArray3 = myArray.map((value) => value + 2)
console.log(resultArray3)

// string array map method
function printItems (arrayInput) {
  const htmlArray = arrayInput.map((value) => `<p>${value}</p>`)
  console.log(htmlArray)
  return htmlArray
}
printItems(myArray)

// sorting the numbers
function compareNumbers (a, b) {
  return a - b
}
printItems(myArray.sort(compareNumbers))

// arrow function version
printItems(myArray.sort((a, b) => a - b))

// ToDo complex data thing
const todoList = [
  { content: 'Task 1', priority: 2, completed: true },
  { content: 'Task 2', priority: 1, completed: true },
  { content: 'Task 3', priority: 3, completed: false }
]
console.log(todoList)

function printTodo (arrayInput) {
  const htmlArray = arrayInput.map((value) => `<p>${(value.completed) ? 'class = "done"' : ''}>
  ${value.priority}: ${value.content}
  </p>`)
  return htmlArray
}
console.log(printTodo(todoList).join('\n'))

// filter out shit
const filteredArray = []
for (const item of todoList) {
  if (!item.completed) {
    filteredArray.push(item)
  }
}
console.log(printTodo(filteredArray).join('\n'))

// uhhh eval item todoList.filter
function evalItem (item) {
  return item.completed
}
console.log(printTodo(todoList.filter(evalItem)).join('\n'))

// arrow method filter
console.log(printTodo(todoList.filter((item) => item.completed)))

// FILTER AND MAP ARE USED ALL THE TIME
