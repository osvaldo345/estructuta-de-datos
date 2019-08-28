class Dado{
    constructor(){
            this._cara = [1,2,3,4,5,6];

    } 
        lanzar(){
            return this._cara;
        }
    }
    function contar (){
        for(let i=0; i<100; i++){
            tiro1.lanzar();
            let c = 0;
            c = tiro1.lanzar();
            c[this._cara -1]++;
        }
    return c;

    }
    let tiro1 = new Dado();
        tiro1._cara = Math.trunc(Math.random(this._cara) * 6 +1);
        console.log(tiro1.lanzar());
    

    