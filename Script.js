function adicionarCaractere(valor){
  document.getElementById("visor").value
+= valor;
}
 function Limpar(){
   document.getElementById("visor").value = ""
 }
function calcular(){
  let visor = document.getElementById("visor");
   try{
     visor.value =eval(visor.value);
   }
  catch {
    visor.value = alert("ERRO, TENTE NOVAMENTE!");
  }
}
function apagar(){
  let visor = document.getElementById("visor");
  visor.value= visor.value.slice(0, -1);
}