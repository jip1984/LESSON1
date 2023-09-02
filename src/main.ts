// //string
// let myName: string = 'Jonny'
// console.log(myName)

// let meaningOfLife: number
// let isLoading: boolean

// //any type
// let album: any = '5150'


// meaningOfLife = 42
// isLoading = true
// album = 'Van Halen'

// //function
// const sum = (a: number, b: number) => {
//     return a + b
// }

// //union type (can use multiple data type)
// let postId: string | number
// let isActive: number | boolean | string

// //rgeEx
// let re: RegExp = /\w+/g


//Arrays

// hover over name of array and typescript can infer data types
// let stringArr = ['one', 'hey', 'Dave'];
// let guitars = ['Strat', 'Les Paul', 5150]
// let mixedData = ['EVH', 1984, true]

// stringArr[0] = 'Jon'
// stringArr.push('hey')
// console.log(stringArr)

// guitars[0] = 1984
// guitars.unshift('EVH')
// console.log(guitars)

// let test = []

// let bands: string[] = []
// bands.push('Van Halen')
// console.log(bands)

//Tuple more strict than an array specific position and length
let myTuple: [string, number, boolean] = ['one', 2, true]

let mixed = ['jon' , 2, true]

//objects
let myObject: object

const exampleObj = {
    prop1: 'Dave',
    prop2: true,
}

exampleObj.prop1 = 'Jonny'

// console.log(exampleObj)

type Guitarist = {
    name: string,
    active?: boolean,
    albums: (string | number)[]
}

// can use interface same as a type
// interface Guitarist = {
//     name: string,
//     active?: boolean,
//     albums: (string | number)[]
// }

let evh: Guitarist = {
    name: 'Eddie',
    active: true,
    albums: ['Van Halen', 5150]
}

let jp: Guitarist = {
    name: 'Jimmy',
    albums: ['I', 'II', 5350]
}

// console.log(evh)
// console.log(jp)

const greetGuitarist = (guitarist: Guitarist) => {
    console.log('Hello '+ guitarist.name + '!')
}

greetGuitarist(evh)

//Enums
enum Grade {
    U = 1,
    D,
    C,
    B,
    A
}

console.log(Grade.U)
