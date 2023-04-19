let solution=document.getElementById('result');
function verificaSequenciaFibonacci(numero) {
  
    let firstnumber = 0;
    let secondnumber = 1;
  
   
    for (let i = 0; secondnumber<= numero; i++) {
     
      if (numero === secondnumber) {
        return "O número " + numero + " pertence à sequência de Fibonacci.";
      }
  
     
      let prox = firstnumber + secondnumber;
      firstnumber = secondnumber;
      secondnumber = prox;
    }
  
    return "O número " + numero + " não pertence à sequência de Fibonacci.";
  }
  
  
  let numeroIn = 13; 
  
 
  let resultado = verificaSequenciaFibonacci(numeroIn);
 console.log(resultado);