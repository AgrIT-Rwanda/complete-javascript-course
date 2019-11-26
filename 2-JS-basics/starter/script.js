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


/*******************************************************************
 * Making decision
 * if / else statements
 */

 var firstanem = 'John';
 var civilStatus = 'single';

 if (civilStatus === 'married '){
     console.log(firstName + ' is married');
 }else{
     console.log(firstName + 'will hopefully marry soon: ');
 }

 var isMarried = true;
 if(isMarried){
     console.log( firstName + 'is married');
 }else{
     console.log(firstName + 'will hopefully marry soon:')
 }

/****************************************************
 * Boolean logic
 */
var firstName = 'John';
var age = 16;
if(age < 13){
    console.log( " ")
}else if( age >= 13 && age <= 20){

}else{

}

/*********************************************************
 * The  Ternary Opertor and Switch statements
 */

 var firstName = 'John';
 var age = 22;

 age >= 18 ? console.log(firstName +' drinkds beer. '): console.log(firstName + 'drinks juice.');

 var drink = age >=18 ? 'beer' : 'juice';


/*******************************************************
 * Switch statement
 * 
 */
var job = 'teacher';
switch(job){
   case 'teacher':
        console.log(firstName + 'teacher kids how to code');
        break;
    case 'driver':
        console.log(firstane + ' drives  an uber in Lisbon.');
        break;
    default:
        console.log(firstName + 'does something else.')
}


/****************************************************
 *  Truthy and falsey
 *  Falsy value: undefined, null, '', NaN,0
 *  Truthy values: Not falsy
 */

 var height;
 if(height){
     console.log('variable is defined')
 }else{
     console.log('variable has not been defined'); 
 }

 /**************************************************
  * Functions
  */

 function calculateAge(birthYear){
      
    return 2018 - birthYear;
  }


  var ageJohn = calculateAge(1990);
  console.log(ageJohn);
  var ageJohn = calculateAge(1999);
  var ageMike = calculateAge(1948);
  var ageJane = calculateAge(1969);
  console.log(ageJohn, ageMike, ageJane);

  /************************************************
   * Function statements and expression 
   */

   //function declaration
   //function whatDoYouDo (job, firstName){}
  
   // function expression
  var whatDoYouDo = function (job, firstName){

        switch(job){
             case 'Teacher':
                 return firstName + 'teaches kids how to code';
             case 'driver':
                   return firstName + 'drives a can in Lisbon'
             case 'designer':
                   return firstName + 'design  beautiful websites';
             default:
                 return firstName + 'does something else';
        }

  }

  console.log(whatDoYouDo('teacher', 'JOhn'));
  console.log(whatDoYouDo('design', 'Jane')); 
  console.log(whatDoYouDo('programmer ', 'Origene'));

  // function arrow.
  const m =(x, y) => {return x * y}
  console.log(m(4 , 5));

/********************************************
 *   Arrays
  */

  var names = ['origene', 'john', 'mike'];
  var years = new Array(1990, 1993, 1995);

  console.log(names[2]);
  console.log(names.length);

  names[1] = 'Ben';
  names[names.length] =  'Mary';
  console.log(names);

  // Different data types
  var john = ['John', 'Smith', 1990, 'teacher', false];

  john.push('blue');
  john.unshift('Mr.'); // add element to array.
  console.log(john);

  john.pop();
  john.pop();
  john.shift()
  console.log(john);
  console.log(john.indexOf(1990));


  var isDesigner =john.indexOf('designer') === -1 ? 'John is not designer': 'JOhn is a designer';
  console.log(isDesigner);
  
  /**********************************************************
   * Object and properties.
   * accessing specific element not based on index but on name.
   */


   var john = {
       firstName:'John',
       lastName:'Smith',
       birthYear:1990,
       family:['Jane','Mark','Bob','Emily'],
       job:'teacher',
       isMarried:false
   };

   console.log(john.firstName);
   console.log(john['lastname']);

   var x = 'birthday';
   console.log(john[x]);
   john.job = 'designer';
   john['isMarried'] = true;
   console.log(john);

   // or you can use new Object();
   var jane = new Object();
   jane.firstaName = 'Jane';
   jane.birthYear = 1990;
   jane['lastName'] = 'Smith';
   console.log(jane);

   // object and method
   var john = {
    firstName:'John',
    lastName:'Smith',
    birthYear:1990,
    family:['Jane','Mark','Bob','Emily'],
    job:'teacher',
    isMarried:false,
    calcAge: function(birthYear){
        return 2018 - birthYear;
    }
};

console.log(john.calcAge(1992));

/*************************************************
 * Loop and iteration
 */

 for (var i = 0 ; i < 10 ; i++ ){
     console.log('Hello m')
 }

 // With arrays.

 var john = ['John', 'Smith',1990, 'design',false, 'blue'];
 
 for(var i = 0; i < john.length; i++){

    console.log(john[i]);
 }
  
 // break and continue keywords

 for ( var i = 0 ; i < john.length ; i++){

    if( typeof john[i] !== 'string') continue;
 }

 for( var i = 0; i < john.length ; i++){
     if(typeof john[i]  == 'boolean')break;
     console.log(john[i])
 }

