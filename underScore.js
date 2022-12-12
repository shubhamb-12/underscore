//Open source JS library, provides useful functional programming helpers, widely used to deal with arrays, collections and objects in JavaScript.
const US = require("underscore");

// //each function
// let arr = ["tom", "jerry", "sam", "sid"];
// US._.each(arr, function (_name, _key) {
//   console.log(`${_key + 1} : ${_name}`);
// });

// //map function
// let numbers = [12, 43, 26, 41, 67];
// let newNum = US._.map(numbers, function (_num) {
//   return _num * 2;
// });
// console.log(newNum);

// reduce function
// let numbers = [12, 43, 26, 41, 67];
// let sum = US._.reduce(
//   numbers,
//   function (acc, num) {
//     return (acc += num);
//   },
//   0
// );
// console.log(sum);

//find & filter function
// let numbers = [12, 43, 26, 41, 67];
// let newNum = US._.find(numbers, function (num) {
//   return num > 40;
// });
// console.log(newNum);

// let newNumFilter = US._.filter(numbers, function (num) {
//   return num > 40;
// });
// console.log(newNumFilter);

//where & findWhere
//where returns all the elements for which the test condition turns true, whereas findWhere returns the first elemet only

// let people = [
//   { name: "harry", age: 21 },
//   { name: "sid", age: 45 },
//   { name: "tom", age: 21 },
// ];

// let found = US._.where(people, { age: 21 });
// let found1 = US._.findWhere(people, { age: 21 });
// console.log(found, found1);

// let fil = US._.find(people, function (ppl) {
//   return ppl.age == 21;
// });
// console.log(fil);

//sortBy
// let cars = ["Toyota", "Kia", "Ford", "Suzuki"];
// // let sorted = US._.sortBy(cars);
// let sorted = US._.sortBy(cars, function (car) {
//   return car.length;
// });

// console.log(sorted);

// let cars = [
//   { name: "Toyota", maxspeed: 200 },
//   { name: "Kia", maxspeed: 150 },
// ];
// let sorted = US._.sortBy(cars, "maxspeed");
// console.log(sorted);

//groupBy
// let cars = ["Chev", "Kia", "Ford", "Suzuki"];
// let grouped = US._.groupBy(cars, "length");
// console.log(grouped);

// let cars = [
//   { name: "Toyota", maxspeed: 200 },
//   { name: "Kia", maxspeed: 150 },
//   { name: "Ford", maxspeed: 200 },
// ];

// let grouped = US._.groupBy(cars, function (car) {
//   return car.maxspeed;
// });
// console.log(grouped);

//countBy
//sorts a list into groups and returns no of count of that group

// let numbers = [2, 3, 4, 5, 6, 7, 8];
// let check = US._.countBy(numbers, function (num) {
//   return num % 2 === 0 ? "even" : "odd";
// });
// console.log(check);

//shuffle
// let numbers = [2, 3, 4, 5, 6, 7, 8];
// let shuffled = US._.shuffle(numbers);
// console.log(shuffled);

//toArray
// let toArr = function (arg) {
//   return US._.toArray(arg);
// };

// console.log(toArr("harry"));

// let obj = {
//   name: "tom",
//   age: 23,
// };
// console.log(toArr(obj));

//size
// let size = US._.size([2, 3, 4, 6]);
// console.log(size);

//partition
//partitions into two arrays, one for test condition true and other for false
// let people = ["tom", "harry", "sid", "sammy"];
// let prt = US._.partition(people, function (ppl) {
//   return ppl.length > 3;
// });
// console.log(prt);

//rest
// let array = [23, 34, 5, 3, 22, 31, 42];
// let rest = US._.rest(array, 4); // 4 => no of index from where we want rest of the values , default => 1
// console.log(rest);

//first
// let array = [23, 34, 5, 3, 22, 31, 42];
// let first = US._.first(array);//returns first element
// let first = US._.first(array, 3);//first n number of elements we want
// console.log(first);

//last
//similar to first
// let array = [23, 34, 5, 3, 22, 31, 42];
// let last = US._.last(array, 4);
// console.log(last);

//initial
//returns every elements but not last
// let array = [23, 34, 5, 3, 22, 31, 42];
// let ini = US._.initial(array);
// let ini = US._.initial(array, 2); //retuens every elements but not last two
// console.log(ini);

//compact
//takes an array and removes all falsy values
// let array = [1, 0, false, "hello", null];
// console.log(US._.compact(array));

//flatten
//flattens an array
// let number = [1, 2, [3], [[4]]];
// console.log(US._.flatten(number));
// console.log(US._.flatten(number, true)); //if passed true then flattens only till first level

//without
//parsers an array and tells underscore which value we want to exclude from that array
// let number = [1, 2, 3, 4, 5];
// console.log(US._.without(number, 3, 4));

//union
//takes two or more array and merges them into single array , also removes duplicate values
// let arr1 = [1, 2, 3, 4];
// let arr2 = [3, 4, 5, 6];
// console.log(US._.union(arr1, arr2));

//intersection
//returns common values from n number of arrays
// let arr1 = [1, 2, 3, 4];
// let arr2 = [3, 4, 5, 6];
// console.log(US._.intersection(arr1, arr2));

//difference
//takes multiple arrays and returns the values from first array that dont exists in subsequent arrays
// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [3, 4];
// let arr3 = [5];
// console.log(US._.difference(arr1, arr2, arr3));

//uniq
//removes duplicates
// let num = [1, 2, 3, 3, 4, 2, 5];
// console.log(US._.uniq(num));

// let cars = [
//   { name: "Toyota", maxspeed: 200 },
//   { name: "Kia", maxspeed: 150 },
//   { name: "Ford", maxspeed: 200 },
// ];

// let unique = US._.uniq(cars, false, function (car) {
//   return car.maxspeed;
// });
// //false => so as to tell the uniq function that passed array is unordered array

// console.log(unique);
