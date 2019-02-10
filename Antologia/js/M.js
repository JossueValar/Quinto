function sec(){
	var n1=document.getElementById("c1").value;
	var vec=new Array(3);

	var a=0;
	var b=0;
	var c=0;
	var res=0;
	var res1=0;
	var res2=0;
	var asd=0;



	res=n1%10;
	a=res;
	b=(n1-a)%100/10;
	asd=n1%1000/100;
	res2=Math.trunc(asd);
	c=res2;

	if((a>b) && (a>c)){
		vec[0]=a;
		
		if(b>c){
			vec[1]=b;
			vec[2]=c;
		}
		else{
			vec[1]=c;
			vec[2]=b;
		}
	}
		if((b>a) && (b>c)){
		vec[0]=b;
		
		if(a>c){
			vec[1]=a;
			vec[2]=c;
		}
		else{
			vec[1]=c;
			vec[2]=a;
		}
	}
		if((c>b) && (c>a)){
		vec[0]=c;
		
		if(a>b){
			vec[1]=a;
			vec[2]=b;
		}
		else{
			vec[1]=b;
			vec[2]=a;
		}
	}



	document.getElementById("j").innerHTML=a;
	document.getElementById("jj").innerHTML=b;
	document.getElementById("jjj").innerHTML=c;
	
	
}