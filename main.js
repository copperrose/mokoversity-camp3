var gameModule=(function (){
	var counter=0,timeoutVar;

	function start(){

		var canvas = document.getElementById('game');
		var ctx = canvas.getContext('2d');
		canvas.width = 480;
		canvas.height = 320;

		var balla=Math.floor(Math.random()*300);//0~300
		var ballb=Math.floor(Math.random()*500);
		var ballc=Math.floor(Math.random()*100);

		ctx.fillStyle='black';
		ctx.beginPath();
		ctx.arc(balla, ballb, ballc, 0, Math.PI * 2 , true);
		ctx.fill();

		if(counter>=10){

		}else{
			timeoutVar=setTimeout(start,1000);//1sec
			counter=counter+1;
			console.log("counter="+counter);
		}
	}

	return{
		start:start
	}
}) ();

gameModule.start();