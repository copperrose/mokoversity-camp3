var gameModule=(function (){
	var counter=0,
		scores=0,
		timeoutVar,
		balla,ballb,ballc;
	//	length=color.length;

	function touchEvent(evt){
		var x=evt.clientX,
			y=evt.clientY,
			tmp=(balla-x)*(balla-x)+(ballb-y)*(ballb-y);

			console.log("Clicked:"+x+","+y);

			if(tmp<ballc*ballc){
				console.log("Hit!Your Scores:"+scores);
			}
	}
	function start(){
		document.getElementById("main").addEventListener("click",touchEvent,false);
		startGame();
	}

	function startGame(){

		var canvas = document.getElementById('game');
		var ctx = canvas.getContext('2d');
		canvas.width = 640;
		canvas.height = 480;

		balla=Math.floor(Math.random()*300);//0~300
		ballb=Math.floor(Math.random()*500);
		ballc=Math.floor(Math.random()*100);

		ctx.fillStyle='black';
		ctx.beginPath();
		ctx.arc(balla, ballb, ballc, 0, Math.PI * 2 , true);
		ctx.fill();

		if(counter>=20){
			gameOver();
		}else{
			timeoutVar=setTimeout(start,1000);//1sec
			counter=counter+1;
			console.log("counter="+counter);
		}
	}

	function gameOver(){

	}

	return{
		start:start
	}
}) ();

gameModule.start();