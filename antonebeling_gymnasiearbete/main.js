document.onkeydown = checkKey;
document.onkeyup = keyUp;

var myVar;
var yourVar;
var vertVar;
var horiVar;
var Enemy;
var health=1;
var radD = 0;
var radC = 0;
var radB = 0;
var radA = 0;
var skjutit=0;
var traffadD1=0;
var traffadD2=0;
var traffadD3=0;
var traffadD4=0;
var traffadD5=0;
var traffadD6=0;
var traffadD7=0;
var traffadD8=0;
var traffadD9=0;
var traffadD10=0;
var traffadC1=0;
var traffadC2=0;
var traffadC3=0;
var traffadC4=0;
var traffadC5=0;
var traffadC6=0;
var traffadC7=0;
var traffadC8=0;
var traffadC9=0;
var traffadC10=0;
var traffadB1=0;
var traffadB2=0;
var traffadB3=0;
var traffadB4=0;
var traffadB5=0;
var traffadB6=0;
var traffadB7=0;
var traffadB8=0;
var traffadB9=0;
var traffadB10=0;
var traffadA1=0;
var traffadA2=0;
var traffadA3=0;
var traffadA4=0;
var traffadA5=0;
var traffadA6=0;
var traffadA7=0;
var traffadA8=0;
var traffadA9=0;
var traffadA10=0;
var score=0;
var Gameover = true;
var GameRunning = false;
var hojd=0;
var countdownvar;
var enemytraffad = 0;
var leftborder=1;
var rightborder=390;
var leftcol1 = 0;
var leftcol2 = 0;
var leftcol3 = 0;
var leftcol4 = 0;
var leftcol5 = 0;
var leftcol6 = 0;
var leftcol7 = 0;
var leftcol8 = 0;
var leftcol9 = 0;
var leftcol10 = 0;
var rightcol1 = 0;
var rightcol2 = 0;
var rightcol3 = 0;
var rightcol4 = 0;
var rightcol5 = 0;
var rightcol6 = 0;
var rightcol7 = 0;
var rightcol8 = 0;
var rightcol9 = 0;
var rightcol10 = 0;
 

function checkKey(e) 
{
    e = e || window.event;
	
    if (e.keyCode == '37' && GameRunning == true)
	{
		if (myVar == null)
		{
        	moveLeft();
		}
    }
   
    else if (e.keyCode == '39' && GameRunning == true)
	{
		if (myVar == null)
	    {
	    	moveRight();
	    }
    }
	
	if(e.keyCode == '38' && GameRunning == true)
	{
		if(skjutit == 0)
		{
			shoot();
			skjutit++;
		}
		else{}
	}
}

function keyUp(e)
{
	if(e.keyCode == '37')
	{
		clearInterval(myVar);
		myVar = null;
	}
	
	if(e.keyCode == '39')
	{
		clearInterval(myVar);
		myVar = null;
	}
}

function counter()
{
	var timeleft = 5;
	
	document.getElementById("countdown").style.display = "block";

	
	document.getElementById('scorediv').style.top = 20 + "px";
	document.getElementById('spelplan').style.top = 50 + "px";
	document.getElementById('menydiv').style.top = -1000 + "px";
	
	var hej = setInterval(function()
	{
		timeleft--;
		document.getElementById("countdown").textContent = timeleft;
		
		
		if(timeleft == 0)
		{
			clearInterval(hej);
			document.getElementById("countdown").style.display = "none";
			Running();
			alienHorizontal();
			
		}
	},1000);
}

function Running()
{
	GameRunning = true;
}

function moveLeft() 
{	
	if(Gameover == true)
	{
  	  	myVar = setInterval(function(){ movingLeft(); }, 10);
	 	//myVar =  setInterval(function(){alert("hej");}, 1000);
	}
}

function movingLeft()
{
	
 	if(parseInt(document.getElementById('skepp').style.left) < 20) //border1
	{
		clearInterval(myVar);
		if(parseInt(document.getElementById('skepp').style.left) < 15)
		{
			//alert("Du kan inte kommer längre till vänster!");
			document.getElementById('skepp').style.left = "15px";
		}

	}
	if(parseInt(document.getElementById('skott').style.left) < 55) //border1
	{
		clearInterval(myVar);
		if(parseInt(document.getElementById('skott').style.left) < 55)
		{
			//alert("Du kan inte kommer längre till vänster!");
			document.getElementById('skott').style.left = "55px";
		}

	}
	
	
	document.getElementById('skepp').style.left = parseInt(document.getElementById('skepp').style.left) - 4 + 'px';
	
	if(skjutit == 0)
	{
		document.getElementById('skott').style.left = parseInt(document.getElementById('skott').style.left) - 4 + 'px';
	}
	else if(skjutit == 1)
	{
		clearInterval(shoot);
	}
}

function moveRight() 
{		
	if(Gameover == true)
	{
  		myVar = setInterval(function(){ movingRight(); }, 10);
		//myVar =  setInterval(function(){alert("hej");}, 1000);
	}
	 
}

function movingRight()
{
	if(parseInt(document.getElementById('skepp').style.left) > 1290) //border1
	{
		clearInterval(myVar);
		if(parseInt(document.getElementById('skepp').style.left) > 1295)
		{
			//alert("Du kan inte kommer längre till höger!");
			document.getElementById('skepp').style.left = "1295px";
		}
	}
	if(parseInt(document.getElementById('skott').style.left) > 1330) //border1
	{
		clearInterval(myVar);
		if(parseInt(document.getElementById('skott').style.left) > 1335)
		{
			//alert("Du kan inte kommer längre till höger!");
			document.getElementById('skott').style.left = "1335px";
		}
	}

 	document.getElementById('skepp').style.left = parseInt(document.getElementById('skepp').style.left) + 4 + 'px';
	
	if(skjutit == 0)
	{
		document.getElementById('skott').style.left = parseInt(document.getElementById('skott').style.left) + 4 + 'px';
	}
	else if(skjutit == 1)
	{
		clearInterval(shoot);
	}
	
}
///////////////////////////// HORI MOVE 

var speedHorizontal = 5;


function alienHorizontal()
{
	horiVar = setInterval(function(){ alienHorizontalMove(); }, 50);
}

function alienHorizontalMove()
{
	alienVerticalMove();
	//alert("hejsan");
	document.getElementById('radA').style.left = parseInt(document.getElementById('radA').style.left) + speedHorizontal + 'px';
	document.getElementById('radB').style.left = parseInt(document.getElementById('radB').style.left) + speedHorizontal + 'px';
	document.getElementById('radC').style.left = parseInt(document.getElementById('radC').style.left) + speedHorizontal + 'px';
	document.getElementById('radD').style.left = parseInt(document.getElementById('radD').style.left) + speedHorizontal + 'px';

	if(parseInt(document.getElementById('radA').style.left) > rightborder)
	{
		// alert(speedHorizontal);
		speedHorizontal = speedHorizontal*-1;
	}

	if(parseInt(document.getElementById('radA').style.left) < leftborder)
	{
		//alert(speedHorizontal);
		speedHorizontal = speedHorizontal*-1;
	}
	
	if(radD == 0 && (traffadD1 == 1 && traffadD2 == 1 && traffadD3 == 1 && traffadD4 == 1 && traffadD5 == 1 && traffadD6 == 1 && traffadD7 == 1 && traffadD8 == 1 && traffadD9 == 1 && traffadD10 == 1))
	{
		radD = radD+1;
	}
	if(radC == 0 && (traffadC1 == 1 && traffadC2 == 1 && traffadC3 == 1 && traffadC4 == 1 && traffadC5 == 1 && traffadC6 == 1 && traffadC7 == 1 && traffadC8 == 1 && traffadC9 == 1 && traffadC10 == 1))
	{
		radC = radC+1;
	}
	if(radB == 0 && (traffadB1 == 1 && traffadB2 == 1 && traffadB3 == 1 && traffadB4 == 1 && traffadB5 == 1 && traffadB6 == 1 && traffadB7 == 1 && traffadB8 == 1 && traffadB9 == 1 && traffadB10 == 1))
	{
		radB = radB+1;
	}
	/////////////////////////////////////////////////////////////////////////VICTORY//////////////////////////////////////////////////////////////////////////
	if(enemytraffad==1 && score==23500)
	{
		clearInterval(vertVar);
		clearInterval(horiVar);
		clearInterval(Enemy);
		document.getElementById('VICTORY').style.top = 0;
		Gameover = false;
		GameRunning = false;
	}
	
	if(score == 18500 && enemytraffad == 0)
	{
		
		clearInterval(vertVar);
		clearInterval(horiVar);
		clearInterval(Enemy);
		document.getElementById('VICTORY').style.top = 0;
		Gameover = false;
		GameRunning = false;
	}
}

///////////////////////////// VERT MOVE 

var speedVertical = 70;

function alienVertical()
{
	vertVar = setInterval(function(){ alienVerticalMove(); }, 4050);
	
}

function alienVerticalMove()
{	


//////////////////////FRÅN VÄNSTER //////////////////////////////////
	if(traffadD1 == 1 && traffadC1 == 1 && traffadB1 == 1 && traffadA1 == 1 && leftborder > -80)
	{
		leftcol1++;
		leftborder = leftborder - 90;	
	}
	
	if(traffadD2 == 1 && traffadC2 == 1 && traffadB2 == 1 && traffadA2 == 1 && leftborder > -170 && leftcol1 == 1)
	{
		leftcol2++;
		leftborder = leftborder -90;	
	}
	
	if(traffadD3 == 1 && traffadC3 == 1 && traffadB3 == 1 && traffadA3 == 1 && leftborder > -260 && leftcol2 == 1)
	{
		leftcol3++;
		leftborder = leftborder -90;	
	}
	
	if(traffadD4 == 1 && traffadC4 == 1 && traffadB4 == 1 && traffadA4 == 1 && leftborder > -350 && leftcol3 == 1)
	{
		leftcol4++;
		leftborder = leftborder -92;	
	}
	
	if(traffadD5 == 1 && traffadC5 == 1 && traffadB5 == 1 && traffadA5 == 1 && leftborder > -440 && leftcol4 == 1)
	{
		leftcol5++;
		leftborder = leftborder -92;	
	}
	
	if(traffadD6 == 1 && traffadC6 == 1 && traffadB6 == 1 && traffadA6 == 1 && leftborder > -530 && leftcol5 == 1)
	{
		leftcol6++;
		leftborder = leftborder -92;	
	}
	
	if(traffadD7 == 1 && traffadC7 == 1 && traffadB7 == 1 && traffadA7 == 1 && leftborder > -620 && leftcol6 == 1)
	{
		leftcol7++;
		leftborder = leftborder -92;	
	}
	
	if(traffadD8 == 1 && traffadC8 == 1 && traffadB8 == 1 && traffadA8 == 1 && leftborder > -710 && leftcol7 == 1 )
	{
		leftcol8++;
		leftborder = leftborder -92;	
	}
	
	if(traffadD9 == 1 && traffadC9 == 1 && traffadB9 == 1 && traffadA9 == 1 && leftborder > -800 && leftcol8 == 1)
	{
		leftcol9++;
		leftborder = leftborder -92;	
	}
	
/*	if(traffadD10 == 1 && traffadC10 == 1 && traffadB10 == 1 && traffadA10 == 1 && leftborder > -850 && leftcol9 == 1)
	{
		leftborder = leftborder -92;
		//alert(leftborder);	
	}*/
	
///////////////////////////////////////////////FRÅN HÖGER////////////////////////////////////
	if(traffadD10 == 1 && traffadC10 == 1 && traffadB10 == 1 && traffadA10 == 1 && rightborder < 400)
	{
		rightcol10++;
		rightborder = rightborder + 95;	
		//alert(rightborder);
	}
	
	if(traffadD9 == 1 && traffadC9 == 1 && traffadB9 == 1 && traffadA9 == 1 && rightborder < 495 && rightcol10 == 1)
	{
		rightcol9++;
		rightborder = rightborder + 95;
	}
	
	if(traffadD8 == 1 && traffadC8 == 1 && traffadB8 == 1 && traffadA8 == 1 && rightborder < 590 && rightcol9 == 1)
	{
		rightcol8++;
		rightborder = rightborder + 95;
	}
	
	if(traffadD7 == 1 && traffadC7 == 1 && traffadB7 == 1 && traffadA7 == 1 && rightborder < 685 && rightcol8 == 1)
	{
		rightcol7++;
		rightborder = rightborder + 95;
	}
	
	if(traffadD6 == 1 && traffadC6 == 1 && traffadB6 == 1 && traffadA6 == 1 && rightborder < 780 && rightcol7 == 1)
	{
		rightcol6++;
		rightborder = rightborder + 95;
	}
	
	if(traffadD5 == 1 && traffadC5 == 1 && traffadB5 == 1 && traffadA5 == 1 && rightborder < 875 && rightcol6 == 1)
	{
		rightcol5++;
		rightborder = rightborder + 95;
	}
	
	if(traffadD4 == 1 && traffadC4 == 1 && traffadB4 == 1 && traffadA4 == 1 && rightborder < 970 && rightcol5 == 1)
	{
		rightcol4++;
		rightborder = rightborder + 95;
	}
	
	if(traffadD3 == 1 && traffadC3 == 1 && traffadB3 == 1 && traffadA3 == 1 && rightborder < 1065 && rightcol4 == 1)
	{
		rightcol3++;
		rightborder = rightborder + 95;
	}
	
	if(traffadD2 == 1 && traffadC2 == 1 && traffadB2 == 1 && traffadA2 == 1 && rightborder < 1160 && rightcol3 == 1)
	{
		rightcol2++;
		rightborder = rightborder + 95;
	}
	
	if(traffadD1 == 1 && traffadC1 == 1 && traffadB1 == 1 && traffadA1 == 1 && rightborder < 1255 && rightcol2 == 1)
	{
		rightcol1++;
		rightborder = rightborder + 95;
	}
	

	if(parseInt(document.getElementById('radA').style.left) > rightborder)
	{
		hojd++;
		//console.log("hej");
		document.getElementById('radA').style.top = parseInt(document.getElementById('radA').style.top) + speedVertical + 'px';
		document.getElementById('radB').style.top = parseInt(document.getElementById('radB').style.top) + speedVertical + 'px';
		document.getElementById('radC').style.top = parseInt(document.getElementById('radC').style.top) + speedVertical + 'px';
		document.getElementById('radD').style.top = parseInt(document.getElementById('radD').style.top) + speedVertical + 'px';
	}

	if(parseInt(document.getElementById('radA').style.left) < leftborder)
	{
		hojd++;
		//console.log("hej");
		document.getElementById('radA').style.top = parseInt(document.getElementById('radA').style.top) + speedVertical + 'px';
		document.getElementById('radB').style.top = parseInt(document.getElementById('radB').style.top) + speedVertical + 'px';
		document.getElementById('radC').style.top = parseInt(document.getElementById('radC').style.top) + speedVertical + 'px';
		document.getElementById('radD').style.top = parseInt(document.getElementById('radD').style.top) + speedVertical + 'px';
	}
	
	
	/*if((parseInt(document.getElementById('radA').style.left) < leftborder) && (parseInt(document.getElementById('radA').style.left) > rightborder))
	{		
		hojd++;
		//console.log("hej");
		document.getElementById('radA').style.top = parseInt(document.getElementById('radA').style.top) + speedVertical + 'px';
		document.getElementById('radB').style.top = parseInt(document.getElementById('radB').style.top) + speedVertical + 'px';
		document.getElementById('radC').style.top = parseInt(document.getElementById('radC').style.top) + speedVertical + 'px';
		document.getElementById('radD').style.top = parseInt(document.getElementById('radD').style.top) + speedVertical + 'px';
	}
	*/
	
	
	//////////////////////////////////////////////////////////////////////////GAMEOVER//////////////////////////////////////////////////////////////////////
	if((traffadD1 == 0 || traffadD2 == 0 || traffadD3 == 0 || traffadD4 == 0 || traffadD5 == 0 || traffadD6 == 0 || traffadD7 == 0 || traffadD8 == 0 || traffadD9 == 0 || traffadD10 == 0) &&
	parseInt(document.getElementById('radD').style.top) + 100 > 800)
	{
		clearInterval(vertVar);
		clearInterval(horiVar);
		clearInterval(Enemy);
		document.getElementById('GAMEOVER').style.top = 0;
		Gameover = false;
	}
	
	else if (radD == 1 && (traffadC1 == 0 || traffadC2 == 0 || traffadC3 == 0 || traffadC4 == 0 || traffadC5 == 0 || traffadC6 == 0 || traffadC7 == 0 || traffadC8 == 0 || traffadC9 == 0 ||     	    traffadC10 == 0) && parseInt(document.getElementById('radC').style.top) + 100 > 800)
	{
		clearInterval(vertVar);
		clearInterval(horiVar);
		clearInterval(Enemy);
		document.getElementById('GAMEOVER').style.top = 0;
		Gameover = false;
	}
	
	else if (radD == 1 && radC == 1 && (traffadB1 == 0 || traffadB2 == 0 || traffadB3 == 0 || traffadB4 == 0 || traffadB5 == 0 || traffadB6 == 0 || traffadB7 == 0 || traffadB8 == 0 || traffadB9 == 0 || traffadB10 == 0) && parseInt(document.getElementById('radB').style.top) + 100 > 800)
	{
		clearInterval(vertVar);
		clearInterval(horiVar);
		clearInterval(Enemy);
		document.getElementById('GAMEOVER').style.top = 0;
		Gameover = false;
	}
	
	else if (radD == 1 && radC == 1 && radB == 1 && (traffadA1 == 0 || traffadA2 == 0 || traffadA3 == 0 || traffadA4 == 0 || traffadA5 == 0 || traffadA6 == 0 || traffadA7 == 0 || traffadA8 == 0 || traffadA9 == 0 || traffadA10 == 0) && parseInt(document.getElementById('radA').style.top) + 100 > 800)
	{
		clearInterval(vertVar);
		clearInterval(horiVar);
		clearInterval(Enemy);
		document.getElementById('GAMEOVER').style.top = 0;
		Gameover = false;
		GameRunning = false;
	}
	
	if(hojd==1)
	{
		hojd++;
		//alert(hojd);
		parseInt (document.getElementById('enemy').style.top = 0 + "px");
		
		enemyMove();
	}
} 

var Enemyspeed = 4;
function enemyMove()
{
	Enemy = setInterval(function(){ enemyMoving(); }, 10);
	
}

function enemyMoving()
{
	hojd++;
	//console.log("hej");
	document.getElementById('enemy').style.left = parseInt(document.getElementById('enemy').style.left) + Enemyspeed + 'px';
	
	if(parseInt(document.getElementById('enemy').style.left) > 1290)
	{
		// alert(speedHorizontal);
		Enemyspeed = Enemyspeed*-1;
		//clearInterval(Enemy);
			
	}

	if(parseInt(document.getElementById('enemy').style.left) < 1)
	{
		//alert(speedHorizontal);
		Enemyspeed = Enemyspeed*-1;
	}
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function shoot()
{
	if(Gameover == true)
	{
    	yourVar = setInterval(function(){ shooting(); }, 10);
	}
}

function shooting()
{
	document.getElementById('skott').style.top = parseInt(document.getElementById('skott').style.top) - 6 + 'px';
	
	if(parseInt(document.getElementById('skott').style.top) < 0)
	{
		clearInterval(yourVar);
		skjutit--;
		document.getElementById('skott').style.left = parseInt(document.getElementById('skepp').style.left) + 43 + 'px';
		document.getElementById('skott').style.top = document.getElementById('skepp').style.top + 810 + 'px';
	}
	
	/////////////////////////// D RADEN!! //////////////////////////
	
	else if(traffadD1 == 0 && parseInt(document.getElementById('skott').style.top) < parseInt(document.getElementById('radD').style.top) + 50 && 
	parseInt(document.getElementById('skott').style.top) > parseInt(document.getElementById('radD').style.top) &&
	parseInt(document.getElementById('skott').style.left) > parseInt(document.getElementById('radD').style.left) + 20 &&
	parseInt(document.getElementById('skott').style.left) < parseInt(document.getElementById('radD').style.left) + 95)
	{
		document.getElementById('alienD1').src='bilder/empty/empty.png';
		clearInterval(yourVar);
		skjutit--;
		document.getElementById('skott').style.left = parseInt(document.getElementById('skepp').style.left) + 43 + 'px';
		document.getElementById('skott').style.top = document.getElementById('skepp').style.top + 810 + 'px';
		traffadD1++;
		pointsA();
	}
	
	else if(traffadD2 == 0 && parseInt(document.getElementById('skott').style.top) < parseInt(document.getElementById('radD').style.top) + 50 && 
	parseInt(document.getElementById('skott').style.top) > parseInt(document.getElementById('radD').style.top) &&
	parseInt(document.getElementById('skott').style.left) > parseInt(document.getElementById('radD').style.left) + 115 &&
	parseInt(document.getElementById('skott').style.left) < parseInt(document.getElementById('radD').style.left) + 190)
	{
		document.getElementById('alienD2').src='bilder/empty/empty.png';
		clearInterval(yourVar);
		skjutit--;
		document.getElementById('skott').style.left = parseInt(document.getElementById('skepp').style.left) + 43 + 'px';
		document.getElementById('skott').style.top = document.getElementById('skepp').style.top + 810 + 'px';
		traffadD2++;
		pointsA();
	}
	
	else if(traffadD3 == 0 && parseInt(document.getElementById('skott').style.top) < parseInt(document.getElementById('radD').style.top) + 50 && 
	parseInt(document.getElementById('skott').style.top) > parseInt(document.getElementById('radD').style.top) &&
	parseInt(document.getElementById('skott').style.left) > parseInt(document.getElementById('radD').style.left) + 210 &&
	parseInt(document.getElementById('skott').style.left) < parseInt(document.getElementById('radD').style.left) + 285)
	{
		document.getElementById('alienD3').src='bilder/empty/empty.png';
		clearInterval(yourVar);
		skjutit--;
		document.getElementById('skott').style.left = parseInt(document.getElementById('skepp').style.left) + 43 + 'px';
		document.getElementById('skott').style.top = document.getElementById('skepp').style.top + 810 + 'px';
		traffadD3++;
		pointsA();
	}
	
	else if(traffadD4 == 0 && parseInt(document.getElementById('skott').style.top) < parseInt(document.getElementById('radD').style.top) + 50 && 
	parseInt(document.getElementById('skott').style.top) > parseInt(document.getElementById('radD').style.top) &&
	parseInt(document.getElementById('skott').style.left) > parseInt(document.getElementById('radD').style.left) + 305 &&
	parseInt(document.getElementById('skott').style.left) < parseInt(document.getElementById('radD').style.left) + 380)
	{
		document.getElementById('alienD4').src='bilder/empty/empty.png';
		clearInterval(yourVar);
		skjutit--;
		document.getElementById('skott').style.left = parseInt(document.getElementById('skepp').style.left) + 43 + 'px';
		document.getElementById('skott').style.top = document.getElementById('skepp').style.top + 810 + 'px';
		traffadD4++;
		pointsA();
	}
	
	else if(traffadD5 == 0 && parseInt(document.getElementById('skott').style.top) < parseInt(document.getElementById('radD').style.top) + 50 && 
	parseInt(document.getElementById('skott').style.top) > parseInt(document.getElementById('radD').style.top) &&
	parseInt(document.getElementById('skott').style.left) > parseInt(document.getElementById('radD').style.left) + 400 &&
	parseInt(document.getElementById('skott').style.left) < parseInt(document.getElementById('radD').style.left) + 475)
	{
		document.getElementById('alienD5').src='bilder/empty/empty.png';
		clearInterval(yourVar);
		skjutit--;
		document.getElementById('skott').style.left = parseInt(document.getElementById('skepp').style.left) + 43 + 'px';
		document.getElementById('skott').style.top = document.getElementById('skepp').style.top + 810 + 'px';
		traffadD5++;
		pointsA();
	}
	
	else if(traffadD6 == 0 && parseInt(document.getElementById('skott').style.top) < parseInt(document.getElementById('radD').style.top) + 50 && 
	parseInt(document.getElementById('skott').style.top) > parseInt(document.getElementById('radD').style.top) &&
	parseInt(document.getElementById('skott').style.left) > parseInt(document.getElementById('radD').style.left) + 495 &&
	parseInt(document.getElementById('skott').style.left) < parseInt(document.getElementById('radD').style.left) + 570)
	{
		document.getElementById('alienD6').src='bilder/empty/empty.png';
		clearInterval(yourVar);
		skjutit--;
		document.getElementById('skott').style.left = parseInt(document.getElementById('skepp').style.left) + 43 + 'px';
		document.getElementById('skott').style.top = document.getElementById('skepp').style.top + 810 + 'px';
		traffadD6++;
		pointsA();
	}
	
	else if(traffadD7 == 0 && parseInt(document.getElementById('skott').style.top) < parseInt(document.getElementById('radD').style.top) + 50 && 
	parseInt(document.getElementById('skott').style.top) > parseInt(document.getElementById('radD').style.top) &&
	parseInt(document.getElementById('skott').style.left) > parseInt(document.getElementById('radD').style.left) + 590 &&
	parseInt(document.getElementById('skott').style.left) < parseInt(document.getElementById('radD').style.left) + 665)
	{
		document.getElementById('alienD7').src='bilder/empty/empty.png';
		clearInterval(yourVar);
		skjutit--;
		document.getElementById('skott').style.left = parseInt(document.getElementById('skepp').style.left) + 43 + 'px';
		document.getElementById('skott').style.top = document.getElementById('skepp').style.top + 810 + 'px';
		traffadD7++;
		pointsA();
	}
	
	else if(traffadD8 == 0 && parseInt(document.getElementById('skott').style.top) < parseInt(document.getElementById('radD').style.top) + 50 && 
	parseInt(document.getElementById('skott').style.top) > parseInt(document.getElementById('radD').style.top) &&
	parseInt(document.getElementById('skott').style.left) > parseInt(document.getElementById('radD').style.left) + 685 &&
	parseInt(document.getElementById('skott').style.left) < parseInt(document.getElementById('radD').style.left) + 760)
	{
		document.getElementById('alienD8').src='bilder/empty/empty.png';
		clearInterval(yourVar);
		skjutit--;
		document.getElementById('skott').style.left = parseInt(document.getElementById('skepp').style.left) + 43 + 'px';
		document.getElementById('skott').style.top = document.getElementById('skepp').style.top + 810 + 'px';
		traffadD8++;
		pointsA();
	}
	
	else if(traffadD9 == 0 && parseInt(document.getElementById('skott').style.top) < parseInt(document.getElementById('radD').style.top) + 50 && 
	parseInt(document.getElementById('skott').style.top) > parseInt(document.getElementById('radD').style.top) &&
	parseInt(document.getElementById('skott').style.left) > parseInt(document.getElementById('radD').style.left) + 780 &&
	parseInt(document.getElementById('skott').style.left) < parseInt(document.getElementById('radD').style.left) + 855)
	{
		document.getElementById('alienD9').src='bilder/empty/empty.png';
		clearInterval(yourVar);
		skjutit--;
		document.getElementById('skott').style.left = parseInt(document.getElementById('skepp').style.left) + 43 + 'px';
		document.getElementById('skott').style.top = document.getElementById('skepp').style.top + 810 + 'px';
		traffadD9++;
		pointsA();
	}
	
	else if(traffadD10 == 0 && parseInt(document.getElementById('skott').style.top) < parseInt(document.getElementById('radD').style.top) + 50 && 
	parseInt(document.getElementById('skott').style.top) > parseInt(document.getElementById('radD').style.top) &&
	parseInt(document.getElementById('skott').style.left) > parseInt(document.getElementById('radD').style.left) + 875 &&
	parseInt(document.getElementById('skott').style.left) < parseInt(document.getElementById('radD').style.left) + 950)
	{
		document.getElementById('alienD10').src='bilder/empty/empty.png';
		clearInterval(yourVar);
		skjutit--;
		document.getElementById('skott').style.left = parseInt(document.getElementById('skepp').style.left) + 43 + 'px';
		document.getElementById('skott').style.top = document.getElementById('skepp').style.top + 810 + 'px';
		traffadD10++;
		pointsA();
	}
	
	/////////////////////////// C RADEN!! //////////////////////////
	
	else if(traffadC1 == 0 && parseInt(document.getElementById('skott').style.top) < parseInt(document.getElementById('radC').style.top) + 50 &&
	parseInt(document.getElementById('skott').style.top) > parseInt(document.getElementById('radC').style.top) &&
	parseInt(document.getElementById('skott').style.left) > parseInt(document.getElementById('radC').style.left) + 20 &&
	parseInt(document.getElementById('skott').style.left) < parseInt(document.getElementById('radC').style.left) + 95)
	{
		document.getElementById('alienC1').src='bilder/empty/empty.png';
		clearInterval(yourVar);
		skjutit--;
		document.getElementById('skott').style.left = parseInt(document.getElementById('skepp').style.left) + 43 + 'px';
		document.getElementById('skott').style.top = document.getElementById('skepp').style.top + 810 + 'px';
		traffadC1++;
		pointsB();
	}
	
	else if(traffadC2 == 0 && parseInt(document.getElementById('skott').style.top) < parseInt(document.getElementById('radC').style.top) + 50 && 
	parseInt(document.getElementById('skott').style.top) > parseInt(document.getElementById('radC').style.top) &&
	parseInt(document.getElementById('skott').style.left) > parseInt(document.getElementById('radC').style.left) + 115 &&
	parseInt(document.getElementById('skott').style.left) < parseInt(document.getElementById('radC').style.left) + 190)
	{
		document.getElementById('alienC2').src='bilder/empty/empty.png';
		clearInterval(yourVar);
		skjutit--;
		document.getElementById('skott').style.left = parseInt(document.getElementById('skepp').style.left) + 43 + 'px';
		document.getElementById('skott').style.top = document.getElementById('skepp').style.top + 810 + 'px';
		traffadC2++;
		pointsB();
	}
	
	else if(traffadC3 == 0 && parseInt(document.getElementById('skott').style.top) < parseInt(document.getElementById('radC').style.top) + 50 && 
	parseInt(document.getElementById('skott').style.top) > parseInt(document.getElementById('radC').style.top) &&
	parseInt(document.getElementById('skott').style.left) > parseInt(document.getElementById('radC').style.left) + 210 &&
	parseInt(document.getElementById('skott').style.left) < parseInt(document.getElementById('radC').style.left) + 285)
	{
		document.getElementById('alienC3').src='bilder/empty/empty.png';
		clearInterval(yourVar);
		skjutit--;
		document.getElementById('skott').style.left = parseInt(document.getElementById('skepp').style.left) + 43 + 'px';
		document.getElementById('skott').style.top = document.getElementById('skepp').style.top + 810 + 'px';
		traffadC3++;
		pointsB();
	}
	
	else if(traffadC4 == 0 && parseInt(document.getElementById('skott').style.top) < parseInt(document.getElementById('radC').style.top) + 50 && 
	parseInt(document.getElementById('skott').style.top) > parseInt(document.getElementById('radC').style.top) &&
	parseInt(document.getElementById('skott').style.left) > parseInt(document.getElementById('radC').style.left) + 305 &&
	parseInt(document.getElementById('skott').style.left) < parseInt(document.getElementById('radC').style.left) + 380)
	{
		document.getElementById('alienC4').src='bilder/empty/empty.png';
		clearInterval(yourVar);
		skjutit--;
		document.getElementById('skott').style.left = parseInt(document.getElementById('skepp').style.left) + 43 + 'px';
		document.getElementById('skott').style.top = document.getElementById('skepp').style.top + 810 + 'px';
		traffadC4++;
		pointsB();
	}
	
	else if(traffadC5 == 0 && parseInt(document.getElementById('skott').style.top) < parseInt(document.getElementById('radC').style.top) + 50 && 
	parseInt(document.getElementById('skott').style.top) > parseInt(document.getElementById('radC').style.top) &&
	parseInt(document.getElementById('skott').style.left) > parseInt(document.getElementById('radC').style.left) + 400 &&
	parseInt(document.getElementById('skott').style.left) < parseInt(document.getElementById('radC').style.left) + 475)
	{
		document.getElementById('alienC5').src='bilder/empty/empty.png';
		clearInterval(yourVar);
		skjutit--;
		document.getElementById('skott').style.left = parseInt(document.getElementById('skepp').style.left) + 43 + 'px';
		document.getElementById('skott').style.top = document.getElementById('skepp').style.top + 810 + 'px';
		traffadC5++;
		pointsB();
	}
	
	else if(traffadC6 == 0 && parseInt(document.getElementById('skott').style.top) < parseInt(document.getElementById('radC').style.top) + 50 && 
	parseInt(document.getElementById('skott').style.top) > parseInt(document.getElementById('radC').style.top) &&
	parseInt(document.getElementById('skott').style.left) > parseInt(document.getElementById('radC').style.left) + 495 &&
	parseInt(document.getElementById('skott').style.left) < parseInt(document.getElementById('radC').style.left) + 570)
	{
		document.getElementById('alienC6').src='bilder/empty/empty.png';
		clearInterval(yourVar);
		skjutit--;
		document.getElementById('skott').style.left = parseInt(document.getElementById('skepp').style.left) + 43 + 'px';
		document.getElementById('skott').style.top = document.getElementById('skepp').style.top + 810 + 'px';
		traffadC6++;
		pointsB();
	}
	
	else if(traffadC7 == 0 && parseInt(document.getElementById('skott').style.top) < parseInt(document.getElementById('radC').style.top) + 50 && 
	parseInt(document.getElementById('skott').style.top) > parseInt(document.getElementById('radC').style.top) &&
	parseInt(document.getElementById('skott').style.left) > parseInt(document.getElementById('radC').style.left) + 590 &&
	parseInt(document.getElementById('skott').style.left) < parseInt(document.getElementById('radC').style.left) + 665)
	{
		document.getElementById('alienC7').src='bilder/empty/empty.png';
		clearInterval(yourVar);
		skjutit--;
		document.getElementById('skott').style.left = parseInt(document.getElementById('skepp').style.left) + 43 + 'px';
		document.getElementById('skott').style.top = document.getElementById('skepp').style.top + 810 + 'px';
		traffadC7++;
		pointsB();
	}
	
	else if(traffadC8 == 0 && parseInt(document.getElementById('skott').style.top) < parseInt(document.getElementById('radC').style.top) + 50 && 
	parseInt(document.getElementById('skott').style.top) > parseInt(document.getElementById('radC').style.top) &&
	parseInt(document.getElementById('skott').style.left) > parseInt(document.getElementById('radC').style.left) + 685 &&
	parseInt(document.getElementById('skott').style.left) < parseInt(document.getElementById('radC').style.left) + 760)
	{
		document.getElementById('alienC8').src='bilder/empty/empty.png';
		clearInterval(yourVar);
		skjutit--;
		document.getElementById('skott').style.left = parseInt(document.getElementById('skepp').style.left) + 43 + 'px';
		document.getElementById('skott').style.top = document.getElementById('skepp').style.top + 810 + 'px';
		traffadC8++;
		pointsB();
	}
	
	else if(traffadC9 == 0 && parseInt(document.getElementById('skott').style.top) < parseInt(document.getElementById('radC').style.top) + 50 && 
	parseInt(document.getElementById('skott').style.top) > parseInt(document.getElementById('radC').style.top) &&
	parseInt(document.getElementById('skott').style.left) > parseInt(document.getElementById('radC').style.left) + 780 &&
	parseInt(document.getElementById('skott').style.left) < parseInt(document.getElementById('radC').style.left) + 855)
	{
		document.getElementById('alienC9').src='bilder/empty/empty.png';
		clearInterval(yourVar);
		skjutit--;
		document.getElementById('skott').style.left = parseInt(document.getElementById('skepp').style.left) + 43 + 'px';
		document.getElementById('skott').style.top = document.getElementById('skepp').style.top + 810 + 'px';
		traffadC9++;
		pointsB();
	}
	
	else if(traffadC10 == 0 && parseInt(document.getElementById('skott').style.top) < parseInt(document.getElementById('radC').style.top) + 50 && 
	parseInt(document.getElementById('skott').style.top) > parseInt(document.getElementById('radC').style.top) &&
	parseInt(document.getElementById('skott').style.left) > parseInt(document.getElementById('radC').style.left) + 875 &&
	parseInt(document.getElementById('skott').style.left) < parseInt(document.getElementById('radC').style.left) + 950)
	{
		document.getElementById('alienC10').src='bilder/empty/empty.png';
		clearInterval(yourVar);
		skjutit--;
		document.getElementById('skott').style.left = parseInt(document.getElementById('skepp').style.left) + 43 + 'px';
		document.getElementById('skott').style.top = document.getElementById('skepp').style.top + 810 + 'px';
		traffadC10++;
		pointsB();
	}
	
	/////////////////////////// B RADEN!! //////////////////////////
	
	else if(traffadB1 == 0 && parseInt(document.getElementById('skott').style.top) < parseInt(document.getElementById('radB').style.top) + 50 && 
	parseInt(document.getElementById('skott').style.top) > parseInt(document.getElementById('radB').style.top) &&
	parseInt(document.getElementById('skott').style.left) > parseInt(document.getElementById('radB').style.left) + 20 &&
	parseInt(document.getElementById('skott').style.left) < parseInt(document.getElementById('radB').style.left) + 95)
	{
		document.getElementById('alienB1').src='bilder/empty/empty.png';
		clearInterval(yourVar);
		skjutit--;
		document.getElementById('skott').style.left = parseInt(document.getElementById('skepp').style.left) + 43 + 'px';
		document.getElementById('skott').style.top = document.getElementById('skepp').style.top + 810 + 'px';
		traffadB1++;
		pointsC();
	}
	
	else if(traffadB2 == 0 && parseInt(document.getElementById('skott').style.top) < parseInt(document.getElementById('radB').style.top) + 50 && 
	parseInt(document.getElementById('skott').style.top) > parseInt(document.getElementById('radB').style.top) &&
	parseInt(document.getElementById('skott').style.left) > parseInt(document.getElementById('radB').style.left) + 115 &&
	parseInt(document.getElementById('skott').style.left) < parseInt(document.getElementById('radB').style.left) + 190)
	{
		document.getElementById('alienB2').src='bilder/empty/empty.png';
		clearInterval(yourVar);
		skjutit--;
		document.getElementById('skott').style.left = parseInt(document.getElementById('skepp').style.left) + 43 + 'px';
		document.getElementById('skott').style.top = document.getElementById('skepp').style.top + 810 + 'px';
		traffadB2++;
		pointsC();
	}
	
	else if(traffadB3 == 0 && parseInt(document.getElementById('skott').style.top) < parseInt(document.getElementById('radB').style.top) + 50 &&
	parseInt(document.getElementById('skott').style.top) > parseInt(document.getElementById('radB').style.top) && 
	parseInt(document.getElementById('skott').style.left) > parseInt(document.getElementById('radB').style.left) + 210 &&
	parseInt(document.getElementById('skott').style.left) < parseInt(document.getElementById('radB').style.left) + 285)
	{
		document.getElementById('alienB3').src='bilder/empty/empty.png';
		clearInterval(yourVar);
		skjutit--;
		document.getElementById('skott').style.left = parseInt(document.getElementById('skepp').style.left) + 43 + 'px';
		document.getElementById('skott').style.top = document.getElementById('skepp').style.top + 810 + 'px';
		traffadB3++;
		pointsC();
	}
	
	else if(traffadB4 == 0 && parseInt(document.getElementById('skott').style.top) < parseInt(document.getElementById('radB').style.top) + 50 && 
	parseInt(document.getElementById('skott').style.top) > parseInt(document.getElementById('radB').style.top) &&
	parseInt(document.getElementById('skott').style.left) > parseInt(document.getElementById('radB').style.left) + 305 &&
	parseInt(document.getElementById('skott').style.left) < parseInt(document.getElementById('radB').style.left) + 380)
	{
		document.getElementById('alienB4').src='bilder/empty/empty.png';
		clearInterval(yourVar);
		skjutit--;
		document.getElementById('skott').style.left = parseInt(document.getElementById('skepp').style.left) + 43 + 'px';
		document.getElementById('skott').style.top = document.getElementById('skepp').style.top + 810 + 'px';
		traffadB4++;
		pointsC();
	}
	
	else if(traffadB5 == 0 && parseInt(document.getElementById('skott').style.top) < parseInt(document.getElementById('radB').style.top) + 50 && 
	parseInt(document.getElementById('skott').style.top) > parseInt(document.getElementById('radB').style.top) &&
	parseInt(document.getElementById('skott').style.left) > parseInt(document.getElementById('radB').style.left) + 400 &&
	parseInt(document.getElementById('skott').style.left) < parseInt(document.getElementById('radB').style.left) + 475)
	{
		document.getElementById('alienB5').src='bilder/empty/empty.png';
		clearInterval(yourVar);
		skjutit--;
		document.getElementById('skott').style.left = parseInt(document.getElementById('skepp').style.left) + 43 + 'px';
		document.getElementById('skott').style.top = document.getElementById('skepp').style.top + 810 + 'px';
		traffadB5++;
		pointsC();
	}
	
	else if(traffadB6 == 0 && parseInt(document.getElementById('skott').style.top) < parseInt(document.getElementById('radB').style.top) + 50 && 
	parseInt(document.getElementById('skott').style.top) > parseInt(document.getElementById('radB').style.top) &&
	parseInt(document.getElementById('skott').style.left) > parseInt(document.getElementById('radB').style.left) + 495 &&
	parseInt(document.getElementById('skott').style.left) < parseInt(document.getElementById('radB').style.left) + 570)
	{
		document.getElementById('alienB6').src='bilder/empty/empty.png';
		clearInterval(yourVar);
		skjutit--;
		document.getElementById('skott').style.left = parseInt(document.getElementById('skepp').style.left) + 43 + 'px';
		document.getElementById('skott').style.top = document.getElementById('skepp').style.top + 810 + 'px';
		traffadB6++;
		pointsC();
	}
	
	else if(traffadB7 == 0 && parseInt(document.getElementById('skott').style.top) < parseInt(document.getElementById('radB').style.top) + 50 && 
	parseInt(document.getElementById('skott').style.top) > parseInt(document.getElementById('radB').style.top) &&
	parseInt(document.getElementById('skott').style.left) > parseInt(document.getElementById('radB').style.left) + 590 &&
	parseInt(document.getElementById('skott').style.left) < parseInt(document.getElementById('radB').style.left) + 665)
	{
		document.getElementById('alienB7').src='bilder/empty/empty.png';
		clearInterval(yourVar);
		skjutit--;
		document.getElementById('skott').style.left = parseInt(document.getElementById('skepp').style.left) + 43 + 'px';
		document.getElementById('skott').style.top = document.getElementById('skepp').style.top + 810 + 'px';
		traffadB7++;
		pointsC();
	}
	
	else if(traffadB8 == 0 && parseInt(document.getElementById('skott').style.top) < parseInt(document.getElementById('radB').style.top) + 50 && 
	parseInt(document.getElementById('skott').style.top) > parseInt(document.getElementById('radB').style.top) &&
	parseInt(document.getElementById('skott').style.left) > parseInt(document.getElementById('radB').style.left) + 685 &&
	parseInt(document.getElementById('skott').style.left) < parseInt(document.getElementById('radB').style.left) + 760)
	{
		document.getElementById('alienB8').src='bilder/empty/empty.png';
		clearInterval(yourVar);
		skjutit--;
		document.getElementById('skott').style.left = parseInt(document.getElementById('skepp').style.left) + 43 + 'px';
		document.getElementById('skott').style.top = document.getElementById('skepp').style.top + 810 + 'px';
		traffadB8++;
		pointsC();
	}
	
	else if(traffadB9 == 0 && parseInt(document.getElementById('skott').style.top) < parseInt(document.getElementById('radB').style.top) + 50 && 
	parseInt(document.getElementById('skott').style.top) > parseInt(document.getElementById('radB').style.top) &&
	parseInt(document.getElementById('skott').style.left) > parseInt(document.getElementById('radB').style.left) + 780 &&
	parseInt(document.getElementById('skott').style.left) < parseInt(document.getElementById('radB').style.left) + 855)
	{
		document.getElementById('alienB9').src='bilder/empty/empty.png';
		clearInterval(yourVar);
		skjutit--;
		document.getElementById('skott').style.left = parseInt(document.getElementById('skepp').style.left) + 43 + 'px';
		document.getElementById('skott').style.top = document.getElementById('skepp').style.top + 810 + 'px';
		traffadB9++;
		pointsC();
	}
	
	else if(traffadB10 == 0 && parseInt(document.getElementById('skott').style.top) < parseInt(document.getElementById('radB').style.top) + 50 && 
	parseInt(document.getElementById('skott').style.top) > parseInt(document.getElementById('radB').style.top) &&
	parseInt(document.getElementById('skott').style.left) > parseInt(document.getElementById('radB').style.left) + 875 &&
	parseInt(document.getElementById('skott').style.left) < parseInt(document.getElementById('radB').style.left) + 950)
	{
		document.getElementById('alienB10').src='bilder/empty/empty.png';
		clearInterval(yourVar);
		skjutit--;
		document.getElementById('skott').style.left = parseInt(document.getElementById('skepp').style.left) + 43 + 'px';
		document.getElementById('skott').style.top = document.getElementById('skepp').style.top + 810 + 'px';
		traffadB10++;
		pointsC();
	}
	
	/////////////////////////// A RADEN!! //////////////////////////
	
	else if(traffadA1 == 0 && parseInt(document.getElementById('skott').style.top) < parseInt(document.getElementById('radA').style.top) + 50 && 
	parseInt(document.getElementById('skott').style.top) > parseInt(document.getElementById('radA').style.top) &&
	parseInt(document.getElementById('skott').style.left) > parseInt(document.getElementById('radA').style.left) + 20 &&
	parseInt(document.getElementById('skott').style.left) < parseInt(document.getElementById('radA').style.left) + 95)
	{
		document.getElementById('alienA1').src='bilder/empty/empty.png';
		clearInterval(yourVar);
		skjutit--;
		document.getElementById('skott').style.left = parseInt(document.getElementById('skepp').style.left) + 43 + 'px';
		document.getElementById('skott').style.top = document.getElementById('skepp').style.top + 810 + 'px';
		traffadA1++;
		pointsD();
	}
	
	else if(traffadA2 == 0 && parseInt(document.getElementById('skott').style.top) < parseInt(document.getElementById('radA').style.top) + 50 && 
	parseInt(document.getElementById('skott').style.top) > parseInt(document.getElementById('radA').style.top) &&
	parseInt(document.getElementById('skott').style.left) > parseInt(document.getElementById('radA').style.left) + 115 &&
	parseInt(document.getElementById('skott').style.left) < parseInt(document.getElementById('radA').style.left) + 190)
	{
		document.getElementById('alienA2').src='bilder/empty/empty.png';
		clearInterval(yourVar);
		skjutit--;
		document.getElementById('skott').style.left = parseInt(document.getElementById('skepp').style.left) + 43 + 'px';
		document.getElementById('skott').style.top = document.getElementById('skepp').style.top + 810 + 'px';
		traffadA2++;
		pointsD();
	}
	
	else if(traffadA3 == 0 && parseInt(document.getElementById('skott').style.top) < parseInt(document.getElementById('radA').style.top) + 50 && 
	parseInt(document.getElementById('skott').style.top) > parseInt(document.getElementById('radA').style.top) &&
	parseInt(document.getElementById('skott').style.left) > parseInt(document.getElementById('radA').style.left) + 210 &&
	parseInt(document.getElementById('skott').style.left) < parseInt(document.getElementById('radA').style.left) + 285)
	{
		document.getElementById('alienA3').src='bilder/empty/empty.png';
		clearInterval(yourVar);
		skjutit--;
		document.getElementById('skott').style.left = parseInt(document.getElementById('skepp').style.left) + 43 + 'px';
		document.getElementById('skott').style.top = document.getElementById('skepp').style.top + 810 + 'px';
		traffadA3++;
		pointsD();
	}
	
	else if(traffadA4 == 0 && parseInt(document.getElementById('skott').style.top) < parseInt(document.getElementById('radA').style.top) + 50 && 
	parseInt(document.getElementById('skott').style.top) > parseInt(document.getElementById('radA').style.top) &&
	parseInt(document.getElementById('skott').style.left) > parseInt(document.getElementById('radA').style.left) + 305 &&
	parseInt(document.getElementById('skott').style.left) < parseInt(document.getElementById('radA').style.left) + 380)
	{
		document.getElementById('alienA4').src='bilder/empty/empty.png';
		clearInterval(yourVar);
		skjutit--;
		document.getElementById('skott').style.left = parseInt(document.getElementById('skepp').style.left) + 43 + 'px';
		document.getElementById('skott').style.top = document.getElementById('skepp').style.top + 810 + 'px';
		traffadA4++;
		pointsD();
	}
	
	else if(traffadA5 == 0 && parseInt(document.getElementById('skott').style.top) < parseInt(document.getElementById('radA').style.top) + 50 && 
	parseInt(document.getElementById('skott').style.top) > parseInt(document.getElementById('radA').style.top) &&
	parseInt(document.getElementById('skott').style.left) > parseInt(document.getElementById('radA').style.left) + 400 &&
	parseInt(document.getElementById('skott').style.left) < parseInt(document.getElementById('radA').style.left) + 475)
	{
		document.getElementById('alienA5').src='bilder/empty/empty.png';
		clearInterval(yourVar);
		skjutit--;
		document.getElementById('skott').style.left = parseInt(document.getElementById('skepp').style.left) + 43 + 'px';
		document.getElementById('skott').style.top = document.getElementById('skepp').style.top + 810 + 'px';
		traffadA5++;
		pointsD();
	}
	
	else if(traffadA6 == 0 && parseInt(document.getElementById('skott').style.top) < parseInt(document.getElementById('radA').style.top) + 50 && 
	parseInt(document.getElementById('skott').style.top) > parseInt(document.getElementById('radA').style.top) &&
	parseInt(document.getElementById('skott').style.left) > parseInt(document.getElementById('radA').style.left) + 495 &&
	parseInt(document.getElementById('skott').style.left) < parseInt(document.getElementById('radA').style.left) + 570)
	{
		document.getElementById('alienA6').src='bilder/empty/empty.png';
		clearInterval(yourVar);
		skjutit--;
		document.getElementById('skott').style.left = parseInt(document.getElementById('skepp').style.left) + 43 + 'px';
		document.getElementById('skott').style.top = document.getElementById('skepp').style.top + 810 + 'px';
		traffadA6++;
		pointsD();
	}
	
	else if(traffadA7 == 0 && parseInt(document.getElementById('skott').style.top) < parseInt(document.getElementById('radA').style.top) + 50 && 
	parseInt(document.getElementById('skott').style.top) > parseInt(document.getElementById('radA').style.top) &&
	parseInt(document.getElementById('skott').style.left) > parseInt(document.getElementById('radA').style.left) + 590 &&
	parseInt(document.getElementById('skott').style.left) < parseInt(document.getElementById('radA').style.left) + 665)
	{
		document.getElementById('alienA7').src='bilder/empty/empty.png';
		clearInterval(yourVar);
		skjutit--;
		document.getElementById('skott').style.left = parseInt(document.getElementById('skepp').style.left) + 43 + 'px';
		document.getElementById('skott').style.top = document.getElementById('skepp').style.top + 810 + 'px';
		traffadA7++;
		pointsD();
	}
	
	else if(traffadA8 == 0 && parseInt(document.getElementById('skott').style.top) < parseInt(document.getElementById('radA').style.top) + 50 && 
	parseInt(document.getElementById('skott').style.top) > parseInt(document.getElementById('radA').style.top) &&
	parseInt(document.getElementById('skott').style.left) > parseInt(document.getElementById('radA').style.left) + 685 &&
	parseInt(document.getElementById('skott').style.left) < parseInt(document.getElementById('radA').style.left) + 760)
	{
		document.getElementById('alienA8').src='bilder/empty/empty.png';
		clearInterval(yourVar);
		skjutit--;
		document.getElementById('skott').style.left = parseInt(document.getElementById('skepp').style.left) + 43 + 'px';
		document.getElementById('skott').style.top = document.getElementById('skepp').style.top + 810 + 'px';
		traffadA8++;
		pointsD();
	}
	
	else if(traffadA9 == 0 && parseInt(document.getElementById('skott').style.top) < parseInt(document.getElementById('radA').style.top) + 50 && 
	parseInt(document.getElementById('skott').style.top) > parseInt(document.getElementById('radA').style.top) &&
	parseInt(document.getElementById('skott').style.left) > parseInt(document.getElementById('radA').style.left) + 780 &&
	parseInt(document.getElementById('skott').style.left) < parseInt(document.getElementById('radA').style.left) + 855)
	{
		document.getElementById('alienA9').src='bilder/empty/empty.png';
		clearInterval(yourVar);
		skjutit--;
		document.getElementById('skott').style.left = parseInt(document.getElementById('skepp').style.left) + 43 + 'px';
		document.getElementById('skott').style.top = document.getElementById('skepp').style.top + 810 + 'px';
		traffadA9++;
		pointsD();
	}
	
	else if(traffadA10 == 0 && parseInt(document.getElementById('skott').style.top) < parseInt(document.getElementById('radA').style.top) + 50 && 
	parseInt(document.getElementById('skott').style.top) > parseInt(document.getElementById('radA').style.top) &&
	parseInt(document.getElementById('skott').style.left) > parseInt(document.getElementById('radA').style.left) + 875 &&
	parseInt(document.getElementById('skott').style.left) < parseInt(document.getElementById('radA').style.left) + 950)
	{
		document.getElementById('alienA10').src='bilder/empty/empty.png';
		clearInterval(yourVar);
		skjutit--;
		document.getElementById('skott').style.left = parseInt(document.getElementById('skepp').style.left) + 43 + 'px';
		document.getElementById('skott').style.top = document.getElementById('skepp').style.top + 810 + 'px';
		traffadA10++;
		pointsD();
	}
	
	if(parseInt(document.getElementById('skott').style.left) > parseInt(document.getElementById('enemy').style.left) && parseInt(document.getElementById('skott').style.left) < parseInt(document.getElementById('enemy').style.left) + 110 && parseInt(document.getElementById('skott').style.top) < parseInt(document.getElementById('enemy').style.top) + 60 && health > 0)
	{
		if(health == 1)
		{
			document.getElementById('enemy').style.top = -1000 + "px";
			pointsEnemy();
			clearInterval(Enemy);
		}
		document.getElementById('skott').style.left = parseInt(document.getElementById('skepp').style.left) + 43 + 'px';
		document.getElementById('skott').style.top = document.getElementById('skepp').style.top + 810 + 'px';
		clearInterval(yourVar);
		enemytraffad++;
		health--;
		skjutit--;
	}
	
}

function pointsD()
{
	score = score + 1000;
	document.getElementById("scorediv").innerHTML = "SCORE: " + score;
}

function pointsC()
{
	score = score + 500;
	document.getElementById("scorediv").innerHTML = "SCORE: " + score;
}

function pointsB()
{
	score = score + 250;
	document.getElementById("scorediv").innerHTML = "SCORE: " + score;
}

function pointsA()
{
	score = score + 100;
	document.getElementById("scorediv").innerHTML = "SCORE: " + score;
}

function pointsEnemy()
{
	score = score + 5000;
	document.getElementById("scorediv").innerHTML = "SCORE: " + score;
}








