// 配列の勉強用JavaScriptファイル

let fruits = ['りんご', 'バナナ', 'オレンジ'];

// 配列を作成
function createArray() {
    fruits = ['りんご', 'バナナ', 'オレンジ'];
    displayOutput(`配列を作成しました: [${fruits.join(', ')}]`);
}

// 要素を追加
function addElement() {
    fruits.push('ぶどう');
    displayOutput(`要素を追加しました: [${fruits.join(', ')}]`);
}

// 要素を削除
function removeElement() {
    const removed = fruits.pop();
    displayOutput(`最後の要素「${removed}」を削除しました: [${fruits.join(', ')}]`);
}

// 要素にアクセス
function accessElement() {
    displayOutput(`最初の要素: ${fruits[0]}`);
    displayOutput(`2番目の要素: ${fruits[1]}`);
    displayOutput(`最後の要素: ${fruits[fruits.length - 1]}`);
}

// 配列の長さ
function arrayLength() {
    displayOutput(`配列の長さ: ${fruits.length}`);
    displayOutput(`配列の内容: [${fruits.join(', ')}]`);
}

// 配列メソッドを試す
function arrayMethods() {
    displayOutput('=== 配列メソッドの例 ===');
    
    // map
    const upperFruits = fruits.map(fruit => fruit.toUpperCase());
    displayOutput(`map (大文字に変換): [${upperFruits.join(', ')}]`);
    
    // filter
    const longFruits = fruits.filter(fruit => fruit.length > 3);
    displayOutput(`filter (3文字より長い): [${longFruits.join(', ')}]`);
    
    // find
    const found = fruits.find(fruit => fruit.includes('ん'));
    displayOutput(`find (「ん」を含む): ${found}`);
    
    // includes
    const hasApple = fruits.includes('りんご');
    displayOutput(`includes (りんごがあるか): ${hasApple}`);
}

// 配列の反復処理
function arrayIteration() {
    displayOutput('=== 配列の反復処理 ===');
    
    // forEach
    displayOutput('forEach:');
    fruits.forEach((fruit, index) => {
        displayOutput(`  ${index}: ${fruit}`);
    });
    
    // for...of
    displayOutput('for...of:');
    for (const fruit of fruits) {
        displayOutput(`  ${fruit}`);
    }
    
    // for...in
    displayOutput('for...in:');
    for (const index in fruits) {
        displayOutput(`  ${index}: ${fruits[index]}`);
    }
}

// 結果を表示する関数
function displayOutput(message) {
    const output = document.getElementById('output');
    output.innerHTML += `<div>${message}</div>`;
} 
