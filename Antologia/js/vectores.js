var vec=new Array(10);
var may=new Array(10);
function numeroAleatorio(max,min){
			var num=Math.round(Math.random()*(max-min)+min);
			return num;
		}

function numer(){

var n=0
var i=0;
var ma=0;

		
		for(i=0;i<vec.length;i++){
			vec[i]=numeroAleatorio(1000,0);
			for(j=0;j<i;j++){
				if(vec[i]==vec[j]){
					i--;
				}
			}
		}
		for(i=0;i<=9;i++){ 
			for(m=0;m<=9;m++){//aqui lo compara con el resto del vector
				if (vec[m]>ma) {
					ma=vec[m];
					n=m;
				}
				
			}
			may[i]=ma; //resetea la posicion en el vector para que no ponga el mismo numero todo el rato
			vec[n]=0;
			ma=0;

		}


		for(i=0;i<=9;i++){
			document.getElementById("ma").innerHTML=document.getElementById("ma").innerHTML + may[i] + ",";
		}
		
}

function oper(){
	var num=document.getElementById("numi").value;
	var si="si esta en el vector";
	var no="no esta en el vector";
	if(num>may[4]){
		for(i=0;i<=3;i++){
			if (num==may[i]) {
				document.getElementById("numii").innerHTML=si;
				break;
			}
			else
				document.getElementById("numii").innerHTML=no;
		}
	}
	else{
			for(i=4;i<=9;i++){
			if (num==may[i]) {
				document.getElementById("numii").innerHTML=si;
				break;
			}
			else
				document.getElementById("numii").innerHTML=no;
		}
	}
}