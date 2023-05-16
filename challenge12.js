// Write function which takes a string and make an acronym of it.

// Rule of making acronym in this kata:

// split string to words by space char
// take every first letter from word in given string
// uppercase it
// join them toghether
// Eg:

// Code wars -> C, w -> C W -> CW

function toAcronym(inp){
    // ...
    let acronym = [];
    let word = inp.split(' ');

    for (i=0; i<word.length; i++) {
       acronym.push(word[i].charAt(0).toUpperCase());
    }

    return acronym.join("")
}