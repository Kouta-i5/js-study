// 変数とデータ型の勉強用JavaScriptファイル

// 基本的な変数
function basicVariables() {
    displayOutput('=== 基本的な変数 ===');
    
    const foo = 1;
    const hoge = "bar";
    const array = [1, "Hello", hoge];
    
    displayOutput(`foo: ${foo}`);
    displayOutput(`hoge: ${hoge}`);
    displayOutput(`array: [${array.join(', ')}]`);
    displayOutput(`array[0]: ${array[0]}`);
}

// 文字列の連結
function stringConcatenation() {
    displayOutput('=== 文字列の連結 ===');
    
    displayOutput(`"Hello" + "World": ${"Hello" + "World"}`);
    displayOutput(`"1" + "1": ${"1" + "1"}`);
    displayOutput(`1 + 1: ${1 + 1}`);
}

// 型変換
function typeConversion() {
    displayOutput('=== 型変換 ===');
    
    displayOutput(`String(123): ${String(123)}`);
    displayOutput(`Number("123"): ${Number("123")}`);
    displayOutput(`Boolean(1): ${Boolean(1)}`);
    displayOutput(`Boolean(0): ${Boolean(0)}`);
}

// 配列の基本
function arrayBasics() {
    displayOutput('=== 配列の基本 ===');
    
    const firstPokemons = ["にゃハオ", "ホゲータ", "クワっつ"];
    displayOutput(`firstPokemons: [${firstPokemons.join(', ')}]`);
    displayOutput(`firstPokemons[1]: ${firstPokemons[1]}`);
}

// 配列へのアクセス
function arrayAccess() {
    displayOutput('=== 配列へのアクセス ===');
    
    const questions = ["a", "b", "c"];
    displayOutput(`questions: [${questions.join(', ')}]`);
    displayOutput(`questions[0]: ${questions[0]}`);
    displayOutput(`questions.length: ${questions.length}`);
}

// for文
function forLoop() {
    displayOutput('=== for文 ===');
    
    const questions = ["a", "b", "c"];
    let result = '';
    
    for (let index = 0; index < questions.length; index++) {
        result += `${questions[index]} `;
    }
    
    displayOutput(`for文の結果: ${result}`);
}

// インクリメント・デクリメント
function incrementDecrement() {
    displayOutput('=== インクリメント・デクリメント ===');
    
    let a = 5;
    displayOutput(`初期値: ${a}`);
    
    a++; // インクリメント
    displayOutput(`a++: ${a}`);
    
    a--; // デクリメント
    displayOutput(`a--: ${a}`);
    
    displayOutput('for(初期値; 条件式; 増減式){//処理}');
}

// if文
function ifStatements() {
    displayOutput('=== if文 ===');
    
    let isLogin = true;
    
    if (!isLogin) {
        displayOutput("ログインしてください");
    } else {
        displayOutput("ログイン済みです");
    }
}

// if-else文
function ifElseStatements() {
    displayOutput('=== if-else文 ===');
    
    let isLogin = true;
    
    if (!isLogin) {
        displayOutput("ログインしてください");
    } else {
        displayOutput("ログイン成功中");
    }
}

// if-else if文
function ifElseIfStatements() {
    displayOutput('=== if-else if文 ===');
    
    const userType = "member"; // member, admin, owner
    
    if (userType === "member") {
        displayOutput("アクセスできません");
    } else if (userType === "admin") {
        displayOutput("アクセスできる");
    } else if (userType === "owner") {
        displayOutput("完全アクセス");
    }
}

// 関数の基本
function functionBasics() {
    displayOutput('=== 関数の基本 ===');
    
    // 通常関数
    function greet(name) {
        return `こんにちは、${name}さん！`;
    }
    
    displayOutput(greet("田中"));
    
    // 関数式
    const greet2 = function(name) {
        return `おはよう、${name}さん！`;
    };
    
    displayOutput(greet2("佐藤"));
}

// アロー関数
function arrowFunctions() {
    displayOutput('=== アロー関数 ===');
    
    const greet = (name) => {
        return `こんにちは、${name}さん！`;
    };
    
    const add = (a, b) => a + b;
    
    displayOutput(greet("鈴木"));
    displayOutput(`add(5, 3): ${add(5, 3)}`);
}

// デフォルトパラメータ
function defaultParameters() {
    displayOutput('=== デフォルトパラメータ ===');
    
    function changeDarkMode(time = 20, color = "#333") {
        displayOutput(`時間: ${time}, 色: ${color}`);
    }
    
    changeDarkMode();
    changeDarkMode(18);
    changeDarkMode(18, "#000");
}

// コールバック関数
function callbackFunctions() {
    displayOutput('=== コールバック関数 ===');
    
    function foo(callback) {
        displayOutput("Hi, Tom!");
        callback();
    }
    
    function bar() {
        displayOutput("Hi, Ken");
    }
    
    foo(bar);
}

// return文
function returnStatements() {
    displayOutput('=== return文 ===');
    
    function getSeason() {
        const month = new Date().getMonth() + 1;
        
        if (month >= 3 && month <= 5) {
            return "spring";
        } else if (month >= 6 && month <= 8) {
            return "summer";
        } else if (month >= 9 && month <= 11) {
            return "autumn";
        } else {
            return "winter";
        }
    }
    
    const season = getSeason();
    displayOutput(`現在の季節: ${season}`);
}

// 変数のスコープ
function variableScope() {
    displayOutput('=== 変数のスコープ ===');
    
    const bar1 = 1; // グローバル変数
    
    function foo() {
        const bar2 = 2; // ローカル変数
        displayOutput(`関数内のbar2: ${bar2}`);
        displayOutput(`関数内からbar1: ${bar1}`);
    }
    
    displayOutput(`グローバルのbar1: ${bar1}`);
    foo();
    // displayOutput(`bar2: ${bar2}`); // エラーになる
}

// オブジェクトの基本
function objectBasics() {
    displayOutput('=== オブジェクトの基本 ===');
    
    const snsUser = {
        id: 9,
        userName: "Taro",
        gender: "male",
        followers: ["a", "b", "c"]
    };
    
    displayOutput(`ID: ${snsUser.id}`);
    displayOutput(`ユーザー名: ${snsUser.userName}`);
    displayOutput(`性別: ${snsUser.gender}`);
    displayOutput(`フォロワー: [${snsUser.followers.join(', ')}]`);
}

// オブジェクトのメソッド
function objectMethods() {
    displayOutput('=== オブジェクトのメソッド ===');
    
    const snsUser = {
        userName: "Taro",
        like: function() {
            displayOutput("Like!");
        },
        post: function(contents) {
            return `${this.userName}が${contents}を投稿しました`;
        }
    };
    
    snsUser.like();
    displayOutput(snsUser.post("プログラミングなう"));
}

// ネストしたオブジェクト
function nestedObjects() {
    displayOutput('=== ネストしたオブジェクト ===');
    
    const snsUser = {
        userName: "Taro",
        settings: {
            premium: true,
            darkMode: false
        }
    };
    
    displayOutput(`プレミアム: ${snsUser.settings.premium}`);
    displayOutput(`ダークモード: ${snsUser.settings.darkMode}`);
}

// Dateオブジェクト
function dateObject() {
    displayOutput('=== Dateオブジェクト ===');
    
    const time = 18; // 午後6時
    const now = new Date().getHours();
    
    displayOutput(`現在時刻: ${now}時`);
    
    if (now > time) {
        displayOutput("今は18時を過ぎています");
    } else {
        displayOutput("まだ18時になっていません");
    }
}

// 配列メソッド
function arrayMethods() {
    displayOutput('=== 配列メソッド ===');
    
    const myPokemon = ["サンダー", "鳳凰", "ミュツー"];
    displayOutput(`元の配列: [${myPokemon.join(', ')}]`);
    
    myPokemon.push("パルキア");
    displayOutput(`push後: [${myPokemon.join(', ')}]`);
    displayOutput(`配列の長さ: ${myPokemon.length}`);
    
    const oldVersions = ["red", "green", "blue"];
    const newVersions = ["ruby", "sapphire", "emerald"];
    const combined = oldVersions.concat(newVersions);
    displayOutput(`結合後: [${combined.join(', ')}]`);
}

// 文字列メソッド
function stringMethods() {
    displayOutput('=== 文字列メソッド ===');
    
    const text = "Hello World";
    displayOutput(`元の文字列: "${text}"`);
    displayOutput(`文字列の長さ: ${text.length}`);
    displayOutput(`大文字: "${text.toUpperCase()}"`);
    displayOutput(`小文字: "${text.toLowerCase()}"`);
}

// 結果を表示する関数
function displayOutput(message) {
    const output = document.getElementById('output');
    output.innerHTML += `<div>${message}</div>`;
} 