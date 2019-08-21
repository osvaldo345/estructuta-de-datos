var cantidad = document.querySelector("#numero");
var btn = document.querySelector("#btnAgregar");

btn.addEventListener("click",numPrimo);


function numPrimo(){
    let valor =Number(cantidad.value);
    for(var i = 2; i<= valor; i++){
        if(i%2 === 0){
            if(i ===2){
                var row = resultado.insertRow(-1);
                var cell = row.insertCell(0);
                
                cell.innerHTML = i;
            }
        }
        else if (i%3===0){
            if(i ===3){
                var row = resultado.insertRow(-1);
                var cell = row.insertCell(0);
                
                cell.innerHTML = i;
            }
        }
        else{
            var row = resultado.insertRow(-1);
            var cell = row.insertCell(0);
            
            cell.innerHTML = i;
        }
    }
}
