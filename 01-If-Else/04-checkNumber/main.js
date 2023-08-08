let input = prompt('number: ');

if (num === null || num.trim() === '' || isNaN(num)) {// Guard-clause
    alert('Invalid'); 
} 
else if (+num > 0) {
    alert("Positive number");
}
else if (+num === 0){
    alert("Zero");
}
else if (+num < 0) {
    alert("Negative number");
}