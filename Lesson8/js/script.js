for (let i = 0; i < 6; i++) {
    console.log(i);
}

let k = 0;
while (k < 5) {
    k++;
    console.log('k: ' + k);
}

let sum = 0;
let p = 0;
while (p <= 3) {
    sum = sum + p;
    p++;
}
console.log('sum=' + sum);
let out = document.querySelector('.out');
p = 0;
let flag = 3;
let outStr = '';
while (p < 4) {
    let p1 = 0;
    while (p1 < 4) {
        if (p1 < flag) {
            outStr += '0';
        }
        else {
            outStr += '*';
        }

        p1++;
    }
    flag--;
    outStr += '<br>';
    p++;
}
out.innerHTML = outStr;