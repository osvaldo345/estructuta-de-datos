var btnSueldo = document.querySelector("#btnSueldo");
btnSueldo.addEventListener("click", calcularSueldo);

var sueldo = document.querySelector("#sueldo");
var resultado = document.querySelector("#resultado");

function calcularSueldo(){
    let newS = Number(sueldo.value);
    let porcentaje = 0;
    let res = resultado;
    let r = 0;
    if (newS >0 && newS <=1000) {
        porcentaje= newS * 0.15;
        r = newS + porcentaje;
        res.innerHTML= "tu sueldo es de:"+ r + " con un 15%";
        
    }
    if (newS >1000 && newS <=1200) {
        porcentaje= newS * 0.12;
        r = newS + porcentaje;
        res.innerHTML= "tu sueldo es de:"+ r + " con un 12%";
        
    }
    if (newS >1200 && newS <=1400) {
        porcentaje= newS * 0.10;
        r = newS + porcentaje;
        res.innerHTML= "tu sueldo es de:"+ r + " con un 10%"
        
    }
    if (newS >1400 && newS <=1500) {
        porcentaje= newS * 0.08;
        r = newS + porcentaje;
        res.innerHTML= "tu sueldo es de:"+ r + " con un 8%"
        
    }
    if (newS >1500) {
        porcentaje= newS * 0.05;
        r = newS + porcentaje;
        res.innerHTML= "tu sueldo es de:"+ r + "  con un 5%"
        
    }
    
}