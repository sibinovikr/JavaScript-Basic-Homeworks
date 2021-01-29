let ExampleArray = [3, 5, 6, 8, 11];
let ExampleArrayTwo = [15, 7, 14, 17, 37];

function SumOfMaxAndMin(arr){

var max = arr[0];

for (var i = 0; i<arr.length; i++){
  if(arr[i]>=max){
    max = arr[i];
  }
}

console.log(`This is the max:${max}`);
console.log(typeof(max));

var min = arr[0];

for (var i = 0; i < arr.length; i++){
  if(arr[i] < min){
    min = arr[i];
  }

}

let sum = max + min;
console.log(sum); 
console.log(typeof(sum));

console.log(`This is the ${min}`);
console.log(typeof(min));

return sum;

}

console.log(`The sum is:  ${SumOfMaxAndMin(ExampleArray)}`)
console.log(`The sum is:  ${SumOfMaxAndMin(ExampleArrayTwo)}`)