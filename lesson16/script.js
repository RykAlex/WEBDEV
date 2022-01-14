let arr = [4, 7, 9];
let allP = document.getElementsByTagName('p');
console.log(allP);
// for (let i = 0; i < allP.length; i++) {
//     console.log(allP[i]);

// }
// for (let key in arr) {
//     console.log(arr[key]);
// }
for (let item of arr) {
  console.log(item);
}
