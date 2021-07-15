// Given a string, return a new string that has transformed based on the input:
//
// Change case of every character, ie. lower case to upper case, upper case to lower case.
// Reverse the order of words from the input.
// Note: You will have to handle multiple spaces, and leading/trailing spaces.
//
// For example:
//
// "Example Input" ==> "iNPUT eXAMPLE"
// You may assume the input only contain English alphabet and spaces.
//kyu 6
const stringTransformer = (str) => str.split(' ').reverse().map(a=>a.split('').map(b=>b==b.toUpperCase()?b.toLowerCase():b.toUpperCase()).join('')).join(' ')
