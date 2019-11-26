var john = {

     fullName:'John Smith',
     bills:[124 , 48 , 268 , 180, 42],
     calcTips:function(){
         this.tips = [];
         this.finalValue = [];

         for ( var i = 0 ; i < this.bills.length ; i++){

            var percentage;
            var bill = this.bills[i];

            if(bill < 50 ){
                percentage = .2;

            }else if ( bill >= 50 && bill < 200){
                percentage = .15;
            }else{
                percentage = .1;
            }

            this.tips[i] = bill * percentage;
            this.finalValue[i] = bill + bill * percentage;

            console.finalValue;
         }
        }
}

john.calcTips();
console.log(john);