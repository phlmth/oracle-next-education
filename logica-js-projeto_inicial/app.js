let maxNum = 100

let secretNumber = Math.floor(Math.random() * (maxNum + 1));
console.log(secretNumber);

alert(`tente adivinhar o número que estou pensando de 1 a ${maxNum}`);



let tentativas = 1;
let guess = prompt(`escolha um número entre 1 e 5000`);
while(guess != secretNumber)
{
    if(secretNumber < guess)
    {
        guess = prompt(`o número secreto é menor que ${guess}`);
        tentativas++;
    }
    else (secretNumber > guess)
    {
        guess = prompt(`o número secreto é maior que ${guess}`);
        tentativas++;
    }

}
alert(`você acertou!\no número secreto é: ${secretNumber}\nnúmero de tentativas: ${tentativas}`)
