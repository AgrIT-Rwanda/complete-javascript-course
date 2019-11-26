
//use this instead of passing mass and heigh parameter to a function

var john = {

   fullName:'John Smith',
   mass: 78,
   height:1.68,
   calcBMI: function(){

     this.bmi = this.mass / (this.height * this.height);
     return this.bmi;
      
   }  
}

var mark = {

    fullName:'John Smith',
    mass: 78,
    height:1.68,
    calcBMI: function(){
 
      this.bmi = this.mass / (this.height * this.height);
      return this.bmi;
       
    }  
 }

john.calcBMI();
mark.calcBMI();
console.log(john, mark);

// u can even make decison here.

if(john.bmi > mark.bmi){
    console.log( 'john\'s  is higher');
}else if(mark.bmi > john.bmi){
    console.log( 'mark\'s  is higher');
}else{
    console.log( 'equal');
}

