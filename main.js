function getSevenCol(arr){
var arrStr = arr.join('');
var numberOfSeven = 0
for (i in arrStr){
  if (arrStr[i] == 7){
    numberOfSeven += 1
  }
}
return numberOfSeven;
}

console.log(getSevenCol([1, 7, 4, 77, 773, 24, 87]));


function arrToStr(arr){
if (arr.length%2 == 0){
secArr = arr.slice(arr.length/2);
secArr.reverse();
str = '';
for (i in secArr){
  str += arr[i] + secArr[i];
}}
else {
  secArr = arr.slice(arr.length/2 + 1);
  secArr.reverse();
  str = '';
  for (i in secArr){
    str += arr[i] + secArr[i];
}
str+= arr[arr.length / 2 - 0.5];
}
return str;
};


console.log(arrToStr(["a", "b", "c", "d", "e", "f", "g"]));
