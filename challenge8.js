// Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

// --> "alpha beta gamma delta alpha beta gamma delta"
// Words will be separated by a single space. There will be no leading or trailing spaces in the string. An empty string (0 words) is a valid input.

function removeConsecutiveDuplicates(string) {
    const arr = string.split(' ');
    const newarr = [];

    for (i=0; i<arr.length; i++) {
        if ( arr[i] !== arr[i+1]) {
            newarr.push(arr[i]);
        }
    }

    return newarr.join(' ')
  }