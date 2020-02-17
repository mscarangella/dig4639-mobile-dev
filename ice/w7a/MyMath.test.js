//bro im so sorry

import { Sum } from './MyMath.js'
import { AddList } from './MyMath.js'

describe("Sum", () => {
  test('adds 1 + 2 to equal 3', () => {
   expect(Sum(1, 2)).toBe(3)
  })

  test('Whether undefined is returned on invalid type', () => {
    expect(Sum(-10, "Twenty")).toBeUndefined()
   })

  it('adds 10 + 20 to equal 30', () =>{
   expect(Sum(10, 20)).toBe(30)
  })
})

  describe("AddList", () => {
      it('adds 1 + 2 + 3 + 4 + 5 to equal 15', () =>{
    expect(Sum(1, 2, 3, 4, 5)).toBe(15)
  })
  it('Whether undefined is returned on invalid type', () =>{
    expect(Sum(1, "panda", 3, "monkey", 5)).toBeUndefined()
  })
  })


// ICE 

// Examples for Null
test('null', () => {
  const n = null
  expect(n).toBeNull()
  expect(n).toBeDefined()
  expect(n).not.toBeUndefined()
  expect(n).not.toBeTruthy()
  expect(n).toBeFalsy()
})

// Examples for zero
test('zero', () => {
  const z = 0
  expect(z).not.toBeNull()
  expect(z).toBeDefined()
  expect(z).not.toBeUndefined()
  expect(z).not.toBeTruthy()
  expect(z).toBeFalsy()
})
