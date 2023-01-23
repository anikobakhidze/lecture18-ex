// 1.
// მოცემულია ობიექტი 
// let obj = {
//     a:10,
//     b:13,
//     c:111,
//     d:32,
//     e:600,
// }
// დაწერეთ იტერატორი, რომელიც დაალაგებს რიცხვებს კლებადობით და დააბრუნებს ობიექტის მნიშვნელობებს(values),
// გამოიძახეთ იტერატორი 3-ჯერ
// let obj = {
//     a:10,
//     b:13,
//     c:111,
//     d:32,
//     e:600,
// }
// obj[Symbol.iterator]=function(){
//   let sortObj=Object.values(obj).sort((a,b)=> b-a);
//   let i=0;
//   return {
//     next: ()=> ({
//      done: i>=3,
//      value: sortObj[i++]

// } )
// }
// }
// for(let value of obj){
//   console.log(value);
// }
// 2.
// დაწერეთ პირველი ამოცანა, ისე რომ იტერატორის მაგივრად გააკეთოთ გენერატორი
// let obj = {
//     a:10,
//     b:13,
//     c:111,
//     d:32,
//     e:600,
// }
// function* objSort(obj){
// let sortObj=Object.values(obj).sort((a,b)=> b-a);
//  for(let i=0; i<=2; i++){
//  yield sortObj[i]
//  }
// }
// for(let value of objSort(obj)){
//   console.log(value);
// }
// 3.
// გააკეთეთ იტერატორი, რომელმაც პირველი გაშვების დროს უნდა დააბრუნოს მნიშვნელობა
// 'Hello', მეორე გაშვების შემდგომ 'World', ხოლო ყველა სხვა გაშვებაზე რიცხვი, თუ მერამდენედ ეშვება იტერატორი
// let arr=["Hello","World"];
// let result=arr[Symbol.iterator]();
// let iteratorCount=0;
// iteratorCount++;
// console.log(result.next().value);
// iteratorCount++;
// console.log(result.next().value);
// iteratorCount++;
// console.log(iteratorCount);
// iteratorCount++;
// console.log(iteratorCount);
// 4. 
// დაწერეთ გენერატორი, რომელიც გამოძახებისას დააბრუნებს რენდომად დაგენერირებულ რიცხვს
// function* randomNums(min,max){
//   let i= Math.floor(Math.random()*(max-min+1)+min);
//   yield i;
// }
// let nums = randomNums(1,10);
// let result=nums.next();
// console.log(result.value);
// 5.
// მოცემულია მასივი [1,2,3,4] დაწერეთ იტერატორი, რომელიც დააბრუნებს მასივის მნიშვნელობას გამრავლებულს ორზე,
// დალოგეთ ყველა მიღებული შედეგი.
// გააკეთეთ, ეს ამოცანა გენერატორითაც.
// iterator

// let arr=[1,2,3,4]; 
// let result=arr[Symbol.iterator]();
// console.log(result.next().value*2);
// console.log(result.next().value*2);
// console.log(result.next().value*2);
// console.log(result.next().value*2);
// console.log(result.next());


// generator
let arr=[1,2,3,4]; 
function* result(array){
  for(let i of array){
    yield i*2;
  }
}
let newArr=result(arr);
console.log(newArr.next().value);
console.log(newArr.next().value);
console.log(newArr.next().value);
console.log(newArr.next().value);
console.log(newArr.next().value);