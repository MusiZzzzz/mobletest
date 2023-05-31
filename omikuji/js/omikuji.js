"use strict";

window.addEventListener("DOMContentLoaded",
    function(){
        let popMsg = "<<<<<<<<<<<<仕事　タイム！>>>>>>>>>>>";
        window.alert(popMsg);
    },false

    );


    const btn1 = document.getElementById("btn1");
    btn1.addEventListener("click",
    function(){
           let n = Math.floor(Math.random() * 5);
    
            switch(n){
                case 0:
                    btn1.textContent ="C言語";
                    btn1.style.color ="#b0e0e6";
                    btn1.style.fontSize = "70px";
                    break;
                case 1:
                    btn1.textContent ="C++";
                    btn1.style.color ="#ff00ff";
                    btn1.style.fontSize = "50px";
                    break;
                case 2:
                    btn1.textContent ="Java";
                    btn1.style.color ="#ff0000";
                    btn1.style.fontSize = "40px";
                    break;
                case 3:
                    btn1.textContent ="Python";
                    btn1.style.color ="#00008b";
                    btn1.style.fontSize = "35px";
                    break;
                case 4:
                    btn1.textContent ="notepad++";
                    btn1.style.color ="#000000";
                    btn1.style.fontSize = "15px";
                    break;
            }
        },false
    );