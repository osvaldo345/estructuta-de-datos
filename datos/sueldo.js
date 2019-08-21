var btnSueldo = document.querySelector("#btnSueldo");
btnSueldo.addEventListener("click", calcularSueldo);

var sueldo = document.querySelector("#sueldo");
var resultado = document.querySelector("#resultado");

function calcularSueldo(){
    let s = Number(sueldo.value);
    let porcentaje = 0;
    let res = resultado;
    let r = 0;
    if (s >0 && s <=1000) {
        porcentaje= s * 0.15;
        r = s + porcentaje;
        res.innerHTML= "tu sueldo es de:"+ r + " aumentando un 15%";
        
    }
    if (s >1000 && s <=1200) {
        porcentaje= s * 0.12;
        r = s + porcentaje;
        res.innerHTML= "tu sueldo es de:"+ r + " aumentando un 12%";
        
    }
    if (s >1200 && s <=1400) {
        porcentaje= s * 0.10;
        r = s + porcentaje;
        res.innerHTML= "tu sueldo es de:"+ r + " aumentando un 10%"
        
    }
    if (s >1400 && s <=1500) {
        porcentaje= s * 0.8;
        r = s + porcentaje;
        res.innerHTML= "tu sueldo es de:"+ r + " aumentando un 8%"
        
    }
    if (s >1500) {
        porcentaje= s * 0.5;
        r = s + porcentaje;
        res.innerHTML= "tu sueldo es de:"+ r + "  aumentando un 5%"
        
    }
    
}