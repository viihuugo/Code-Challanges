// As part of this Kata, you need to find the length of the sequence in an array, between the first and the second occurrence of a specified number.

// For example, for a given array arr

// [0, -3, 7, 4, 0, 3, 7, 9]
// Finding length between two 7s like

// lengthOfSequence([0, -3, 7, 4, 0, 3, 7, 9], 7)
// would return 5.

// For sake of simplicity, there will only be numbers (positive or negative) in the supplied array.

// If there are less or more than two occurrences of the number to search for, return 0, or in Haskell, Nothing.

var lengthOfSequence = function (arr, n) {

    let index = [];
    
    for ( let i=0; i<arr.length; i++) {
        if ( arr[i] == n ) {
            index[index.length] = i;    
        }
    }

    if(index.length === 2)
    {
        return index[1] - index[0] + 1;
    }
    else
    {
        return 0;
    }


};