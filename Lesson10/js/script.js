// let a = 'Иван';
// let b67 = '43';
// let iinNumber = 2324;

// let zodiak = ['Козерог', 1, 1, 19];
// let man = ['Ivan', 'male', 176, 93, 'Ivanov'];
// console.log(zodiak);
// console.log(man);
// console.log('Длина массива');
// console.log(zodiak.length);
// console.log(man.length);
// console.log(man[4]);
// man[0] = 'Sergey';
// console.log(man);

let a = [1, 2, 3, 4];
console.log(a);

let t = a[0];
a[0] = a[a.length - 1];
a[a.length - 1] = t;
console.log(a);
console.log(a[888]);



let out = '';
for (let i = 0; i < a.length; i++) {
    if (a[i] % 2 == 0) {
        out += a[i] + '_ _';
    }
}
document.querySelector('.out-1').innerHTML = out;
let b = [4, 2, 5, 23, 43, 1, 2, 6, 12];
let max = b[0];
for (let i = 0; i < b.length; i++) {
    if (b[i] > max) {
        max = b[i];
    }
}
console.log('max: ' + max);

let sum = 0;

for (let i = 0; i < b.length; i++) {
    sum = sum + b[i];
}
console.log('sum: ' + sum);