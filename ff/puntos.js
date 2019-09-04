class Punto{
    constructor(x,y) {
        this._hor = x;
        this._ver = y;
    }

    set hor(x) {
        if(x < -100 && x < 100){
        this._hor = x;
    } else {
        return 0;
    }
}
    set ver(y) {
        if(y < -100 && y < 100){
        this._ver = y;
        } else {
            return 0;
        }
    }   
    get hor() {
        return this._hor;
    }
    get ver() {
        return this._ver;
    }

    distancia(puntoF) {
        return Number(Math.sqrt(((puntoF.hor-this._hor)^2)) + ((puntoF.ver-this._ver)^2));

    }
    toString(){
        return this._hor + "," + this._ver + ",";
    }

}

p1= new Punto(-4,-3);
p3= new Punto(-2,5);

d=p1.distancia(p3)
console.log(d);