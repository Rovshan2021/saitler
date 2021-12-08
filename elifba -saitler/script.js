let getir = document.getElementById("getir");
let saitler = document.getElementsByClassName("saitler");
let elifba = ["a0","b1","c2","d3","e4","f5","g6","h7","i8","j9","k10","l11","m12","n13","o14","p15","q16","r17","s18","t19","u20","v21","w22","x23","y24","z25","ö26","ü27","ə28",];
getir.onclick = function() {
    
    for(let i=0;i<elifba.length; i++){
        saitler = elifba[0] + "," + elifba[4]+ "," + elifba[8]+ "," + elifba[14]+ "," + elifba[20]+ "," + elifba[26]+ "," + elifba[27]+ "," + elifba[28] ;
    }
    show.innerHTML = saitler;
}



let show = document.getElementById("show");
let inp = document.getElementById("inp");
let saitSesler = ["a","e","o","u","ö","ü","ə","ı","i"];

inp.onkeyup = function(){
    inp += " "
    for(let i = 0; i<inp.value; i++){
   inp = inp.value;
        
    }
    ses += " "
    for(let j = 0; j < saitSesler[j]; j++){
        ses = saitSesler[j]
    }
}

