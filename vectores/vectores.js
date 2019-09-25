class Numero {
    constructor() {
        this._nums = [];
    }
    Crear(){
        for (var i = 0; i < 100; i++){
         this._nums[i] =  Math.trunc(Math.random() * 1000 + 1);
        }
        return this._nums;
        
    }

    numericamente(a, b) {
        this._nums.sort(function compare(a, b) {return a - b})
        for(var i=1; i<100; i++){
            console.log(this._nums[i]);
        }
        }
}




let numero = new Numero();
numero.Crear();
console.log(numero.numericamente());