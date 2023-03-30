// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.
//PSEUDOCODE : I created a function called codeString which takes a string ("")
// as its parameters and return the string with .replace. Each letter is being
//replaced with a number "a" for 4, "e for 3", "i", for 1, and "o" for 0.
// using the .replace method syntax : the letter in the beginning of the paranthese
// is whats being replaced and in the next forward slash is either a i to ignore
//the  flag syntax and gi for global ignore for all syntax.
// then at the end of the paranthese is the number being replacing the letter.
// for the letter "e" a capital E is included and javascript needs specifications
//to include that capital letter to be replaced.
//output: should be the string with the letters replaced with numbers.

// a) Create a test with expect statements using the variables provided.

// const codeString = (string) => {
//     return string.replace(/a/gi, 4).replace(/[eE]/gi, 3).replace(/i/gi, 1).replace(/o/gi, 0)
    
// }

// console.log(codeString)

// const secretCodeWord1 = "Lackadaisical"
// const secretCodeWord2 = "Gobbledygook"
// const secretCodeWord3 = "Eccentric"
// Expected output: "L4ck4d41s1c4l"
 // Expected output: "G0bbl3dyg00k" 
 // Expected output: "3cc3ntr1c"

// describe("codeString", () => {
//     it("will return coded messages by converting a to 4, e to 3, i to 1, and o to 0. ", ()=> {
//     expect(codeString(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
//     expect(codeString(secretCodeWord2)).toEqual("G0bbl3dyg00k")
//     expect(codeString(secretCodeWord3)).toEqual("3cc3ntr1c")
//     })
// })

// b) Create the function that makes the test pass.

// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

//PSEUDOCODE :I will create a function called arrayLetterFilter that can take in a array and letter aka: string=  (array, string) and return all the words containing that letter.
// I will create a new const called filterWord which will equal to string.includes(array) which will return all of the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.
// const arrayLetterFilter = (array, string) => {
//     let filterWord = array.includes(string)
//         console.log(arrayLetterFilter(fruitArray, letterA))
//         return filterWord
// }
    // const letterFilter = (array, letter) => {
    //     const newArray = array.filter(value => {
    //         return value.toLowerCase().includes(letter)})
    //     return newArray
    // }

// const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]

// const letterA = "a"
// Expected output: ["Mango", "Apricot", "Peach"]
// const letterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]

// b) Create the function that makes the test pass.

// describe("letterFilter", () => {
//     it("returns an array of all the words containing that particular letter", ()=> {
//     expect(letterFilter(fruitArray, letterA)).toEqual(["Mango", "Apricot", "Peach"])
//     expect(letterFilter(fruitArray, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
//     })
// })

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.
//PSEUDOCODE:create a new function called cardArray that takes in an argument an array
//output: true or false boolean value
// the function cardArray will take an array and use .sort to put values from lowest to highest and compare each card by index of the new array evaluating each set of arrays if there are three of a kind and a pair to make it a full house. everything "else" will result in not a full house.

const cardArray = (array) => {
    let newArray = array.sort((a,b) => a-b)
        if (newArray[0] === newArray[1] && newArray[1] === newArray[2] && newArray[3] === newArray[4]) {
        return true;
        } else if (newArray[0] === newArray[1] && newArray[2] === newArray[3] && newArray[2] === newArray[4]){
        return true;
        }
        else {
            return false; }
    }
    
console.log(cardArray())

const hand1 = [5, 5, 5, 3, 3]
// Expected output: true
const hand2 = [5, 5, 3, 3, 4]
// Expected output: false
const hand3 = [5, 5, 5, 5, 4]
// Expected output: false
const hand4 = [7, 2, 7, 2, 7]
// Expected output: true

describe("cardArray", () => {
    it("determines whether or not the array is a 'full house'", () => {
    expect(cardArray(hand1)).toEqual(true)
    expect(cardArray(hand2)).toEqual(false)
    expect(cardArray(hand3)).toEqual(false)
    expect(cardArray(hand4)).toEqual(true)  
      })
})

// b) Create the function that makes the test pass.
