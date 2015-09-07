var n1 = 0; // Variável da janela Créditos
var n2 = 0; // Variável da janela Comentário

function creditos(){
	if(n1 == 0){
		document.getElementById('janela').hidden = false;
		document.getElementById('coment').hidden = true;
		n1 = 1;
		n2 = 0;
	}else{
		document.getElementById('janela').hidden = true;
		n1 = 0;
	
	}
}

function texto(){
	if(n2 == 0){
		document.getElementById('coment').hidden = false;
		document.getElementById('janela').hidden = true;
		n2 = 1;
		n1 = 0;
	}else{
		document.getElementById('coment').hidden = true;
		n2 = 0;
	
	}
}