"use strict";

window.addEventListener("DOMContentLoaded",
    function(){
        let popMsg = "<<<<<<<<<<<<仕事　タイム！>>>>>>>>>>>";
        window.alert(popMsg);
        $("header").textillate({
            loop: false, // ループのオンオフ
            minDisplayTime: 2000, // テキストが置き換えられるまでの表示時間
            initialDelay: 2000, // 遅延時間
            autoStart: true, // アニメーションを自動的にスタート
            in: { // フェードインのエフェクトの詳細設定
            effect: "fadeInLeftBig", // エフェクトの名前(animate.css参照)
            delayScale: 1.5, // 遅延時間の指数
            delay: 50, // 文字ごとの遅延時間
            sync: false, // trueはアニメーションをすべての文字に同時に適用
            shuffle: true // trueは文字を順番にではなく、ランダムに
            }
            });
            // おみくじボタン(id="btn1") ボヤァと表示させる
            $(function(){
            ScrollReveal().reveal("#btn1", { duration: 9000 });
            });
    },"5000"

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
            $(document).snowfall("clear");
        // jQueryのsnowfall
        $(document).ready(function(){
        $(document).snowfall({
        maxSpeed : 5, // 最大速度
        minSpeed : 1, // 最小速度
        maxSize : 20, // 最大サイズ
        minSize : 1, // 最小サイズ
        image : 'img/sakura_hanabira.png'
        });
        });
        },false
    );