"use strict";
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
let myTuple = ['one', 2, true];
let mixed = ['jon', 2, true];
//objects
let myObject;
const exampleObj = {
    prop1: 'Dave',
    prop2: true,
};
exampleObj.prop1 = 'Jonny';
// can use interface same as a type
// interface Guitarist = {
//     name: string,
//     active?: boolean,
//     albums: (string | number)[]
// }
let evh = {
    name: 'Eddie',
    active: true,
    albums: ['Van Halen', 5150]
};
let jp = {
    name: 'Jimmy',
    albums: ['I', 'II', 5350]
};
// console.log(evh)
// console.log(jp)
const greetGuitarist = (guitarist) => {
    console.log('Hello ' + guitarist.name + '!');
};
greetGuitarist(evh);
//Enums
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
