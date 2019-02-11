function pagar(){
	var hora=document.getElementById('horas').value;
	var minuto=document.getElementById('minutos').value;
	var dos=2.5;
	var pre=0;
	var horinutos=0;

	horinutos=hora*60;
	minuto=parseInt(minuto)+parseInt(horinutos);

	if(minuto<=60){
	pre=dos;
	document.getElementById("pago").innerHTML=pre;
	}
	else{
		if(minuto<=120){
			pre=dos*2;
			document.getElementById("pago").innerHTML=pre;
		}
		else{
			if(minuto<=180){
				pre=dos*3;
				document.getElementById("pago").innerHTML=pre;
			}
			else{
				if(minuto<=240){
					pre=dos*4;
					document.getElementById("pago").innerHTML=pre;
				}
				else{
					if(minuto<=300){
						pre=dos*5;
						document.getElementById("pago").innerHTML=pre;
					}
					else{
						if(minuto<=360){
							pre=dos*6;
							document.getElementById("pago").innerHTML=pre;
						}
					}
				}
			}
		}
	}

	
	
}