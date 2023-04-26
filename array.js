let arr = [
[1, 'leopard kim', 50],
[2, 'ntera cheon', 54],
[3, 'hook hong', 54],
[4, 'edu kim', 46]
];

arr.forEach((it, idx)=>{
    console.log(it, idx, idx+1);
});

let data = arr.map((item)=>{
    return item[1];
});

console.log(data);


let objArr = [
    {name:'leopard kim', age:50},
    {name:'ntera', age:53},
    {name:'hook hong', age:53},
    {name:'ledu kim', age:46}
    ];

let data2 = objArr.map((item)=>{
    return item.age
});
console.log(data2);

data2 = objArr.filter((item)=>{
    return item.age === 53
});
console.log(data2);

data2 = objArr.filter((item)=>{
    return item.name.startsWith("l")
});
console.log(data2);