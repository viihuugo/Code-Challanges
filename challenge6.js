// Your are given a string. You must replace any occurence of the sequence coverage by covfefe, however, if you don't find the word coverage in the string, you must add covfefe at the end of the string with a leading space.

// For the languages where the string is mutable (such as ruby), don't modify the given string, otherwise this will break the test cases.

function covfefe(str){
    //covfefe !
    const arr = str.replaceAll('coverage', 'covfefe').split(' ');
    const arr2 = str.split(' ');
    let count = 0;

    for (i=0; i<arr2.length; i++) {
        if ( arr2[i] == 'coverage') {
            count ++
        }
    }

    if ( count == 0) {
        arr.push('covfefe')
    }
    

    return arr.join(' ')
}