// This is My Mobile Number Code Import Methods 

import { mobileNumber } from"./mobileNumber.js";

// select class varible 
var cl = document.querySelector(".mainContainer");
    cl.style.textAlign = "center";
    cl.style.display = "flex";
    cl.style.justifyContent = "center";
    cl.style.flexWrap = "wrap";
    cl.style.overflow = "scroll";
    
    
// This is create Element 
for (let i = 0; i < 20; i++) {
    var p = document.createElement("div");
        p.id = "mera";
        p.style.width = "90vw";
        p.style.height = "20vw";
        p.style.backgroundColor = "red";
        p.style.borderRadius = "2vw";
        p.style.marginTop = "2vw";
        p.style.display = "flex";
        
        cl.appendChild(p);
        
    var q = document.createElement("img");
        q.style.width = "30vw";
        q.style.height = "20vw";
        q.style.borderRadius = "2vw";
        q.style.backgroundColor = "#652383";
        
    var dataLine = document.createElement("div");
        dataLine.style.width = "60vw";
        dataLine.style.height = "20vw";
        dataLine.style.backgroundColor = "#fff";
        
        p.appendChild(q);
        p.appendChild(dataLine);
        
}

var tera = document.querySelectorAll("#mera");

console.log(tera);



