# JavaScript構文基礎まとめ

## 目次
1. [基本概念](#基本概念)
2. [変数とデータ型](#変数とデータ型)
3. [演算子](#演算子)
4. [制御構文](#制御構文)
5. [関数](#関数)
6. [配列](#配列)
7. [オブジェクト](#オブジェクト)
8. [スコープ](#スコープ)
9. [標準組み込みオブジェクト](#標準組み込みオブジェクト)
10. [DOM操作](#dom操作)
11. [イベント処理](#イベント処理)
12. [非同期処理](#非同期処理)

---

## 基本概念

### JavaScriptとは
- ウェブブラウザで動作するプログラミング言語
- 動的型付け言語（変数の型を事前に宣言する必要がない）
- オブジェクト指向プログラミングをサポート

### 実行環境
```javascript
// ブラウザのコンソールで実行
console.log("Hello, World!");

// HTMLファイル内で実行
<script>
    console.log("Hello, World!");
</script>
```

---

## 変数とデータ型

### 変数宣言
```javascript
// let: 再代入可能な変数
let name = "田中太郎";
name = "佐藤花子"; // 再代入可能

// const: 再代入不可の定数
const age = 25;
// age = 26; // エラー

// var: 古い宣言方法（非推奨）
var oldWay = "古い書き方";
```

### データ型
```javascript

// プリミティブ型
プリミティブ型は、JavaScriptの最も基本的なデータ型で、以下の特徴があります：
主な特徴
値そのものを直接格納 - メモリに値が直接保存される
変更不可能（イミュータブル） - 一度作成された値は変更できない
値の比較 - 比較時は値そのものを比較
メモリ効率が良い - 軽量で高速

const string = "文字列";           // 文字列
const number = 42;                 // 数値
const boolean = true;              // 真偽値
const nullValue = null;            // null
const undefined = undefined;       // undefined
const symbol = Symbol("symbol");   // シンボル

// オブジェクト型
const object = { name: "田中" };   // オブジェクト
const array = [1, 2, 3];          // 配列
const function = () => {};        // 関数
```

### 型変換
```javascript
// 文字列への変換
String(123);        // "123"
(123).toString();   // "123"

// 数値への変換
Number("123");      // 123
parseInt("123");    // 123
parseFloat("12.34"); // 12.34

// 真偽値への変換
Boolean(1);         // true
Boolean(0);         // false
Boolean("");        // false
```

---

## 演算子

### 算術演算子
```javascript
const a = 10;
const b = 3;

console.log(a + b);   // 13 (加算)
console.log(a - b);   // 7  (減算)
console.log(a * b);   // 30 (乗算)
console.log(a / b);   // 3.333... (除算)
console.log(a % b);   // 1  (剰余)
console.log(a ** b);  // 1000 (べき乗)

// インクリメント・デクリメント
let count = 5;
count++;  // 6 (後置インクリメント)
++count;  // 7 (前置インクリメント)
count--;  // 6 (後置デクリメント)
--count;  // 5 (前置デクリメント)
```

### 比較演算子
```javascript
console.log(5 == "5");   // true  (値の比較)
console.log(5 === "5");  // false (値と型の比較)
console.log(5 != "5");   // false
console.log(5 !== "5");  // true
console.log(5 > 3);      // true
console.log(5 >= 5);     // true
console.log(5 < 3);      // false
console.log(5 <= 5);     // true
```

### 論理演算子

#### 基本的な論理演算子
```javascript
// AND演算子 (&&)
console.log(true && true);   // true
console.log(true && false);  // false
console.log(false && true);  // false
console.log(false && false); // false

// OR演算子 (||)
console.log(true || true);   // true
console.log(true || false);  // true
console.log(false || true);  // true
console.log(false || false); // false

// NOT演算子 (!)
console.log(!true);          // false
console.log(!false);         // true
console.log(!!true);         // true (二重否定)
```

#### 短絡評価（ショートサーキット評価）

**短絡評価とは：**
論理演算子は左から右に評価し、結果が確定した時点で評価を停止する

```javascript
// AND演算子の短絡評価
console.log(true && "Hello");   // "Hello" (両方評価)
console.log(false && "Hello");  // false (左側がfalseなので右側は評価しない)

// OR演算子の短絡評価
console.log(true || "Hello");   // true (左側がtrueなので右側は評価しない)
console.log(false || "Hello");  // "Hello" (両方評価)

// 実用的な例
const user = { name: "田中", age: 25 };
const userName = user && user.name; // 安全なプロパティアクセス
console.log(userName); // "田中"

const config = null;
const apiUrl = config && config.apiUrl || "https://default-api.com";
console.log(apiUrl); // "https://default-api.com"
```

#### 真偽値への変換

**falsy値（偽と評価される値）：**
- `false`
- `0`
- `""` (空文字列)
- `null`
- `undefined`
- `NaN`

**truthy値（真と評価される値）：**
- `true`
- 0以外の数値
- 空でない文字列
- オブジェクト
- 配列
- 関数

```javascript
// falsy値の例
console.log(Boolean(false));     // false
console.log(Boolean(0));         // false
console.log(Boolean(""));        // false
console.log(Boolean(null));      // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN));       // false

// truthy値の例
console.log(Boolean(true));      // true
console.log(Boolean(42));        // true
console.log(Boolean("hello"));   // true
console.log(Boolean({}));        // true
console.log(Boolean([]));        // true
console.log(Boolean(() => {}));  // true

// 論理演算子での真偽値変換
console.log("hello" && "world"); // "world"
console.log("" && "world");      // ""
console.log(0 || "default");     // "default"
console.log("hello" || "default"); // "hello"
```

#### 実践的な使用例

**1. デフォルト値の設定**
```javascript
// ユーザー名のデフォルト値
const userName = userInput || "ゲスト";
console.log(userName);

// 設定オブジェクトのデフォルト値
const config = {
    apiUrl: process.env.API_URL || "https://api.example.com",
    timeout: process.env.TIMEOUT || 5000
};
```

**2. 条件付きプロパティアクセス**
```javascript
const user = { name: "田中", address: { city: "東京" } };

// 安全なプロパティアクセス
const city = user && user.address && user.address.city;
console.log(city); // "東京"

// 存在しないプロパティの場合
const user2 = { name: "佐藤" };
const city2 = user2 && user2.address && user2.address.city;
console.log(city2); // undefined
```

**3. 条件付き関数実行**
```javascript
const isLoggedIn = true;
const user = { name: "田中" };

// 条件付きで関数を実行
isLoggedIn && console.log(`ようこそ、${user.name}さん！`);

// 条件付きでオブジェクトを作成
const userInfo = isLoggedIn && {
    name: user.name,
    loginTime: new Date()
};
```

**4. 複雑な条件の組み合わせ**
```javascript
const age = 25;
const hasPermission = true;
const isActive = false;

// 複数の条件を組み合わせ
const canAccess = age >= 18 && hasPermission && isActive;
console.log(canAccess); // false

// 条件分岐の簡潔な書き方
const status = age >= 18 && hasPermission ? "アクセス可能" : "アクセス不可";
console.log(status); // "アクセス不可"
```

#### 論理演算子の優先順位

```javascript
// 優先順位: ! > && > ||
console.log(!true && false || true); // true
// 評価順序: (!true) && false || true
//         = false && false || true
//         = false || true
//         = true

// 括弧を使って明示的に優先順位を指定
console.log(!(true && false) || true); // true
console.log(!true && (false || true)); // false
```

#### 新しい論理演算子（ES2020）

**Nullish coalescing operator (??)**
```javascript
// null または undefined の場合のみデフォルト値を使用
const value1 = null ?? "デフォルト";     // "デフォルト"
const value2 = undefined ?? "デフォルト"; // "デフォルト"
const value3 = 0 ?? "デフォルト";        // 0 (falsy値でも使用)
const value4 = "" ?? "デフォルト";       // "" (falsy値でも使用)

// || との違い
console.log(0 || "デフォルト");  // "デフォルト"
console.log(0 ?? "デフォルト");  // 0

console.log("" || "デフォルト"); // "デフォルト"
console.log("" ?? "デフォルト"); // ""
```

**Logical assignment operators (ES2021)**
```javascript
let x = 1;
let y = 2;

// AND assignment (&&=)
x &&= y; // x = x && y と同じ
console.log(x); // 2

// OR assignment (||=)
let z = 0;
z ||= 10; // z = z || 10 と同じ
console.log(z); // 10

// Nullish assignment (??=)
let w = null;
w ??= 20; // w = w ?? 20 と同じ
console.log(w); // 20
```

#### よくある間違いとベストプラクティス

```javascript
// ❌ よくある間違い
if (user && user.name && user.name.length > 0) {
    // 処理
}

// ✅ より良い書き方
if (user?.name) {
    // 処理
}

// ❌ 複雑な条件
if (user && user.profile && user.profile.settings && user.profile.settings.theme) {
    // 処理
}

// ✅ オプショナルチェーンを使用
if (user?.profile?.settings?.theme) {
    // 処理
}

// ❌ 不要な論理演算子
if (isLoggedIn === true) {
    // 処理
}

// ✅ シンプルに
if (isLoggedIn) {
    // 処理
}
```

### 文字列演算子
```javascript
const firstName = "田中";
const lastName = "太郎";
const fullName = firstName + " " + lastName; // "田中 太郎"

// テンプレートリテラル（ES6）
const age = 25;
const message = `私は${firstName}${lastName}です。${age}歳です。`;
```

---

## 制御構文

### 条件分岐

#### if文
if (条件) {
    処理;
} else if (別の条件) {
    処理;
} else {
    処理;
}

```javascript
const age = 20;

if (age >= 20) {
    console.log("成人です");
} else if (age >= 13) {
    console.log("未成年です");
} else {
    console.log("子供です");
}
```

#### switch文
switch (値) {
    case 値1:
        処理;
        break;
    case 値2:
        処理;
        break;
    default:
        処理;
}

```javascript

```

#### 三項演算子
条件 ? 真の場合の値 : 偽の場合の値

```javascript
const age = 20;
const message = age >= 20 ? "成人です" : "未成年です";
```

### ループ

#### for文
for (カウンターの宣言; 条件; 更新) {
    処理;
}

```javascript
// 基本的なfor文
for (let i = 0; i < 5; i++) {
    console.log(i); // 0, 1, 2, 3, 4
}

// 配列の要素を順番に処理
const fruits = ["りんご", "バナナ", "オレンジ"];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
```

#### for...of文（ES6）
for (const 要素 of 配列) {
    処理;
}

**for...of文の特徴：**
- 配列の**値**を直接取得
- インデックスは取得できない
- 配列専用のループ文
- ES6で追加された新しい構文

```javascript
const fruits = ["りんご", "バナナ", "オレンジ"];

// 配列の値を直接取得
for (const fruit of fruits) {
    console.log(fruit);
}
// 出力: "りんご", "バナナ", "オレンジ"

// 文字列も反復可能
const message = "Hello";
for (const char of message) {
    console.log(char);
}
// 出力: "H", "e", "l", "l", "o"

// Setオブジェクトも反復可能
const uniqueNumbers = new Set([1, 2, 2, 3, 3, 4]);
for (const num of uniqueNumbers) {
    console.log(num);
}
// 出力: 1, 2, 3, 4
```

#### for...in文
for (const キー in オブジェクト) {
    処理;
}

**for...in文の特徴：**
- オブジェクトの**プロパティ名（キー）**を取得
- 配列でも使えるが、インデックスが文字列として取得される
- 継承されたプロパティも含まれる
- 古い構文だが現在も使用される

```javascript
const person = { name: "田中", age: 25 };

// オブジェクトのプロパティ名を取得
for (const key in person) {
    console.log(`${key}: ${person[key]}`);
}
// 出力: "name: 田中", "age: 25"

// 配列でも使用可能（ただし推奨されない）
const fruits = ["りんご", "バナナ", "オレンジ"];
for (const index in fruits) {
    console.log(`${index}: ${fruits[index]}`);
}
// 出力: "0: りんご", "1: バナナ", "2: オレンジ"

// 継承されたプロパティも含まれる
const arr = [1, 2, 3];
arr.customProperty = "カスタムプロパティ";

for (const key in arr) {
    console.log(`${key}: ${arr[key]}`);
}
// 出力: "0: 1", "1: 2", "2: 3", "customProperty: カスタムプロパティ"
```

#### for...of文とfor...in文の違い

```javascript
const fruits = ["りんご", "バナナ", "オレンジ"];

// for...of文 - 値を直接取得
console.log("=== for...of文 ===");
for (const fruit of fruits) {
    console.log(fruit);
}
// 出力: "りんご", "バナナ", "オレンジ"

// for...in文 - インデックス（キー）を取得
console.log("=== for...in文 ===");
for (const index in fruits) {
    console.log(`${index}: ${fruits[index]}`);
}
// 出力: "0: りんご", "1: バナナ", "2: オレンジ"

// オブジェクトの場合
const person = { name: "田中", age: 25 };

// for...of文はオブジェクトでは使えない（エラー）
// for (const value of person) { } // TypeError

// for...in文はオブジェクトで使用可能
for (const key in person) {
    console.log(`${key}: ${person[key]}`);
}
// 出力: "name: 田中", "age: 25"
```

#### 使い分けのポイント

**for...of文を使う場合：**
- 配列の値を直接取得したい
- インデックスが不要
- モダンなJavaScriptを書きたい

**for...in文を使う場合：**
- オブジェクトのプロパティを列挙したい
- 配列のインデックスが必要
- 継承されたプロパティも含めて処理したい

**配列の場合は：**
- 値が必要 → `for...of`
- インデックスが必要 → 通常の`for`文
- 両方必要 → `forEach`メソッド

#### while文
while (条件) {
    処理;
}

```javascript
let count = 0;
while (count < 5) {
    console.log(count);
    count++;
}
```

#### do...while文
do {
    処理;
} while (条件);

```javascript
let count = 0;
do {
    console.log(count);
    count++;
} while (count < 5);
```

---

## 関数

### 関数宣言
function 関数名(引数) {
    処理;
    return 戻り値;
}

const 関数名 = (引数) => {
    処理;
    return 戻り値;
};

```javascript
// 関数宣言
function greet(name) {
    return `こんにちは、${name}さん！`;
}

// 関数式
const greet = function(name) {
    return `こんにちは、${name}さん！`;
};

// アロー関数（ES6）
const greet = (name) => {
    return `こんにちは、${name}さん！`;
};

// アロー関数（短縮形）
const greet = name => `こんにちは、${name}さん！`;
```

### 引数とデフォルト値
function 関数名(引数 = デフォルト値) {
    処理;
}

function 関数名(...引数) {
    処理;
}

```javascript
// デフォルト引数
function greet(name = "ゲスト") {
    return `こんにちは、${name}さん！`;
}

// 可変長引数
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4, 5)); // 15
```

### コールバック関数
function 関数名(引数, コールバック関数) {
    処理;
    コールバック関数();
}

```javascript
function processUser(name, callback) {
    console.log(`処理中: ${name}`);
    callback(name);
}

processUser("田中", function(name) {
    console.log(`完了: ${name}の処理が終わりました`);
});

// アロー関数を使用
processUser("田中", (name) => {
    console.log(`完了: ${name}の処理が終わりました`);
});
```

---

## 配列

### 配列の作成と操作
const 配列名 = [要素1, 要素2, 要素3];
配列名[インデックス] = 新しい値;

```javascript
// 配列の作成
const fruits = ["りんご", "バナナ", "オレンジ"];

// 要素のアクセス
console.log(fruits[0]); // "りんご"

// 要素の変更
fruits[1] = "ぶどう";

// 配列の長さ
console.log(fruits.length); // 3
```

### 配列メソッド

#### 要素の追加・削除
配列名.push(要素);      // 末尾に追加
配列名.pop();           // 末尾を削除
配列名.unshift(要素);   // 先頭に追加
配列名.shift();         // 先頭を削除
配列名.splice(開始位置, 削除数, 追加要素);

```javascript
const fruits = ["りんご", "バナナ"];

// 末尾に追加
fruits.push("オレンジ");

// 末尾を削除
fruits.pop();

// 先頭に追加
fruits.unshift("メロン");

// 先頭を削除
fruits.shift();

// 指定位置の要素を削除・追加
fruits.splice(1, 1, "ぶどう"); // インデックス1の要素を削除して"ぶどう"を追加
```

#### 配列の変換
配列名.map(要素 => 変換処理);
配列名.filter(要素 => 条件);
配列名.reduce((累積値, 要素) => 処理, 初期値);
配列名.forEach(要素 => 処理);

```javascript
const numbers = [1, 2, 3, 4, 5];

// map: 各要素を変換
const doubled = numbers.map(num => num * 2); // [2, 4, 6, 8, 10]

// filter: 条件に合う要素を抽出
const evenNumbers = numbers.filter(num => num % 2 === 0); // [2, 4]

// reduce: 配列を一つの値に集約
const sum = numbers.reduce((total, num) => total + num, 0); // 15

// forEach: 各要素に対して処理を実行
numbers.forEach(num => console.log(num));
```

#### 配列の検索
```javascript
const fruits = ["りんご", "バナナ", "オレンジ"];

// indexOf: 要素のインデックスを検索
console.log(fruits.indexOf("バナナ")); // 1

// includes: 要素の存在確認
console.log(fruits.includes("りんご")); // true

// find: 条件に合う最初の要素を検索
const found = fruits.find(fruit => fruit.length > 3); // ””

// findIndex: 条件に合う最初の要素のインデックスを検索
const index = fruits.findIndex(fruit => fruit.length > 3); // 0
```

---

## オブジェクト

### オブジェクトの作成
const オブジェクト名 = {
    プロパティ名: 値,
    プロパティ名: 値
};
オブジェクト名.プロパティ名 = 新しい値;

```javascript
// オブジェクトリテラル
const person = {
    name: "田中太郎",
    age: 25,
    city: "東京"
};

// プロパティへのアクセス
console.log(person.name);        // ドット記法
console.log(person["name"]);     // ブラケット記法

// プロパティの追加・変更
person.job = "エンジニア";
person.age = 26;
```

### メソッド
const オブジェクト名 = {
    プロパティ名: 値,
    メソッド名: function() {
        処理;
        return 戻り値;
    },
    メソッド名() {
        処理;
        return 戻り値;
    }
};

```javascript
const person = {
    name: "田中太郎",
    age: 25,
    greet: function() {
        return `こんにちは、${this.name}です`;
    },
    // 短縮記法（ES6）
    introduce() {
        return `${this.name}、${this.age}歳です`;
    }
};

console.log(person.greet());     // "こんにちは、田中太郎です"
console.log(person.introduce()); // "田中太郎、25歳です"
```

### オブジェクトの操作
```javascript
const person = { name: "田中", age: 25 };

// プロパティの存在確認
console.log("name" in person);           // true
console.log(person.hasOwnProperty("age")); // true

// プロパティの削除
delete person.age;

// オブジェクトのコピー
const copy = { ...person }; // スプレッド演算子（ES6）

// オブジェクトの結合
const details = { city: "東京", job: "エンジニア" };
const fullPerson = { ...person, ...details };
```

---

## スコープ

### グローバルスコープ
```javascript
const globalVar = "グローバル変数"; // グローバルスコープ

function someFunction() {
    console.log(globalVar); // アクセス可能
}
```

### ローカルスコープ
```javascript
function someFunction() {
    const localVar = "ローカル変数"; // ローカルスコープ
    console.log(localVar); // アクセス可能
}

// console.log(localVar); // エラー：アクセス不可
```

### ブロックスコープ
```javascript
if (true) {
    let blockVar = "ブロック変数"; // letはブロックスコープ
    const blockConst = "ブロック定数"; // constもブロックスコープ
}

// console.log(blockVar); // エラー：アクセス不可
```

### クロージャー
```javascript
function createCounter() {
    let count = 0;
    
    return function() {
        count++;
        return count;
    };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
```

---

## 標準組み込みオブジェクト

### String
```javascript
const str = "Hello, World!";

console.log(str.length);           // 13
console.log(str.toUpperCase());    // "HELLO, WORLD!"
console.log(str.toLowerCase());    // "hello, world!"
console.log(str.indexOf("World")); // 7
console.log(str.slice(0, 5));      // "Hello"
console.log(str.split(", "));      // ["Hello", "World!"]
```

### Number
```javascript
console.log(Number.MAX_VALUE);     // 最大値
console.log(Number.MIN_VALUE);     // 最小値
console.log(Number.isInteger(5));  // true
console.log(Number.parseFloat("3.14")); // 3.14
console.log(Number.parseInt("42"));     // 42
```

### Math
```javascript
console.log(Math.PI);              // 3.141592653589793
console.log(Math.abs(-5));         // 5
console.log(Math.ceil(3.2));       // 4
console.log(Math.floor(3.8));      // 3
console.log(Math.round(3.5));      // 4
console.log(Math.random());        // 0-1の乱数
console.log(Math.max(1, 2, 3));    // 3
console.log(Math.min(1, 2, 3));    // 1
```

### Date
```javascript
const now = new Date();
console.log(now.getFullYear());    // 現在の年
console.log(now.getMonth());       // 月（0-11）
console.log(now.getDate());        // 日
console.log(now.getHours());       // 時
console.log(now.getMinutes());     // 分
console.log(now.getSeconds());     // 秒

// 特定の日付を作成
const specificDate = new Date(2024, 0, 1); // 2024年1月1日
```

### Array
```javascript
const arr = [1, 2, 3, 4, 5];

// 配列の操作
arr.push(6);           // 末尾に追加
arr.pop();             // 末尾を削除
arr.unshift(0);        // 先頭に追加
arr.shift();           // 先頭を削除

// 配列の変換
const doubled = arr.map(x => x * 2);
const evens = arr.filter(x => x % 2 === 0);
const sum = arr.reduce((acc, x) => acc + x, 0);
```

---

## DOM操作

### 要素の取得
```javascript
// IDで要素を取得
const element = document.getElementById("myId");

// クラス名で要素を取得
const elements = document.getElementsByClassName("myClass");

// タグ名で要素を取得
const divs = document.getElementsByTagName("div");

// CSSセレクタで要素を取得
const element = document.querySelector(".myClass");
const elements = document.querySelectorAll(".myClass");
```

### 要素の操作
```javascript
const element = document.getElementById("myElement");

// 内容の変更
element.textContent = "新しいテキスト";
element.innerHTML = "<strong>太字</strong>";

// 属性の操作
element.setAttribute("class", "newClass");
element.getAttribute("class");
element.removeAttribute("class");

// スタイルの変更
element.style.backgroundColor = "red";
element.style.fontSize = "16px";

// クラスの操作
element.classList.add("newClass");
element.classList.remove("oldClass");
element.classList.toggle("toggleClass");
element.classList.contains("checkClass");
```

### 要素の作成と追加
```javascript
// 新しい要素を作成
const newElement = document.createElement("div");
newElement.textContent = "新しい要素";

// 要素を追加
const parent = document.getElementById("parent");
parent.appendChild(newElement);        // 末尾に追加
parent.insertBefore(newElement, parent.firstChild); // 先頭に追加

// 要素を削除
parent.removeChild(newElement);
```

---

## イベント処理

### イベントリスナーの追加
要素.addEventListener("イベント名", 関数);
要素.removeEventListener("イベント名", 関数);

```javascript
const button = document.getElementById("myButton");

// 基本的なイベントリスナー
button.addEventListener("click", function(event) {
    console.log("ボタンがクリックされました");
});

// アロー関数を使用
button.addEventListener("click", (event) => {
    console.log("ボタンがクリックされました");
});

// イベントリスナーの削除
const handleClick = () => console.log("クリック");
button.addEventListener("click", handleClick);
button.removeEventListener("click", handleClick);
```

### 主要なイベント
```javascript
// マウスイベント
element.addEventListener("click", handleEvent);      // クリック
element.addEventListener("dblclick", handleEvent);   // ダブルクリック
element.addEventListener("mouseenter", handleEvent); // マウスが要素に入る
element.addEventListener("mouseleave", handleEvent); // マウスが要素から出る

// キーボードイベント
element.addEventListener("keydown", handleEvent);    // キーを押す
element.addEventListener("keyup", handleEvent);      // キーを離す

// フォームイベント
element.addEventListener("submit", handleEvent);     // フォーム送信
element.addEventListener("change", handleEvent);     // 値が変更される
element.addEventListener("input", handleEvent);      // 入力中

// ページイベント
window.addEventListener("load", handleEvent);        // ページ読み込み完了
window.addEventListener("resize", handleEvent);      // ウィンドウサイズ変更
```

### イベントオブジェクト
```javascript
element.addEventListener("click", function(event) {
    console.log(event.type);        // イベントの種類
    console.log(event.target);      // イベントが発生した要素
    console.log(event.currentTarget); // イベントリスナーが設定された要素
    
    // マウスイベントの場合
    console.log(event.clientX);     // マウスのX座標
    console.log(event.clientY);     // マウスのY座標
    
    // キーボードイベントの場合
    console.log(event.key);         // 押されたキー
    console.log(event.code);        // キーコード
    
    // イベントの伝播を停止
    event.stopPropagation();
    
    // デフォルトの動作をキャンセル
    event.preventDefault();
});
```

---

## 非同期処理

### setTimeout / setInterval
setTimeout(関数, ミリ秒);
setInterval(関数, ミリ秒);
clearInterval(インターバルID);

```javascript
// setTimeout: 指定時間後に実行
setTimeout(() => {
    console.log("3秒後に実行");
}, 3000);

// setInterval: 指定時間間隔で繰り返し実行
const intervalId = setInterval(() => {
    console.log("1秒ごとに実行");
}, 1000);

// 停止
clearInterval(intervalId);
```

### Promise
new Promise((resolve, reject) => {
    非同期処理;
    resolve(成功時の値);
    reject(エラー);
}).then(成功時の処理).catch(エラー時の処理);

```javascript
// Promiseの作成
const myPromise = new Promise((resolve, reject) => {
    // 非同期処理
    setTimeout(() => {
        const random = Math.random();
        if (random > 0.5) {
            resolve("成功しました");
        } else {
            reject("失敗しました");
        }
    }, 1000);
});

// Promiseの使用
myPromise
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error(error);
    });
```

### async/await（ES2017）
async function 関数名() {
    try {
        const 結果 = await 非同期処理;
        return 結果;
    } catch (エラー) {
        エラー処理;
    }
}

```javascript
// async関数
async function fetchData() {
    try {
        const response = await fetch("https://api.example.com/data");
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("エラー:", error);
    }
}

// 使用例
fetchData().then(data => {
    console.log(data);
});
```

### fetch API
```javascript
// GETリクエスト
fetch("https://api.example.com/data")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));

// POSTリクエスト
fetch("https://api.example.com/data", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({ name: "田中", age: 25 })
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

---

## 実践的な例

### 簡単なカウンターアプリ
```javascript
// HTML
// <button id="increment">+</button>
// <span id="count">0</span>
// <button id="decrement">-</button>

const countElement = document.getElementById("count");
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");

let count = 0;

incrementBtn.addEventListener("click", () => {
    count++;
    countElement.textContent = count;
});

decrementBtn.addEventListener("click", () => {
    count--;
    countElement.textContent = count;
});
```

### フォームバリデーション
```javascript
const form = document.getElementById("myForm");
const emailInput = document.getElementById("email");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    const email = emailInput.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(email)) {
        alert("正しいメールアドレスを入力してください");
        return;
    }
    
    console.log("フォーム送信:", email);
});
```

### ローカルストレージの使用
```javascript
// データの保存
localStorage.setItem("user", JSON.stringify({ name: "田中", age: 25 }));

// データの取得
const user = JSON.parse(localStorage.getItem("user"));
console.log(user.name); // "田中"

// データの削除
localStorage.removeItem("user");

// 全データの削除
localStorage.clear();
```

---

## ベストプラクティス

### コードの可読性
```javascript
// 良い例
const calculateTotal = (items) => {
    return items.reduce((total, item) => total + item.price, 0);
};

// 悪い例
const calc = (i) => i.reduce((t, it) => t + it.p, 0);
```

### エラーハンドリング
```javascript
try {
    const result = riskyOperation();
    console.log(result);
} catch (error) {
    console.error("エラーが発生しました:", error.message);
} finally {
    console.log("処理完了");
}
```

### モジュール化
```javascript
// utils.js
export const formatDate = (date) => {
    return date.toLocaleDateString("ja-JP");
};

// main.js
import { formatDate } from "./utils.js";
console.log(formatDate(new Date()));
```

---

## まとめ

このドキュメントでは、JavaScriptの基本的な構文から実践的な使用方法までを体系的にまとめました。これらの知識を基に、より複雑なアプリケーションの開発に挑戦してみてください。

### 次のステップ
1. フレームワーク（React, Vue.js, Angular）の学習
2. Node.jsを使ったサーバーサイド開発
3. TypeScriptの学習
4. テスト駆動開発（TDD）の実践
5. パフォーマンス最適化の学習

JavaScriptは常に進化している言語です。新しい機能やベストプラクティスを定期的にチェックして、スキルを向上させていきましょう！ 
