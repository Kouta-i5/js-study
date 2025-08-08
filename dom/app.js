// DOM操作の勉強用JavaScriptファイル

// 要素の選択方法
function selectElements() {
    displayOutput('=== 要素の選択方法 ===');
    
    displayOutput('1. document.querySelector("#id") - IDで要素を選択');
    displayOutput('2. document.querySelector(".class") - クラスで要素を選択');
    displayOutput('3. document.getElementById("id") - IDで要素を選択');
    displayOutput('4. document.getElementsByClassName("class") - クラスで要素を選択');
    displayOutput('5. document.querySelectorAll(".class") - クラスで複数要素を選択');
}

// querySelector
function querySelectorDemo() {
    displayOutput('=== querySelector ===');
    
    const pokemonElement = document.querySelector("#pokemon");
    if (pokemonElement) {
        displayOutput(`#pokemonの内容: ${pokemonElement.textContent}`);
        pokemonElement.innerText = "ポケモン撮りたい";
        displayOutput('内容を変更しました');
    }
}

// getElementById
function getElementByIdDemo() {
    displayOutput('=== getElementById ===');
    
    const buttonElement = document.getElementById("button");
    if (buttonElement) {
        displayOutput(`#buttonの内容: ${buttonElement.textContent}`);
        displayOutput(`#buttonのタイプ: ${buttonElement.type}`);
    }
}

// getElementsByClassName
function getElementsByClassNameDemo() {
    displayOutput('=== getElementsByClassName ===');
    
    const barElements = document.getElementsByClassName("bar");
    displayOutput(`.bar要素の数: ${barElements.length}`);
    
    if (barElements.length > 0) {
        displayOutput(`最初の.bar要素: ${barElements[0].textContent}`);
    }
}

// 要素の作成
function createElement() {
    displayOutput('=== 要素の作成 ===');
    
    const newElement = document.createElement("div");
    newElement.textContent = "新しく作成された要素";
    newElement.style.color = "red";
    
    displayOutput('新しいdiv要素を作成しました');
    displayOutput(`要素のタグ名: ${newElement.tagName}`);
    displayOutput(`要素の内容: ${newElement.textContent}`);
}

// 要素の追加
function appendChild() {
    displayOutput('=== 要素の追加 ===');
    
    const newPost = document.createElement("article");
    newPost.setAttribute("class", "post");
    newPost.innerText = "お腹減ったなう";
    
    const timeline = document.querySelector(".timeline");
    if (timeline) {
        timeline.appendChild(newPost);
        displayOutput('タイムラインに新しい投稿を追加しました');
    }
}

// 属性の設定
function setAttribute() {
    displayOutput('=== 属性の設定 ===');
    
    const element = document.createElement("div");
    element.setAttribute("class", "demo-class");
    element.setAttribute("data-id", "123");
    element.textContent = "属性付き要素";
    
    displayOutput(`クラス: ${element.getAttribute("class")}`);
    displayOutput(`data-id: ${element.getAttribute("data-id")}`);
}

// innerText
function innerTextDemo() {
    displayOutput('=== innerText ===');
    
    const element = document.querySelector("#output");
    if (element) {
        element.innerText = "innerTextで設定されたテキスト";
        displayOutput('innerTextでテキストを設定しました');
    }
}

// innerHTML
function innerHTMLDemo() {
    displayOutput('=== innerHTML ===');
    
    const element = document.querySelector("#output");
    if (element) {
        element.innerHTML = "<strong>innerHTMLで設定されたHTML</strong>";
        displayOutput('innerHTMLでHTMLを設定しました');
    }
}

// textContent
function textContentDemo() {
    displayOutput('=== textContent ===');
    
    const element = document.querySelector("#output");
    if (element) {
        element.textContent = "textContentで設定されたテキスト";
        displayOutput('textContentでテキストを設定しました');
    }
}

// ポケモンデモ
function pokemonDemo() {
    displayOutput('=== ポケモンデモ ===');
    
    const pokemonElement = document.querySelector("#pokemon");
    if (pokemonElement) {
        pokemonElement.innerText = "ポケモン撮りたい";
        displayOutput('ポケモン要素の内容を変更しました');
    }
}

// タイムラインデモ
function timelineDemo() {
    displayOutput('=== タイムラインデモ ===');
    
    const $post = document.createElement("article");
    $post.setAttribute("class", "post");
    $post.innerText = "お腹減ったなう";
    
    const $timeline = document.querySelector(".timeline");
    if ($timeline) {
        $timeline.appendChild($post);
        displayOutput('タイムラインに投稿を追加しました');
    }
}

// ボタンデモ
function buttonDemo() {
    displayOutput('=== ボタンデモ ===');
    
    const button = document.querySelector("#button");
    const output = document.querySelector("#output");
    
    if (button && output) {
        button.addEventListener("click", function() {
            output.innerHTML = "ピカチュウ";
            displayOutput('ボタンがクリックされました');
        });
        
        displayOutput('ボタンにクリックイベントを追加しました');
    }
}

// 結果を表示する関数
function displayOutput(message) {
    const output = document.getElementById('output');
    output.innerHTML += `<div>${message}</div>`;
} 