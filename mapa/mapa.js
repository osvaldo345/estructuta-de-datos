class Punto {
    constructor(){
        this._x = 0;
        this._y = 0;
//        this._x2 = 0;
//        this._y2 = 0;
    }

    set x(valx){
        this._x=valx;
    }
    get x(){
        return this._x;
    }

    set y(valy){
        this._y=valy;
    }
    get y(){
        return this._y;
    }
    diancia(p2){
        ((p2.x-this._x)^2 + (y2-y1)^2)^(1/2);
    }
}
p1= new Punto();
p2= new Punto();
p1.x=2;
p._y=1;
p3._x2=5;
py._y2=8;

d=p1.distancia(p3);
console.log(p3.diancia(p1));