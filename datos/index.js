class Triangulo{
constructor(){
    this._base = 0;
    this._altura = 0;
}
area(){
    return this._base * this._altura / 2;
}
}
let triangulo1 = new Triangulo();
triangulo1._base = 5;
triangulo1._altura = 2;
console.log(triangulo1.area());
