var numero = document.querySelector("#numero");
var resultado = document.querySelector("#resultado");
var btnAgregar = document.querySelector("#btnAgregar");

btnAgregar.addEventListener("click",ciclo);


function ciclo(){
    let n = Number(numero.value);
    let s = 0;
    let denominador = 1;
    let signo = 1;
    for(var i = 1; i<=n; i++){
        s+= (4/denominador)*signo;
        denominador+=2;
        signo*=-1;

        resultado.innerHTML = s;
    }
}