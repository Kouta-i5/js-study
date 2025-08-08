// Q. 下記のコードを穴埋めし、「myMoneyが500以上ならisShippingでtrueを返す」ようにしなさい
// 
// const myMoney = 1000;
// let isShipping = false;
// ----
// ここにif文を書く
// ----
// console.log(isShipping);


// A.
const myMoney = 1000;
let isShipping = false;
if (myMoney >= 500) {
  isShipping = true;
}   
console.log(isShipping); // true