let stNum = +prompt('stNum:');
let rdNum = +prompt('rdNum:');
let thNum = +prompt('thNum:');

if (stNum >= rdNum && stNum >= thNum && rdNum >= thNum) {
    alert(''+stNum + "," + ''+rdNum + "," + ''+thNum);
}
else if (stNum >= rdNum && stNum >= thNum && thNum >= rdNum) {
    alert(''+stNum +"," + ''+thNum + "," + ''+rdNum);
}
else if (rdNum >= stNum && rdNum >= thNum && stNum >= thNum) {
    alert(''+rdNum + "," + ''+stNum + "," + ''+thNum);
}
else if (rdNum >= stNum && rdNum >= thNum && thNum >= stNum) {
    alert(''+rdNum + "," + ''+thNum + "," + ''+stNum);
}
else if (thNum >= stNum && thNum >= rdNum && rdNum >= stNum) {
    alert(''+thNum + "," + ''+rdNum + "," + ''+stNum);
}
else if (thNum >= stNum && thNum >= rdNum && stNum >= rdNum) {
    alert(''+thNum + "," + ''+stNum + "," + ''+rdNum);
}
// else alert ("Invalid");



/////////
// V.0 แสดงเฉพาะตัวเลขมากสุด
// let x = Number(prompt('Enter number 1'));
// let y = +prompt('Enter number 2');
// let z = prompt('Enter number 3') * 1;

// //case1 : x มากสุด
// //case2 : y มากสุด
// //case3 : z มากสุด

// let max; 
// if ( x > y && z > z) {
//     max = x;
// } else if (y > x && y > z) {
//     max = y;
// } else if (z > x && z > y) {
//     max = z;
// }

// V.1 เรียงตัวเลข
// let x = +prompt('Enter number');
// let y = +prompt('Enter number');
// let z = +prompt('Enter number');

// if ( x > y && x > z) {
//     max = x;
//     if (y >= z) {
//         mid = y;
//         min = z;
//     } else {
//         mid = z;
//         min = y;
//     } 
// }
// else if (y > x && y > z){
//     max = y;
//     if (x >= z) {
//         mid = x;
//         min = z;
//     } else {
//         mid = z;
//         min = x;
//     }
// }
// else if (z > x && z > y) {
//     max = z;
//     if (x >= y) {
//         mid = x;
//         min = y;
//     } else {
//         mid = y;
//         min = x;
//     }
// }
// // console.log(`${max} : ${mid} : ${min}`);
// alert(`${max} : ${mid} : ${min}`);


