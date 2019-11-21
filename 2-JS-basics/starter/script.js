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
alert(firstName + 'is a '+ age + ' year old '+ ' job '+ job + ' .Is he married? '+ isMarried);

var lastName = prompt( ' What is his last Name? ');
console.log(firstName + ' '+lastName);