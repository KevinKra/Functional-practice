//1 Sum the values of an array
var a = [0, 1, 2, 3];

let sum = a.reduce( (total, number) => {
	return total += number; 
}, 0);

sum;


//2 Sum the values of a nested array
var b = [[1,2], [4,2,1], [9,3], [2]];

let flatten = b.reduce( (total, current) => {
	return total.concat(current);
}, [])

let totalSum = flatten.reduce( (total, number) => {
	return total += number;
}, 0);

totalSum;

//3 Sum the values of an Object with identical keys
var c = [{x: 1}, {x: 2}, {x: 3}]

let total = c.reduce( (accum, object) => {
	return accum += object.x;
}, 0);

total;

// //Sum the values of an Object with unique keys
// var d = [{x: 1}, {x: 2}, {x: 3}]
