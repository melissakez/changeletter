var tampungan = "";

function pisah(kalimat){
    let x = kalimat.split(" ");
    let letter = {'a':'4','i':'1','e':'3','o':'0'};
    
    for (i= 0; i< x.length; i++){
        if (x[i] != 'a' && x[i] != 'in' && x[i] != 'on' && x[i] != 'at' && x[i] != 'the'){
           tampungan += x[i].replace(/[aieo]/g, x => letter[x]);
        }
        else {
           tampungan += x[i]; 
        }
           tampungan += " ";
    }
    console.log(tampungan);    
}

pisah("helo i am siapa aja in the morning on the street a duck");