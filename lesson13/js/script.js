const a = {
    'a': 5,
    'b': 'Hello',
    'z2': 'Hi',
    y43: 1999,
};
delete a.a;
a.yyyy = 555;
a.b = 'uuu';
console.log(a);
console.log(a.z2);
let k = 'y43';

console.log(a[k]);

// document.querySelector('.out').innerHTML = a;
let out = '';
for (let key in a) {
    out += a[key] + ' ';
}
document.querySelector('.out').innerHTML = out;