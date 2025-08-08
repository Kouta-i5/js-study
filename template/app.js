
// const foo = 1;
console.log(foo)
console.log("Hello" + "World")//HelloWorld
console.log("1" + "1")//11

const hoge = "bar"
const array = [1, "Hello", hoge]
console.log(array[0])

//配列
const firstPokemons = ["にゃハオ", "ホゲータ", "クワっつ"]
console.log(firstPokemons[1])

//ループ分
const questions = [
    "a",
    "b",
    "c"
];

for (let index = 0; index < array.length; index++) {
    const element = array[index];

}

//++はインクリメント
//--はデクリメント
//for(初期値; 条件式; 増減式;){//処理}
for (let index = 0; index < questions.length; index++) {
    console.log(questions[index]);
}
//if文について
let isLogin = true
if (!isLogin) {
    alert("ログインしてください")
}

if (!isLogin) {
    alert("ログインしてください");
} else {
    console.log("ログイン成功中");
}

const userType = "member";//member ,admin ,owner
if (userType === "member") {
    console.log("アクセスできません");
} else if (userType === "admin") {
    console.log("アクセスできる")

}
//練習問題
const myMoney = 1000;
let isSharing = false;

if (myMoney > 500) {
    isSharing = true
} else {
    isSharing = false
}
console.log(isSharing);

// //通常関数
// function name(params) { 
//     //処理
// }

// //アロー関数
// const name = (params) => {
//  //処理
// }
//Dateオブジェクトについて
const time = 18; // 午後6時
const now = new Date().getHours(); //nowは関数名、newはオブジェクト（インスタンス）を作成するキーワード、Date()はDate クラスのインスタンス（現在の日時情報を持つ）.Dateオブジェクトから「時（hour）」を取得するメソッド。

if (now > time) {
    console.log("今は18時を過ぎています");
} else {
    console.log("まだ18時になっていません");
}

//関数の引数にデフォルト値を持っておく
function changeDarkMode(time = 20, color = "#333") {
    if (new Date().getHours() > time) {
        document.body.style.backgroundColor = color;
    }
}

const seasons = "winter"; // ここで変数を定義
if (seasons === "winter") {
    changeDarkMode(18);
} else {
    changeDarkMode(20);
}

function changeDarkMode(time, color = "#333") {
    if (new Date().getHours() > time) {
        document.body.style.backgroundColor = color;
    }
}

// const season = "winter"; // ここで変数を定義
// if (season === "winter") {
//     changeDarkMode(18);
// } else {
//     changeDarkMode(20);
// }


function changeDarkMode(obj) {
    if (new Date().getHours() > time) {
        document.body.style.backgroundColor = color;
    }
}
//オブジェクトを使った関数の場合
changeDarkMode({
    time: 20,
    color: "#333"
}
);
//オブジェクトを使っていない関数の場合
changeDarkMode(20, "#333");

//callback関数
function foo(callback) {
    console.log("Hi,Tom!");
    callback();

}
function bar() {
    console.log("Hi,Ken");
}
foo(bar);//Hi,TomとHi,Ken

function name(params) {
    //処理
    return 戻り値
}
 
//returnの話
function getSeason() {
    const month = new Date().getMonth() + 1;
    if (month >= 3 && month <= 5) {
        return "spring";

    } else if(month >= 9 && month <=12){
        return "winter";
    
    }else if(month >= 6 && month <= 8){
        return "summer";
    }else{
        return "autumn";
    }
}

const season = getSeason();
console.log(season);

//変数のスコープについて
const bar1 = 1; //グローバル変数
function foo() {
    const bar2 = 2;//ローカル変数
    console.log(bar2);
}
console.log(bar1);
// console.log(bar2);//エラーになる。関数内で定義されたローカル変数を参照できない

//同じ変数名でグローバルでもローカルでもおくことができる。

//確認問題
const sonicBoom = () =>{
    return 20;
}

const lastDamage = 100;

const metalBurst = (lastDamage) =>{
    return lastDamage*1.5;
}


console.log(metalBurst(lastDamage));


const hornDrill = (theirHp) => {
    if (Math.random() <= 0.03) {
        return theirHp;
    } else {
        return 0;
    }
}
console.log(hornDrill(100));
//オブジェクト：

// const ボブジェット名 = {
//     プロパティ名:値
// }


const snsUser ={
    id : 9,
    userName: "Taro",
    gender:"male",
    followers:["a","b","c"],
    //オブジェクト内に関数を持つとメソッドとして扱うことができる。
    like:function () {
        console.log("Like!");
    },
    post:function (contents) {
        return this.userName+ "が" + contents + "を投稿しました" 
    },
    //オブジェクト内にオブジェクト
    settings:{
        premium: true,
        darkMode: false
    }
}
console.log(snsUser.id)
console.log(snsUser.like);
console.log(snsUser.followers[0]);
console.log(snsUser.settings.darkMode);
console.log(snsUser.post("プログラミングなう"));

//練習問題
const pikachu = {
    name: "ピカチュウ",
    level:18,
    types: ["電気"],
    skills: ["10万ボルト", "電光石火", "体当たり"],
    levelUp: function () {
        this.level++;
        if (this.level>=20) 
            {
                this.skills.push("スパーク")
            }
        }
    };

console.log("1stピカチュウ:",pikachu.level,pikachu.skills);
pikachu.levelUp();
console.log("2ndピカチュウ:",pikachu.level,pikachu.skills);
pikachu.levelUp();
console.log("3ndピカチュウ:",pikachu.level,pikachu.skills);

//標準組み込み関数
//標準組み込みオブジェクト
// console.log();//consoleが標準組み込みオブジェクトでlogがメゾット

const myPokemon = ["サンダー","鳳凰","ミュツー"];

myPokemon.push("パルキア")
console.log(myPokemon);
console.log(myPokemon.length);//lengthは標準組み込みオブジェクト
console.log("サンダー".length);//lengthは標準組み込みオブジェクト

const oldVersions =["red","green","blue"]
const newVersions =["ruby","safa","emeraldo"]

console.log(oldVersions.concat(newVersions));

//ブラウザーAPI
//windowオブジェクト
//window.alert()
//window.innerwidth
//window.height
document.querySelector("#pokemon").innerText = "ポケモン撮りたい";//divタグにidセレクタを足すと

setTimeout(function () {
    alert("Hello");
},5000);

// document.querySelectorAll(".bar")[0].innerHTML = "<div>Hello</div>";
const $foo = document.document.querySelectorAll(".bar")
$foo[0].innerHTML = "<div>Hello</div>";//$はprefixという。


document.querySelector()
document.getElementById("foo")
document.getElementsByClassName("bar")

const $post = document.createElement("article")
$post.setAttribute("class","post")//class = postの<article>タグが出力される
$post.innerText = "お腹減ったなう"

const $timeline = document.querySelectorAll(".timeline")[0];
$timeline.appendChild($post)

window.addEventListener("resize", function () {
    alert("読み込み完了");
});

// document.querySelector("#button").addEventListener("click", function(){
//     if (Math.random()<= 0.2) {
//         alert("ピカチュウをゲットした！")
//     }else {
//         alert(
//             "残念"
//         )
//     }
// })

document.querySelector("#button")
.addEventListener("click", function () {
    document.querySelector("#output").innerHTML = "ピカチュウ"
});

const getInitialName = (name) =>{
    const nameArray = name.split(" ")
    console.log("nameArray:",nameArray);

    const initialLast = nameArray[0].slice(0,1); //sliceは引数が二個で初期値と終了値をもつ
    console.log("initialLast:",initialLast);

    const initialFirst = nameArray[1].slice(0,1);
    console.log("initialFirst:",initialFirst);

    return initialLast + "." + initialFirst;
}

const result = getInitialName("Yamada Hiroki")

console.log(result);
; //Y.H

document.querySelector("#button")
.addEventListener("click", function () {
    document.querySelector("#output").innerHTML = "ピカチュウ"
});

const getInitialName = (name) =>{
    const nameArray = name.split(" ")
    console.log("nameArray:",nameArray);

    const initialLast = nameArray[0].slice(0,1); //sliceは引数が二個で初期値と終了値をもつ
    console.log("initialLast:",initialLast);

    const initialFirst = nameArray[1].slice(0,1);
    console.log("initialFirst:",initialFirst);

    return initialLast + "." + initialFirst;
}

const result = getInitialName("Yamada Hiroki")

console.log(result);
; //Y.H

const

