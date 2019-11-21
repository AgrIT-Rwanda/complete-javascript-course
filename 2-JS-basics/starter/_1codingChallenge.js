prompt( "What is the height of John and mass");
var johnMass  = 95
var johnHeight = 1.7
prompt( "what is the heigh and mass of mark ");
var markMass = 80;
var markHeigh = 1.5;

var johnBMI = johnMass / (johnHeight * johnHeight);
var markBMI = markMass / ( markMass * markMass);

var isHigher = johnBMI > markBMI;
console.log( 'Is Mark\'s BMI higher than John\'s BMI? '+isHigher)

if(johnBMI > markBMI){
console.log( 'bra bra')
}else{
console.log( ' bra bra bra')

}