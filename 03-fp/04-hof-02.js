//高階関数higherOrderFunctionsを定義する
function higherOrderFunctions(data, f){
  for(var key in data){
   f(data[key],key);
  }
 }
 
 //ユーザー定義関数(高階関数の引数となる関数)を定義する
 function userFunction(value, key){
  console.log(key + ':' + value);
 }
 
 //実行
 var array = [5,6,7,8,9,10];
 higherOrderFunctions(array, userFunction);//0:5 1:6  2:7  3:8  4:9  5:10
 //第一引数に処理する配列
 //第二引数に配列を処理するユーザー定義関数(高階関数の引数となる関数)