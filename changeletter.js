var tampungan = "";

function pisah(kalimat){
    let x = kalimat.split(" "); //dipisah jadi kata-kata, x adalah kata-kata
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

pisah("helo i am melissa in the morning on the steet a rat");