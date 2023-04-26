
let arr = [1,2,3];

console.log(arr);

let arr2 = arr;
arr2[0] = 0;


console.log(`arr ${arr}, arr2 ${arr2}`);
 
console.log(arr2 == arr);

let arr3 = [...arr];
console.log(`arr ${arr}, arr2 ${arr2}`);
console.log(arr3 == arr);
/*
??
||
*/

const msgAlert = (msg, msg2) => {
    alert(msg); alert(msg2);
}

msgAlert("hi!!", "good");