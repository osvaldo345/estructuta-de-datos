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

    _numericamente(a, b) {
        if (a.nums < b.nums) {
            return -1;
        }
        if (a.nums > b.nums) {
            return 1;
        }
        return 0;
    }
    _num() {
        this._nums.sort(this._numericamente);
    }

}
let numero = new Numero();
console.log((numero.Crear()));
console.log((numero._num()));