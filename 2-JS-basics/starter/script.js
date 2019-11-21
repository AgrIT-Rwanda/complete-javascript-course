console.log('Hello world !!!');

/*****************************************
 * Variables and data types 
 */

 /*
var firstName = "John";
 console.log(firstName);

 var lastName = 'Smith';
 var age = 28;

 // different data types
 var fullAge = true;
 console.log(fullAge);


 var job;
 console.log(job)

 job = 'Teacher'
 console.log(job);

 //variable name rules
 var _3years = 3;
 var johnMark = 'John and Mark';
 var iff = 23;  //if only is token
*/


 /*****************************************
 * Variables  mutation and type coercion
 */

 
var firstName = 'John';
var age = 28;
//type coercion
console.log(firstName   + ''+age) // automatically convertion = type coercion

var job, isMarried;
job = 'teacher';
isMarried = false;
console.log(firstName + ' is a '+ age + ' year old ' +job +' .Is he married? '+isMarried );

// Variable mutation
age = 'twenty eight';
job = 'driver';
alert(firstName + ' is a '+ age + ' year old '+ ' job '+ job + ' .Is he married? '+ isMarried);

var lastName = prompt( ' What is his last Name? ');
console.log(firstName + ' '+lastName);

/**************************
 * BAsic operators 
 */
var year, yearJohn, yearMark;

// Math operators
now = 2018;
yearJohn = now - 28 ;
yearMark = now - 33;

console.log(yearJohn);
console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

// Logical operators
var johnOlder = ageJohn > ageMark;
console.log(johnOlder);

// typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than John');
var x ;
console.log(typeof x);

/*******************************************
 * Operator precedence
 */
var now = 2018;
var yeahJohn = 1989;
var fullAge  = 18;

// Multiple operators
var isFullAge = now - yearJohn >= fullAge; // true
console.log(isFullAge);

// Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

//Multiple assignment
var x, y;
x = (3 + 5)* 4 - 6;  // 8 * 4 -6 // 32 - 6

// More operators 
x  = x + 2  // assignment,condition an exponential is from right to left