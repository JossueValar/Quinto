function par(){
		var num=document.getElementById('numi').value;
		if(num%2==0){
			document.getElementById("El numero "+num+" es par<br>").innerHTML=num;
		}
		else
			document.getElementById("El numero "+num+" es impar<br>").innerHTML=num;
	}