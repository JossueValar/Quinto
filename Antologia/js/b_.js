function pagar(){
	var cami=document.getElementById('camisas').value;
	var de1=0.125;
	var de2=0.2;
	var de3=0.315;
	var precio=0;
	var precio1=0;
	var pre=0;

	if(cami<=4){
	precio=cami*2000;
	precio1=precio*de1;
	pre=precio-precio1;
	document.getElementById("pago").innerHTML=precio;
	document.getElementById("des").innerHTML=precio1;
	document.getElementById("pagodes").innerHTML=pre;
	}
	else{
		if (cami>5 || cami<=8) {
			precio=cami*2000;
			precio1=precio/de2;
			document.getElementById("pago").innerHTML=precio;
			document.getElementById("des").innerHTML=de2;
			document.getElementById("pagodes").innerHTML=precio1;
		}
		else
			precio=cami*2000;
			precio1=precio/de3;
			document.getElementById("pago").innerHTML=precio;
			document.getElementById("des").innerHTML=de3;
			document.getElementById("pagodes").innerHTML=precio1;
	}

	
	
}