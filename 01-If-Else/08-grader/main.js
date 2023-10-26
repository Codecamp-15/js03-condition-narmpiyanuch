let point = prompt('exam point:')

if (point === null || point.trim() === '' || isNaN(point)) {
    alert('Invalid'); 
} 
else if (point >= 80) {
    alert("A");
}
else if (point >=70 && point < 80) {
    alert("B");
}
else if (point >=60 && point < 70) {
    alert("C");
}
else if (point >=50 && point < 60) {
    alert("D");
}
else alert("F");