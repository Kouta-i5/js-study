// 関数の勉強用JavaScriptファイル

// 基本的な関数
function basicFunction() {
    displayOutput('=== 基本的な関数 ===');
    
    function greet() {
        displayOutput('こんにちは！');
    }
    
    greet();
    greet();
    greet();
}

// パラメータ付き関数
function functionWithParams() {
    displayOutput('=== パラメータ付き関数 ===');
    
    function greet(name) {
        displayOutput(`こんにちは、${name}さん！`);
    }
    
    greet('田中');
    greet('佐藤');
    greet('鈴木');
}

// 戻り値付き関数
function functionWithReturn() {
    displayOutput('=== 戻り値付き関数 ===');
    
    function add(a, b) {
        return a + b;
    }
    
    function multiply(a, b) {
        return a * b;
    }
    
    const result1 = add(5, 3);
    const result2 = multiply(4, 6);
    
    displayOutput(`5 + 3 = ${result1}`);
    displayOutput(`4 × 6 = ${result2}`);
}

// 関数宣言
function functionDeclaration() {
    displayOutput('=== 関数宣言 ===');
    
    function square(x) {
        return x * x;
    }
    
    displayOutput(`5の2乗: ${square(5)}`);
    displayOutput(`3の2乗: ${square(3)}`);
}

// 関数式
function functionExpression() {
    displayOutput('=== 関数式 ===');
    
    const cube = function(x) {
        return x * x * x;
    };
    
    displayOutput(`2の3乗: ${cube(2)}`);
    displayOutput(`3の3乗: ${cube(3)}`);
}

// アロー関数
function arrowFunction() {
    displayOutput('=== アロー関数 ===');
    
    const double = x => x * 2;
    const add = (a, b) => a + b;
    const greet = name => `こんにちは、${name}さん！`;
    
    displayOutput(`double(4): ${double(4)}`);
    displayOutput(`add(7, 3): ${add(7, 3)}`);
    displayOutput(`greet('山田'): ${greet('山田')}`);
}

// デフォルトパラメータ
function defaultParameters() {
    displayOutput('=== デフォルトパラメータ ===');
    
    function greet(name = 'ゲスト', greeting = 'こんにちは') {
        displayOutput(`${greeting}、${name}さん！`);
    }
    
    greet();
    greet('田中');
    greet('佐藤', 'おはよう');
}

// スコープの例
function scopeExample() {
    displayOutput('=== スコープの例 ===');
    
    const globalVar = 'グローバル変数';
    
    function innerFunction() {
        const localVar = 'ローカル変数';
        displayOutput(`関数内: ${localVar}`);
        displayOutput(`関数内からグローバル: ${globalVar}`);
    }
    
    innerFunction();
    displayOutput(`グローバル: ${globalVar}`);
    // displayOutput(`ローカル: ${localVar}`); // エラーになる
}

// コールバック関数
function callbackExample() {
    displayOutput('=== コールバック関数 ===');
    
    function processArray(arr, callback) {
        const result = [];
        for (let i = 0; i < arr.length; i++) {
            result.push(callback(arr[i]));
        }
        return result;
    }
    
    const numbers = [1, 2, 3, 4, 5];
    
    const doubled = processArray(numbers, x => x * 2);
    const squared = processArray(numbers, x => x * x);
    
    displayOutput(`元の配列: [${numbers.join(', ')}]`);
    displayOutput(`2倍: [${doubled.join(', ')}]`);
    displayOutput(`2乗: [${squared.join(', ')}]`);
}

// 計算する
function calculate() {
    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);
    
    displayOutput('=== 計算結果 ===');
    
    function add(a, b) {
        return a + b;
    }
    
    function subtract(a, b) {
        return a - b;
    }
    
    function multiply(a, b) {
        return a * b;
    }
    
    function divide(a, b) {
        if (b === 0) {
            return 'ゼロで割ることはできません';
        }
        return a / b;
    }
    
    displayOutput(`${num1} + ${num2} = ${add(num1, num2)}`);
    displayOutput(`${num1} - ${num2} = ${subtract(num1, num2)}`);
    displayOutput(`${num1} × ${num2} = ${multiply(num1, num2)}`);
    displayOutput(`${num1} ÷ ${num2} = ${divide(num1, num2)}`);
}

// 配列操作
function arrayOperations() {
    displayOutput('=== 配列操作 ===');
    
    const numbers = [1, 2, 3, 4, 5];
    
    function sumArray(arr) {
        return arr.reduce((sum, num) => sum + num, 0);
    }
    
    function findMax(arr) {
        return Math.max(...arr);
    }
    
    function filterEven(arr) {
        return arr.filter(num => num % 2 === 0);
    }
    
    function mapDouble(arr) {
        return arr.map(num => num * 2);
    }
    
    displayOutput(`配列: [${numbers.join(', ')}]`);
    displayOutput(`合計: ${sumArray(numbers)}`);
    displayOutput(`最大値: ${findMax(numbers)}`);
    displayOutput(`偶数: [${filterEven(numbers).join(', ')}]`);
    displayOutput(`2倍: [${mapDouble(numbers).join(', ')}]`);
}

// 文字列操作
function stringOperations() {
    displayOutput('=== 文字列操作 ===');
    
    const text = 'Hello World JavaScript';
    
    function reverseString(str) {
        return str.split('').reverse().join('');
    }
    
    function countWords(str) {
        return str.split(' ').length;
    }
    
    function toUpperCase(str) {
        return str.toUpperCase();
    }
    
    function toLowerCase(str) {
        return str.toLowerCase();
    }
    
    displayOutput(`元の文字列: "${text}"`);
    displayOutput(`逆順: "${reverseString(text)}"`);
    displayOutput(`単語数: ${countWords(text)}`);
    displayOutput(`大文字: "${toUpperCase(text)}"`);
    displayOutput(`小文字: "${toLowerCase(text)}"`);
}

// 結果を表示する関数
function displayOutput(message) {
    const output = document.getElementById('output');
    output.innerHTML += `<div>${message}</div>`;
} 
