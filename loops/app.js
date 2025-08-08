// ループ文の勉強用JavaScriptファイル

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const fruits = ['りんご', 'バナナ', 'オレンジ', 'ぶどう'];

// for文
function forLoop() {
    displayOutput('=== for文の例 ===');
    let result = '';
    for (let i = 0; i < 5; i++) {
        result += `${i} `;
    }
    displayOutput(`0から4まで: ${result}`);
    
    // 逆順
    result = '';
    for (let i = 4; i >= 0; i--) {
        result += `${i} `;
    }
    displayOutput(`4から0まで: ${result}`);
}

// while文
function whileLoop() {
    displayOutput('=== while文の例 ===');
    let i = 0;
    let result = '';
    while (i < 5) {
        result += `${i} `;
        i++;
    }
    displayOutput(`while文: ${result}`);
}

// do-while文
function doWhileLoop() {
    displayOutput('=== do-while文の例 ===');
    let i = 0;
    let result = '';
    do {
        result += `${i} `;
        i++;
    } while (i < 5);
    displayOutput(`do-while文: ${result}`);
}

// forEach
function forEachLoop() {
    displayOutput('=== forEachの例 ===');
    let result = '';
    fruits.forEach((fruit, index) => {
        result += `${index}: ${fruit}, `;
    });
    displayOutput(`forEach: ${result}`);
}

// for...of
function forOfLoop() {
    displayOutput('=== for...ofの例 ===');
    let result = '';
    for (const fruit of fruits) {
        result += `${fruit} `;
    }
    displayOutput(`for...of: ${result}`);
}

// for...in
function forInLoop() {
    displayOutput('=== for...inの例 ===');
    let result = '';
    for (const index in fruits) {
        result += `${index}: ${fruits[index]}, `;
    }
    displayOutput(`for...in: ${result}`);
}

// break文
function breakExample() {
    displayOutput('=== break文の例 ===');
    let result = '';
    for (let i = 0; i < 10; i++) {
        if (i === 5) {
            break; // 5でループを終了
        }
        result += `${i} `;
    }
    displayOutput(`break文（5で終了）: ${result}`);
}

// continue文
function continueExample() {
    displayOutput('=== continue文の例 ===');
    let result = '';
    for (let i = 0; i < 10; i++) {
        if (i === 5) {
            continue; // 5をスキップ
        }
        result += `${i} `;
    }
    displayOutput(`continue文（5をスキップ）: ${result}`);
}

// 配列の合計
function sumArray() {
    displayOutput('=== 配列の合計 ===');
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    displayOutput(`配列: [${numbers.join(', ')}]`);
    displayOutput(`合計: ${sum}`);
}

// 最大値を探す
function findMax() {
    displayOutput('=== 最大値を探す ===');
    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    displayOutput(`配列: [${numbers.join(', ')}]`);
    displayOutput(`最大値: ${max}`);
}

// 偶数の数を数える
function countEven() {
    displayOutput('=== 偶数の数を数える ===');
    let count = 0;
    for (const num of numbers) {
        if (num % 2 === 0) {
            count++;
        }
    }
    displayOutput(`配列: [${numbers.join(', ')}]`);
    displayOutput(`偶数の数: ${count}`);
}

// 結果を表示する関数
function displayOutput(message) {
    const output = document.getElementById('output');
    output.innerHTML += `<div>${message}</div>`;
} 
