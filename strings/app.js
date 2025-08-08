// 文字列操作の勉強用JavaScriptファイル

// 文字列の基本
function stringBasics() {
    displayOutput('=== 文字列の基本 ===');
    
    const str1 = "Hello";
    const str2 = 'World';
    const str3 = `JavaScript`;
    
    displayOutput(`str1: "${str1}"`);
    displayOutput(`str2: "${str2}"`);
    displayOutput(`str3: "${str3}"`);
    displayOutput(`文字列の型: ${typeof str1}`);
}

// 文字列の長さ
function stringLength() {
    displayOutput('=== 文字列の長さ ===');
    
    const text = "Hello World";
    displayOutput(`文字列: "${text}"`);
    displayOutput(`長さ: ${text.length}`);
    
    const japanese = "こんにちは";
    displayOutput(`日本語: "${japanese}"`);
    displayOutput(`長さ: ${japanese.length}`);
}

// 文字列の連結
function stringConcatenation() {
    displayOutput('=== 文字列の連結 ===');
    
    const str1 = "Hello";
    const str2 = "World";
    
    // +演算子
    const result1 = str1 + " " + str2;
    displayOutput(`+演算子: "${result1}"`);
    
    // テンプレートリテラル
    const result2 = `${str1} ${str2}`;
    displayOutput(`テンプレートリテラル: "${result2}"`);
    
    // concatメソッド
    const result3 = str1.concat(" ", str2);
    displayOutput(`concatメソッド: "${result3}"`);
}

// 大文字変換
function toUpperCase() {
    displayOutput('=== 大文字変換 ===');
    
    const text = "hello world";
    displayOutput(`元の文字列: "${text}"`);
    displayOutput(`大文字: "${text.toUpperCase()}"`);
}

// 小文字変換
function toLowerCase() {
    displayOutput('=== 小文字変換 ===');
    
    const text = "HELLO WORLD";
    displayOutput(`元の文字列: "${text}"`);
    displayOutput(`小文字: "${text.toLowerCase()}"`);
}

// 空白除去
function trim() {
    displayOutput('=== 空白除去 ===');
    
    const text = "  Hello World  ";
    displayOutput(`元の文字列: "${text}"`);
    displayOutput(`trim後: "${text.trim()}"`);
    displayOutput(`左側trim: "${text.trimStart()}"`);
    displayOutput(`右側trim: "${text.trimEnd()}"`);
}

// 文字列置換
function replace() {
    displayOutput('=== 文字列置換 ===');
    
    const text = "Hello World";
    displayOutput(`元の文字列: "${text}"`);
    displayOutput(`replace: "${text.replace("World", "JavaScript")}"`);
    displayOutput(`replaceAll: "${text.replaceAll("l", "L")}"`);
}

// indexOf
function indexOf() {
    displayOutput('=== indexOf ===');
    
    const text = "Hello World";
    displayOutput(`文字列: "${text}"`);
    displayOutput(`"World"の位置: ${text.indexOf("World")}`);
    displayOutput(`"o"の位置: ${text.indexOf("o")}`);
    displayOutput(`"xyz"の位置: ${text.indexOf("xyz")}`); // -1
}

// includes
function includes() {
    displayOutput('=== includes ===');
    
    const text = "Hello World";
    displayOutput(`文字列: "${text}"`);
    displayOutput(`"World"を含む: ${text.includes("World")}`);
    displayOutput(`"JavaScript"を含む: ${text.includes("JavaScript")}`);
}

// split
function split() {
    displayOutput('=== split ===');
    
    const text = "apple,banana,orange";
    displayOutput(`元の文字列: "${text}"`);
    
    const fruits = text.split(",");
    displayOutput(`分割結果: [${fruits.join(", ")}]`);
    
    const words = "Hello World JavaScript".split(" ");
    displayOutput(`単語分割: [${words.join(", ")}]`);
}

// slice
function slice() {
    displayOutput('=== slice ===');
    
    const text = "Hello World";
    displayOutput(`元の文字列: "${text}"`);
    displayOutput(`slice(0, 5): "${text.slice(0, 5)}"`);
    displayOutput(`slice(6): "${text.slice(6)}"`);
    displayOutput(`slice(-5): "${text.slice(-5)}"`);
}

// substring
function substring() {
    displayOutput('=== substring ===');
    
    const text = "Hello World";
    displayOutput(`元の文字列: "${text}"`);
    displayOutput(`substring(0, 5): "${text.substring(0, 5)}"`);
    displayOutput(`substring(6): "${text.substring(6)}"`);
}

// イニシャル取得
function getInitialName() {
    displayOutput('=== イニシャル取得 ===');
    
    const name = document.getElementById('nameInput').value;
    displayOutput(`入力された名前: "${name}"`);
    
    const getInitialName = (name) => {
        const nameArray = name.split(" ");
        displayOutput(`nameArray: [${nameArray.join(", ")}]`);
        
        const initialLast = nameArray[0].slice(0, 1);
        displayOutput(`initialLast: "${initialLast}"`);
        
        const initialFirst = nameArray[1].slice(0, 1);
        displayOutput(`initialFirst: "${initialFirst}"`);
        
        return initialLast + "." + initialFirst;
    };
    
    const result = getInitialName(name);
    displayOutput(`結果: "${result}"`);
}

// 文字列の逆順
function reverseString() {
    displayOutput('=== 文字列の逆順 ===');
    
    const text = "Hello World";
    displayOutput(`元の文字列: "${text}"`);
    
    const reversed = text.split("").reverse().join("");
    displayOutput(`逆順: "${reversed}"`);
}

// 単語数カウント
function countWords() {
    displayOutput('=== 単語数カウント ===');
    
    const text = "Hello World JavaScript";
    displayOutput(`文字列: "${text}"`);
    
    const words = text.split(" ");
    displayOutput(`単語数: ${words.length}`);
    displayOutput(`単語: [${words.join(", ")}]`);
}

// 回文チェック
function palindromeCheck() {
    displayOutput('=== 回文チェック ===');
    
    const text = "racecar";
    displayOutput(`文字列: "${text}"`);
    
    const isPalindrome = (str) => {
        const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
        const reversed = cleaned.split("").reverse().join("");
        return cleaned === reversed;
    };
    
    const result = isPalindrome(text);
    displayOutput(`回文かどうか: ${result}`);
    
    // 別の例
    const text2 = "Hello";
    displayOutput(`文字列: "${text2}"`);
    displayOutput(`回文かどうか: ${isPalindrome(text2)}`);
}

// 結果を表示する関数
function displayOutput(message) {
    const output = document.getElementById('output');
    output.innerHTML += `<div>${message}</div>`;
} 