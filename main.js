/*jslint browser: true, devel: true, closure: true */

var gameModule = (function (document) {

    "use strict";

    var counter = 0,
        scores,
        timeoutVar,
        balla,
        ballb,
        ballc;

    function touchEvent(evt) {
        var x = evt.clientX,
            y = evt.clientY,
            tmp = ( balla - x ) * (balla - x ) + ( ballb - y ) * ( ballb - y );

            console.log("Clicked:" + x + "," + y);

            if(tmp < ballc * ballc){
                scores = scores + (100 - ballc);
                console.log("Hit!Your Scores:" + scores);
            }
    }
    function start(){
        scores = 0;
        document.getElementById("main").addEventListener("click", touchEvent, false);
        startGame();
    }

    function startGame(){

        var canvas = document.getElementById('game');
        var ctx = canvas.getContext('2d');
        canvas.width = 640;
        canvas.height = 480;

        balla = Math.floor(Math.random() * 600);//0~300
        ballb = Math.floor(Math.random() * 450);
        ballc = Math.floor(Math.random() * 80);

        ctx.fillStyle = 'black';
        ctx.beginPath();
        ctx.arc(balla, ballb, ballc, 0, Math.PI * 2 , true);
        ctx.fill();

        if(counter > = 20){
            gameOver();
		}else{
            timeoutVar = setTimeout(startGame, 1000);//1sec
            counter = counter + 1;
        }
    }

    function gameOver(){
        console.log("Final:" + scores);
    }

    return{
        start : start
    }
}) ();

gameModule.start();