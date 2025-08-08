// Q.実行したら戻り値20を返す関数"sonicBoom"を作成しなさい
// const sonicBoom = () => {
// 
// }
// console.log(sonicBoom()); // 20

// A.
const sonicBoom = () => {
    return 20;
}
console.log(sonicBoom()); // 20


// Q.引数”theirHp”を持ち、実行したら"theirHp"に1.5をかけた値を戻り値として返す関数"metalBurst"を作成しなさい

// A.
const metalBurst = (theirHp) => {
    return theirHp * 1.5;
}
console.log(metalBurst(100)); // 150

// Q.引数"theirHp"を持ち、実行したら”theirHp”の値をそのまま戻り値として返す関数”hornDrill”を作成しなさい。ただし成功確率は30%とし、失敗した場合は0を返すようにしなさい（発展問題）
// Hint:
//   * if文を使います
//   * Math.random()を使います

// A.
const hornDrill = (theirHp) => {
    if(Math.random() <= 0.3){
      return theirHp;
    } else {
      return 0;
    }
  };

console.log(hornDrill(300)) // 300 or 0