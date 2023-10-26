let inputNum1 = prompt('number1 :');
let inputNum2 = prompt('number2 :');

if (inputNum1 === null || inputNum1.trim() === '' || isNaN(inputNum1)) {
    alert('Invalid'); 
}
else if (inputNum2 === null || inputNum2.trim() === '' || isNaN(inputNum2)) {
    alert('Invalid'); 
} 
else if (sumNum = +inputNum1 + +inputNum2) {
    alert(sumNum);
}