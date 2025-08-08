// イベント処理の勉強用JavaScriptファイル

// クリックイベント
function clickEvent() {
    displayOutput('=== クリックイベント ===');
    
    const button = document.querySelector("#demoButton");
    if (button) {
        button.addEventListener("click", function() {
            displayOutput("ボタンがクリックされました！");
        });
        displayOutput('ボタンにクリックイベントを追加しました');
    }
}

// マウスイベント
function mouseEvents() {
    displayOutput('=== マウスイベント ===');
    
    const target = document.querySelector("#eventTarget");
    if (target) {
        target.addEventListener("mouseenter", function() {
            this.style.backgroundColor = "#dc3545";
            displayOutput("マウスが要素に入りました");
        });
        
        target.addEventListener("mouseleave", function() {
            this.style.backgroundColor = "#28a745";
            displayOutput("マウスが要素から出ました");
        });
        
        displayOutput('マウスイベントを追加しました');
    }
}

// キーボードイベント
function keyboardEvents() {
    displayOutput('=== キーボードイベント ===');
    
    const input = document.querySelector("#textInput");
    if (input) {
        input.addEventListener("keydown", function(event) {
            displayOutput(`キーが押されました: ${event.key}`);
        });
        
        input.addEventListener("keyup", function(event) {
            displayOutput(`キーが離されました: ${event.key}`);
        });
        
        displayOutput('キーボードイベントを追加しました');
    }
}

// addEventListener
function addEventListener() {
    displayOutput('=== addEventListener ===');
    
    const clickable1 = document.querySelector("#clickable1");
    if (clickable1) {
        clickable1.addEventListener("click", function() {
            displayOutput("クリック可能な要素1がクリックされました");
        });
        
        displayOutput('addEventListenerでイベントを追加しました');
    }
}

// removeEventListener
function removeEventListener() {
    displayOutput('=== removeEventListener ===');
    
    const clickable2 = document.querySelector("#clickable2");
    if (clickable2) {
        const handler = function() {
            displayOutput("クリック可能な要素2がクリックされました");
        };
        
        clickable2.addEventListener("click", handler);
        displayOutput('イベントリスナーを追加しました');
        
        // 3秒後にイベントリスナーを削除
        setTimeout(() => {
            clickable2.removeEventListener("click", handler);
            displayOutput('イベントリスナーを削除しました');
        }, 3000);
    }
}

// イベントオブジェクト
function eventObject() {
    displayOutput('=== イベントオブジェクト ===');
    
    const target = document.querySelector("#eventTarget");
    if (target) {
        target.addEventListener("click", function(event) {
            displayOutput(`イベントタイプ: ${event.type}`);
            displayOutput(`ターゲット要素: ${event.target.tagName}`);
            displayOutput(`クリック位置 X: ${event.clientX}, Y: ${event.clientY}`);
            displayOutput(`修飾キー Ctrl: ${event.ctrlKey}`);
        });
        
        displayOutput('イベントオブジェクトの情報を表示するように設定しました');
    }
}

// イベントバブリング
function eventBubbling() {
    displayOutput('=== イベントバブリング ===');
    
    const container = document.querySelector(".demo-area");
    const target = document.querySelector("#eventTarget");
    
    if (container && target) {
        container.addEventListener("click", function() {
            displayOutput("コンテナがクリックされました（バブリング）");
        });
        
        target.addEventListener("click", function() {
            displayOutput("ターゲットがクリックされました");
        });
        
        displayOutput('イベントバブリングを設定しました');
    }
}

// イベントキャプチャリング
function eventCapturing() {
    displayOutput('=== イベントキャプチャリング ===');
    
    const container = document.querySelector(".demo-area");
    const target = document.querySelector("#eventTarget");
    
    if (container && target) {
        container.addEventListener("click", function() {
            displayOutput("コンテナがクリックされました（キャプチャリング）");
        }, true); // 第3引数にtrueを指定
        
        target.addEventListener("click", function() {
            displayOutput("ターゲットがクリックされました");
        });
        
        displayOutput('イベントキャプチャリングを設定しました');
    }
}

// 伝播の停止
function stopPropagation() {
    displayOutput('=== 伝播の停止 ===');
    
    const container = document.querySelector(".demo-area");
    const target = document.querySelector("#eventTarget");
    
    if (container && target) {
        container.addEventListener("click", function() {
            displayOutput("コンテナがクリックされました");
        });
        
        target.addEventListener("click", function(event) {
            displayOutput("ターゲットがクリックされました（伝播を停止）");
            event.stopPropagation();
        });
        
        displayOutput('イベント伝播の停止を設定しました');
    }
}

// ポケモンゲーム
function pokemonGame() {
    displayOutput('=== ポケモンゲーム ===');
    
    const button = document.querySelector("#demoButton");
    if (button) {
        button.addEventListener("click", function() {
            if (Math.random() <= 0.2) {
                displayOutput("ピカチュウをゲットした！");
            } else {
                displayOutput("残念");
            }
        });
        
        displayOutput('ポケモンゲームを設定しました（20%の確率で成功）');
    }
}

// フォームバリデーション
function formValidation() {
    displayOutput('=== フォームバリデーション ===');
    
    const input = document.querySelector("#textInput");
    if (input) {
        input.addEventListener("blur", function() {
            if (this.value.length < 3) {
                displayOutput("3文字以上入力してください");
                this.style.borderColor = "red";
            } else {
                this.style.borderColor = "green";
            }
        });
        
        displayOutput('フォームバリデーションを設定しました');
    }
}

// ドラッグ&ドロップ
function dragAndDrop() {
    displayOutput('=== ドラッグ&ドロップ ===');
    
    const target = document.querySelector("#eventTarget");
    if (target) {
        target.draggable = true;
        
        target.addEventListener("dragstart", function(event) {
            displayOutput("ドラッグ開始");
            event.dataTransfer.setData("text", this.textContent);
        });
        
        target.addEventListener("dragend", function() {
            displayOutput("ドラッグ終了");
        });
        
        displayOutput('ドラッグ&ドロップ機能を設定しました');
    }
}

// 結果を表示する関数
function displayOutput(message) {
    const output = document.getElementById('output');
    output.innerHTML += `<div>${message}</div>`;
} 