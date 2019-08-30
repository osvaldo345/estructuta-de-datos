class Dado{
    constructor(){

            var corredor2 = 0;
            

    }  
    
        lanzar(){
            
            return Math.trunc(Math.random() * 6 +1);
        }
    }
    let tiro1 = new Dado();

        var corredor1 = 0;


        for(let i=0; i<100; i++){
            tiro1.lanzar();
            let numero = tiro1.lanzar();
            if (numero === 1){
                corredor1 += 3;
            }
                if(numero === 2){
                    corredor1 += 1;
            }
            if(numero === 3){
                corredor1 += 1; 
                }
                if(numero === 4){
                    corredor1 += 2; 
                    }
                    if(numero === 5){
                        corredor1 += 2; 
                        }
                        if(numero === 6){
                            corredor1 += 2; 
                            }
            console.log(corredor1);
    }
    
        console.log(tiro1.lanzar());