
var john = {
    firstname:'John',
    bills:[124, 48, 268, 180, 42],
    calculateTip: function(){
       this.tip = [];
        this.finalValue = [];

        for ( var i = 0 ; i  < this.bills.length ; i++){


            if (this.bills[i] > 200){
    
                this.tip[i] = [this.bills[i] * 0.1 ]; 
                this.finalValue[i] = [ this.bills[i] + this.tip[i]];

            }else if(this.bills[i] > 50  &&  this.bills[i] < 200){
                this.tip[i] =[this.bills[i] * 0.15];  
                this.finalValue[i] = [ this.bills[i] * 0.15 + this.bills[i]];
            }else{
                this.tip[i] = [this.bills[i] * 0.20 ]; 
                this.finalValue[i] = [ this.bills[i]];
            }
            console.log(this.tip[i]);
            console.log(this.finalValue[i]);
        }
    }
}

john.calculateTip();


/*******************************************************
 * 
 * TEACHER SOLUTION
 * 
 * 
 *  start from calcTip
 * 
 *   calcTip:function(){
 * 
 *    var bill = bill[i];
 *    var percentage;
 * 
 *  if(bill < 50){
 * 
 *  percentage =0.20;
 * }else if(bill  > 50 && bill < 200){
 * 
 *  percentage = 0.15;
 *   }else{
 *    
 *   percentage = 0.1;
 * }
 * 
 * tip[i] = bill * percentage;
 * finalValue[i] = bill * percentage + bill 
 *  
 * }
 */
