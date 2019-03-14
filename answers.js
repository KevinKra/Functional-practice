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

//4 Sum the values of an Object with unique keys
var d = [{a: 5}, {b: 8}, {c: 3}]

let total = d.reduce( (total, element) => {
	return total += parseInt(Object.values(element));
}, 0)

/* 
Annotation: Object.values() returns an array of all values, if we then
try to sum all the array values, we create a string. Calling parseInt
on the Object's output array turns every element we work through into an integer before
passing adding it to the total.
*/

//5 Count instances of values in an Object
var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

let countedNames = names.reduce( (accum, curr) => {
	if (curr in accum) {
		accum[curr]++
	} else {
		accum[curr] = 1;
	}
	return accum;
}, {})

countedNames;

/*
Annotation: We reduce the array and check if the current element exists on
the accumulator, if it does: ++ the key's value. if it doesnt: create a new 
key and assign it a value of 1;
*/





