var numericVal=5;
numericVal=4;

function rewrite(param){
    param=10;
}

rewrite(numericVal);
console.log(numericVal);

var numericArray=[1,2,3];
function rewrite2(arr){
    arr[1]=1000;

}
rewrite2(numericArray);
console.log(numericArray);