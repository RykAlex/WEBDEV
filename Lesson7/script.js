let f1 = document.querySelector('.f-1');
function one() {
	console.log('work');
}
one();
f1.onclick = one;
console.log(1 + one());
console.log(one());


function two() {
	console.log('work 222222');
	return 54;
}
two();

console.log(1 + two());

let a = 8;
let b = 9;


function multi() {
	console.log(a * b);
	return a * b;
}

let c1 = multi();
let c2 = 10 * multi();
console.log(c1, c2);


function multi2(x = 8, y = 9) {
	return x * y;
}
console.log(multi2(4, 5));
console.log(multi2(4, a));


