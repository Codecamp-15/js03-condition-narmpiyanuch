let point = prompt('exam point:')

let grade = (point >= 80) ? "A" :
        (point >= 70 && point < 80) ? "B" : 
        (point >= 60 && point < 70) ? "C" : 
        (point >= 50 && point < 60) ? "D" : "F";

alert(grade);