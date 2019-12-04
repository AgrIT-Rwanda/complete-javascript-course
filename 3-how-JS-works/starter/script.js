///////////////////////////////////////
// Lecture: Hoisting

calculateAge(1995);

function calculateAge(birthYear){

    console.log(2019 - birthYear);
}

calculateAge(1990);





//retirement(1995); this can not work because is function expression.   

var retirement = function(year){

    console.log(65 - (2019 - year));
}

console.log(age);
var age = 23 ;

function foo(){

    var age = 65;
    console.log(age);
}
foo();
console.log(age);



///////////////////////////////////////
// Lecture: Scoping

var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }                          

}



// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword


console.log(this); // refer to the window object. ie:window.

var john = {
    name:'John',
    yearOfBirth:1990,
    calculateAge:function(){
        //console.log(this);
        console.log(2019 - this.yearOfBirth);
    }

}

john.calculateAge();

// what we call  borrow a method 
var mike = {
    name:'John',
    yearOfBirth:1984,

}
mike.calculateAge = john.calculateAge;
mike.calculateAge(); // instead of copying calculate and past there.





