// 条件分岐の勉強用JavaScriptファイル

// 基本的なif文
function basicIf() {
    displayOutput('=== 基本的なif文 ===');
    const age = 20;
    
    if (age >= 18) {
        displayOutput(`${age}歳は成人です`);
    }
    
    if (age < 18) {
        displayOutput(`${age}歳は未成年です`);
    }
}

// if-else文
function ifElse() {
    displayOutput('=== if-else文 ===');
    const age = 20;
    
    if (age >= 18) {
        displayOutput(`${age}歳は成人です`);
    } else {
        displayOutput(`${age}歳は未成年です`);
    }
}

// if-else if文
function ifElseIf() {
    displayOutput('=== if-else if文 ===');
    const score = 85;
    
    if (score >= 90) {
        displayOutput(`点数${score}点は優秀です`);
    } else if (score >= 80) {
        displayOutput(`点数${score}点は良好です`);
    } else if (score >= 70) {
        displayOutput(`点数${score}点は普通です`);
    } else if (score >= 60) {
        displayOutput(`点数${score}点は可です`);
    } else {
        displayOutput(`点数${score}点は不可です`);
    }
}

// 比較演算子
function comparisonOperators() {
    displayOutput('=== 比較演算子 ===');
    const a = 10;
    const b = 5;
    
    displayOutput(`a = ${a}, b = ${b}`);
    displayOutput(`a > b: ${a > b}`);
    displayOutput(`a < b: ${a < b}`);
    displayOutput(`a >= b: ${a >= b}`);
    displayOutput(`a <= b: ${a <= b}`);
    displayOutput(`a === b: ${a === b}`);
    displayOutput(`a !== b: ${a !== b}`);
    displayOutput(`a == b: ${a == b}`);
    displayOutput(`a != b: ${a != b}`);
}

// 論理演算子
function logicalOperators() {
    displayOutput('=== 論理演算子 ===');
    const age = 25;
    const hasLicense = true;
    
    displayOutput(`年齢: ${age}, 免許: ${hasLicense}`);
    displayOutput(`年齢が18以上 AND 免許あり: ${age >= 18 && hasLicense}`);
    displayOutput(`年齢が30以上 OR 免許あり: ${age >= 30 || hasLicense}`);
    displayOutput(`免許なし: ${!hasLicense}`);
}

// 三項演算子
function ternaryOperator() {
    displayOutput('=== 三項演算子 ===');
    const age = 20;
    const status = age >= 18 ? '成人' : '未成年';
    displayOutput(`${age}歳は${status}です`);
    
    const score = 85;
    const grade = score >= 80 ? '合格' : '不合格';
    displayOutput(`点数${score}点は${grade}です`);
}

// switch文
function switchStatement() {
    displayOutput('=== switch文 ===');
    const day = new Date().getDay();
    let dayName;
    
    switch (day) {
        case 0:
            dayName = '日曜日';
            break;
        case 1:
            dayName = '月曜日';
            break;
        case 2:
            dayName = '火曜日';
            break;
        case 3:
            dayName = '水曜日';
            break;
        case 4:
            dayName = '木曜日';
            break;
        case 5:
            dayName = '金曜日';
            break;
        case 6:
            dayName = '土曜日';
            break;
        default:
            dayName = '不明';
    }
    
    displayOutput(`今日は${dayName}です`);
}

// 年齢チェック
function checkAge() {
    const age = parseInt(document.getElementById('ageInput').value);
    displayOutput('=== 年齢チェック ===');
    
    if (age < 0) {
        displayOutput('無効な年齢です');
    } else if (age < 13) {
        displayOutput(`${age}歳は子供です`);
    } else if (age < 20) {
        displayOutput(`${age}歳はティーンエイジャーです`);
    } else if (age < 65) {
        displayOutput(`${age}歳は成人です`);
    } else {
        displayOutput(`${age}歳はシニアです`);
    }
}

// 成績判定
function checkGrade() {
    const score = parseInt(document.getElementById('scoreInput').value);
    displayOutput('=== 成績判定 ===');
    
    if (score < 0 || score > 100) {
        displayOutput('無効な点数です（0-100の範囲で入力してください）');
    } else if (score >= 90) {
        displayOutput(`点数${score}点はA評価です`);
    } else if (score >= 80) {
        displayOutput(`点数${score}点はB評価です`);
    } else if (score >= 70) {
        displayOutput(`点数${score}点はC評価です`);
    } else if (score >= 60) {
        displayOutput(`点数${score}点はD評価です`);
    } else {
        displayOutput(`点数${score}点はF評価です`);
    }
}

// 数値判定
function checkNumber() {
    displayOutput('=== 数値判定 ===');
    const numbers = [0, 1, -5, 100, 3.14, 'abc'];
    
    numbers.forEach(num => {
        if (typeof num === 'number') {
            if (num > 0) {
                displayOutput(`${num}は正の数です`);
            } else if (num < 0) {
                displayOutput(`${num}は負の数です`);
            } else {
                displayOutput(`${num}はゼロです`);
            }
        } else {
            displayOutput(`${num}は数値ではありません`);
        }
    });
}

// 文字列判定
function checkString() {
    displayOutput('=== 文字列判定 ===');
    const strings = ['hello', 'JavaScript', '', 'こんにちは', null, undefined];
    
    strings.forEach(str => {
        if (typeof str === 'string') {
            if (str.length === 0) {
                displayOutput(`"${str}"は空文字列です`);
            } else if (str.length > 10) {
                displayOutput(`"${str}"は長い文字列です（${str.length}文字）`);
            } else {
                displayOutput(`"${str}"は短い文字列です（${str.length}文字）`);
            }
        } else {
            displayOutput(`${str}は文字列ではありません`);
        }
    });
}

// 結果を表示する関数
function displayOutput(message) {
    const output = document.getElementById('output');
    output.innerHTML += `<div>${message}</div>`;
} 
