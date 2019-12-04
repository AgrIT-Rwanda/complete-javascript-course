// Function constructor,

var john = {

    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
};


var person = function (name,
    yearOfBirth, job) {

    this.name = name;
    this.yearOfBirth = yearOfBirth;      // this point at 
    this.job = job;

}


person.prototype.calculateAge = function () {
    console.log(2016 - this.yearOfBirth);
}

var john = new person('John', 1990, 'teacher');

var jane = new person('jane', 1994, 'designer');

var mark = new person('mark', 1954, 'retired');
john.calculateAge();
jane.calculateAge();
mark.calculateAge();



// Object.create.
var personProto = {

    calculateAge:function(){
        console.log(2016 - this.yearOfBirth);
    }
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'Teacher';


var jane = Object.create(personProto,{
    name: { value: 'Jane'},
    yearOfBirth :{value: 1990},
    job:{value:'Designer'}
});



// PRIMITIVES VS OBJECTS

var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);

var obj1 = {
    name: 'John',
    age:26
};

var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);

// Passing a function as arguments
var years  = [ 1990, 1965, 1937, 2005, 1998];


function arrayCalc(arr , fn){

     var arrRes = [];
     for( var i = 0; i < arr.length; i++){

        arrRes.push(fn(arr[i])); 
     }

     return arrRes;
}

function isFullAge(e){

    return e >= 18 ; 
}
function calculateAge(e){

    return 2016 - e;
}

var ages = arrayCalc(years, calculateAge);
var fullAges =  arrayCalc(ages, isFullAge);
console.log(ages);
console.log(fullAges);