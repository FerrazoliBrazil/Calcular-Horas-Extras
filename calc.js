 var totalHorasDias=0;
 var salarioHoraExtra=0;
 
 function imprimirValorHora(text,paragrafo){
   
    var texto=text;//recebe o descritivo do texto
    var paragrafo=paragrafo;//recebe o identificador da tag span
    var salario = document.getElementById("salarioBruto").value;
    var carga=document.getElementById("cargaHoraria").value;  
    if(carga==="40"){
    var total=salario/200;
    imprimirTexto(texto+"R$"+total.toFixed(2),paragrafo);
    
  }
  else if(carga==="44"){
    var total=salario/220;
    imprimirTexto(texto+"R$"+total.toFixed(2),paragrafo);

  }
    else{var total=salario/150; 
    imprimirTexto(texto+"R$"+total.toFixed(2),paragrafo);
     
  } 

  //switch adicionar outas cargas horárias de trabalho existentes
}
   
function imprimirTexto(text,paragrafo){ 
    var elemento=document.createTextNode(text);//criei variavel e criado um texto vindo via parametro 
    paragrafo.appendChild(elemento);//anexa no span o nó
}
  

 function limparDados(parametro){
     var id=parametro;
    document.getElementById(id).innerHTML="";
    
}

function limparDadosCarga(parametro,parametro1){
  var id=parametro;
  var id2=parametro1;
  
 document.getElementById(id).innerHTML="";
 document.getElementById(id2).innerHTML="";
 //document.getElementById("cargaHoraria").value = "-";
 //document.getElementById("porcentagem").value= "-";
}


function teste(text,paragrafo){
  var texto=text;//recebe o descritivo do texto
  var paragrafo=paragrafo;//recebe o id da tag span 'horaExtra'
  var salario = document.getElementById("salarioBruto").value;
  var porcentagem=document.getElementById("porcentagem").value; 
  var percentual= porcentagem/100;
  var carga=document.getElementById("cargaHoraria").value;  

  if(carga==="40"){
  var total=salario/200;//calcula hora trabalhada sem hora extra
  var ganhocomextra=total*percentual;
  var horaextra=total+ganhocomextra;
  salarioHoraExtra=horaextra.toFixed(2);
  imprimirTexto(texto+ " "+horaextra.toFixed(2)+" ",paragrafo);
  

  
}
else if(carga==="44"){
  var total=salario/220;//calcula hora trabalhada sem hora extra
  var ganhocomextra=total*percentual;
  var horaextra=total+ganhocomextra;
  salarioHoraExtra=horaextra.toFixed(2);
  imprimirTexto(texto+ " "+horaextra.toFixed(2)+" ",paragrafo);

}
else{
    var total=salario/150;//calcula hora trabalhada sem hora extra
    var ganhocomextra=total*percentual;
    var horaextra=total+ganhocomextra;
    salarioHoraExtra=horaextra.toFixed(2);
    
    imprimirTexto(texto+ " "+horaextra.toFixed(2)+" ",paragrafo);
    
} 
  
 // var salarioextra=salario+(salario*(porcentagem/100);
  
//fazer um esquema tipo reset para zerar a hora extra quando for reiniciar a operação
  
}

function imprimirHoraDia(dado1,dado2,text,paragrafo){ 
  var texto=text;//recebe o descritivo do texto
  var paragrafo=paragrafo;//recebe o id da tag span que ira receber o impresso da hora do dia
   var nomeId=dado1;//PASSA O NOME DO CAMPO HORA ENTRADA
   var nomeId2=dado2;//passa o nome do campo hora saída
   var valorInput=document.getElementById(dado1).value;//transforma em valor
   var valorInput2=document.getElementById(dado2).value;//transforma em valor
   var separarHoraMinuto=valorInput.split(":", 2);
   var separarHoraMinuto2=valorInput2.split(":", 2);
   var pegarHora=separarHoraMinuto[0];
   var pegarMinuto= separarHoraMinuto[1];
   var pegarHora2=separarHoraMinuto2[0];
   var pegarMinuto2=separarHoraMinuto2[1];
   //------------------------------------------//
   var hora=pegarHora*60;//transformei em minuto;
   var minuto=pegarMinuto;
   var totalMinutos=parseInt(hora)+parseInt(minuto);
   
   //----------------------------------------//
   var hora2=pegarHora2*60;//transformei em minuto;
   var minuto2=pegarMinuto2;
   var totalMinutos2=parseInt(hora2)+parseInt(minuto2);
   
   var contahora=totalMinutos2-totalMinutos;
   var horageral =(totalMinutos2-totalMinutos)/60;
   var tiraminuto=contahora%60;

   imprimirTexto(texto+ " "+Math.trunc(horageral)+" hora(s) "+tiraminuto+" minutos(s) ",paragrafo);
   
   
   totalHorasDias=totalHorasDias+contahora;
   var horasGeral=totalHorasDias/60;
   var minutosGeral=totalHorasDias%60;
   

   limparDados('tot');
   imprimirTexto(Math.trunc(horasGeral) +" hora(s) e "+ minutosGeral+" minuto(s)"+" x R$ "+ salarioHoraExtra +" = R$ "+(horasGeral*salarioHoraExtra).toFixed(2),tot);
   
   

 
  
 }

 var btn = document.querySelector("#refresh");
btn.addEventListener("click", function() {
    
    location.reload();
});




 