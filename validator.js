const validator = {
// recebe o número inserido:
  isValid: function (cardNumber){
    //deixa os números em array separados:
    const cardArray = cardNumber.split("");
    //inverte a ordem dos números que estão no array:
    const cardArrayReverse = cardArray.reverse();

    let totalNumbers = 0;
    for (let i = 0; i < cardArrayReverse.length; i++){
    //Se o resto da divisão de i por 2 for zero, multiplica:
      if (i % 2 !== 0) {
        let cardArrayMult = cardArrayReverse[i] * 2;
        console.log(cardArrayMult)
        if (cardArrayMult > 9) {
          const currentNumber = cardArrayMult.toString().split("");
          cardArrayMult = parseInt(currentNumber[0]) + parseInt(currentNumber[1]);
          console.log(cardArrayMult)
          totalNumbers += cardArrayMult;
        }else {
          totalNumbers += cardArrayMult
        }
        //Se o resto da divisão de i por 2 não for zero, mantem o mesmo número
      } else {
        totalNumbers += parseInt(cardArrayReverse[i]);
      }
    }
    // O número é válido se a soma dos dígitos é múltiplo de 10
    if (totalNumbers % 10 === 0) {
      return true;
    } else {
      return false;
    }
  },

  // pegar o número que está válido e deixar visivel apenas os últimos 4 digitos.
  maskify: function (cardNumber) {
    const x = cardNumber.split(""); 
    for (let i=0; i< x.length - 4; i++){
      x[i] = "#";
    }
    const maskedCard = x.join("");
    return maskedCard; 
  }
}



export default validator;
