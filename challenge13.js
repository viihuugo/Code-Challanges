// Uncle Tom the farmer needs to decide what vegetable he’ll grow this year. Since last year he barely covered costs due to a sudden fall in price for his cucumber,
// this year he has decided to check which vegetables prices had fallen the most during the previous years. Can you help Uncle Tom quantify the falls in price for each vegetable?

// Input
// A list of numbers, corresponding to a series for the price value of a vegetable over a period.

// Example:

// [10, 11, 1, 11, 29, 10, 14, 20, 5, 1, 10]
// Expected Output
// A number, representing the largest fall in price in the series, rounded when needed to a maximum of four decimal points ( ex. 1.0001).

// Example:

// 28

function maxFall(arr) {

    let result = 0;

    for ( i=0, j=1; j<arr.length; j++) {
        if (arr[j] >= arr[i]) {
            i = j;
        } else if (arr[i] - arr[j] > result)
            result = arr[i] - arr[j];
    }

    return Math.round(result * 10000) / 10000;

}