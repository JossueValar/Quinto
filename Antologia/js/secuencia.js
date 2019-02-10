

function sec(){
	var n1=document.getElementById("num1").value;
	var n2=document.getElementById("num2").value;
	var n3=document.getElementById("num3").value;
	var vec=new Array(3);

	if((n1>n2) && (n1>n3)){
		vec[0]=n1;
		
		if(n2>n3){
			vec[1]=n2;
			vec[2]=n3;
		}
		else{
			vec[1]=n3;
			vec[2]=n2;
		}
	}
		if((n2>n1) && (n2>n3)){
		vec[0]=n2;
		
		if(n1>n3){
			vec[1]=n1;
			vec[2]=n3;
		}
		else{
			vec[1]=n3;
			vec[2]=n1;
		}
	}
		if((n3>n2) && (n3>n1)){
		vec[0]=n3;
		
		if(n1>n2){
			vec[1]=n1;
			vec[2]=n2;
		}
		else{
			vec[1]=n2;
			vec[2]=n1;
		}
	}

	document.getElementById("j").innerHTML=vec[0];
	document.getElementById("jj").innerHTML=vec[1];
	document.getElementById("jjj").innerHTML=vec[2];
	
	
}