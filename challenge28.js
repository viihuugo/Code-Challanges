// Simplified number to money converter.
// Note:
// truncate to 2 decimal places
// don't keep trailing zeros
// input will be a positive number with at least two trailing digits
// Examples:
// 2546.2562 --> '2,546.25'

// 1500.342626 --> '1,500.34'

// 100.2134 --> '100.21'

const numberToMoney = (n) => new Intl.NumberFormat().format(Math.floor(n*100)/100);