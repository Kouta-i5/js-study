// オブジェクトの勉強用JavaScriptファイル

// 基本的なオブジェクト
function basicObject() {
    displayOutput('=== 基本的なオブジェクト ===');
    
    const person = {
        name: '田中太郎',
        age: 25,
        city: '東京'
    };
    
    displayOutput(`名前: ${person.name}`);
    displayOutput(`年齢: ${person.age}`);
    displayOutput(`都市: ${person.city}`);
    displayOutput(`オブジェクト全体: ${JSON.stringify(person, null, 2)}`);
}

// プロパティの操作
function objectProperties() {
    displayOutput('=== プロパティの操作 ===');
    
    const car = {
        brand: 'トヨタ',
        model: 'カローラ',
        year: 2020
    };
    
    displayOutput(`元の車: ${JSON.stringify(car)}`);
    
    // プロパティの追加
    car.color = '白';
    displayOutput(`色を追加: ${JSON.stringify(car)}`);
    
    // プロパティの変更
    car.year = 2021;
    displayOutput(`年を変更: ${JSON.stringify(car)}`);
    
    // プロパティの削除
    delete car.color;
    displayOutput(`色を削除: ${JSON.stringify(car)}`);
    
    // プロパティの存在確認
    displayOutput(`brandプロパティは存在する: ${'brand' in car}`);
    displayOutput(`colorプロパティは存在する: ${'color' in car}`);
}

// メソッド
function objectMethods() {
    displayOutput('=== メソッド ===');
    
    const calculator = {
        add: function(a, b) {
            return a + b;
        },
        subtract: function(a, b) {
            return a - b;
        },
        multiply(a, b) { // 短縮記法
            return a * b;
        },
        divide: (a, b) => a / b // アロー関数
    };
    
    displayOutput(`5 + 3 = ${calculator.add(5, 3)}`);
    displayOutput(`10 - 4 = ${calculator.subtract(10, 4)}`);
    displayOutput(`6 × 7 = ${calculator.multiply(6, 7)}`);
    displayOutput(`15 ÷ 3 = ${calculator.divide(15, 3)}`);
}

// オブジェクトリテラル
function objectLiteral() {
    displayOutput('=== オブジェクトリテラル ===');
    
    const book = {
        title: 'JavaScript入門',
        author: '山田次郎',
        pages: 300,
        isAvailable: true,
        tags: ['プログラミング', 'JavaScript', '初心者']
    };
    
    displayOutput(`本の情報: ${JSON.stringify(book, null, 2)}`);
}

// コンストラクタ関数
function constructorFunction() {
    displayOutput('=== コンストラクタ関数 ===');
    
    function Person(name, age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
        this.greet = function() {
            return `こんにちは、${this.name}です。${this.city}に住んでいます。`;
        };
    }
    
    const person1 = new Person('佐藤花子', 30, '大阪');
    const person2 = new Person('鈴木一郎', 35, '名古屋');
    
    displayOutput(person1.greet());
    displayOutput(person2.greet());
}

// クラス構文
function classSyntax() {
    displayOutput('=== クラス構文 ===');
    
    class Animal {
        constructor(name, species) {
            this.name = name;
            this.species = species;
        }
        
        makeSound() {
            return `${this.name}が鳴いています`;
        }
        
        getInfo() {
            return `${this.name}は${this.species}です`;
        }
    }
    
    const dog = new Animal('ポチ', '犬');
    const cat = new Animal('タマ', '猫');
    
    displayOutput(dog.getInfo());
    displayOutput(dog.makeSound());
    displayOutput(cat.getInfo());
    displayOutput(cat.makeSound());
}

// キーの取得
function objectKeys() {
    displayOutput('=== キーの取得 ===');
    
    const student = {
        name: '田中太郎',
        grade: 3,
        subjects: ['数学', '英語', '理科'],
        scores: {
            math: 85,
            english: 90,
            science: 78
        }
    };
    
    const keys = Object.keys(student);
    displayOutput(`オブジェクトのキー: [${keys.join(', ')}]`);
    
    keys.forEach(key => {
        displayOutput(`キー: ${key}, 値: ${JSON.stringify(student[key])}`);
    });
}

// 値の取得
function objectValues() {
    displayOutput('=== 値の取得 ===');
    
    const colors = {
        red: '#FF0000',
        green: '#00FF00',
        blue: '#0000FF',
        yellow: '#FFFF00'
    };
    
    const values = Object.values(colors);
    displayOutput(`色の値: [${values.join(', ')}]`);
}

// エントリーの取得
function objectEntries() {
    displayOutput('=== エントリーの取得 ===');
    
    const fruits = {
        apple: 'りんご',
        banana: 'バナナ',
        orange: 'オレンジ'
    };
    
    const entries = Object.entries(fruits);
    displayOutput('エントリー:');
    entries.forEach(([key, value]) => {
        displayOutput(`  ${key}: ${value}`);
    });
}

// オブジェクトのコピー
function objectCopy() {
    displayOutput('=== オブジェクトのコピー ===');
    
    const original = {
        name: 'オリジナル',
        data: [1, 2, 3],
        nested: {
            value: 'ネストされた値'
        }
    };
    
    // シャローコピー
    const shallowCopy = Object.assign({}, original);
    shallowCopy.name = 'シャローコピー';
    shallowCopy.data.push(4);
    
    displayOutput(`オリジナル: ${JSON.stringify(original)}`);
    displayOutput(`シャローコピー: ${JSON.stringify(shallowCopy)}`);
    
    // ディープコピー
    const deepCopy = JSON.parse(JSON.stringify(original));
    deepCopy.name = 'ディープコピー';
    deepCopy.data.push(5);
    deepCopy.nested.value = '変更された値';
    
    displayOutput(`ディープコピー: ${JSON.stringify(deepCopy)}`);
}

// スプレッド演算子
function objectSpread() {
    displayOutput('=== スプレッド演算子 ===');
    
    const base = {
        name: 'ベース',
        type: '基本'
    };
    
    const extended = {
        ...base,
        type: '拡張',
        extra: '追加プロパティ'
    };
    
    displayOutput(`ベース: ${JSON.stringify(base)}`);
    displayOutput(`拡張: ${JSON.stringify(extended)}`);
    
    // 複数オブジェクトの結合
    const obj1 = { a: 1, b: 2 };
    const obj2 = { c: 3, d: 4 };
    const obj3 = { e: 5, f: 6 };
    
    const combined = { ...obj1, ...obj2, ...obj3 };
    displayOutput(`結合結果: ${JSON.stringify(combined)}`);
}

// 人物オブジェクト
function personObject() {
    displayOutput('=== 人物オブジェクト ===');
    
    const person = {
        name: '田中太郎',
        age: 25,
        occupation: 'エンジニア',
        skills: ['JavaScript', 'Python', 'React'],
        address: {
            city: '東京',
            country: '日本'
        },
        introduce() {
            return `こんにちは、${this.name}です。${this.age}歳で${this.occupation}をしています。`;
        },
        hasSkill(skill) {
            return this.skills.includes(skill);
        }
    };
    
    displayOutput(person.introduce());
    displayOutput(`JavaScriptスキル: ${person.hasSkill('JavaScript')}`);
    displayOutput(`Javaスキル: ${person.hasSkill('Java')}`);
    displayOutput(`住所: ${person.address.city}, ${person.address.country}`);
}

// 本オブジェクト
function bookObject() {
    displayOutput('=== 本オブジェクト ===');
    
    const book = {
        title: 'JavaScript完全ガイド',
        author: '山田次郎',
        publisher: '技術評論社',
        year: 2023,
        pages: 450,
        price: 3500,
        isAvailable: true,
        categories: ['プログラミング', 'Web開発', 'JavaScript'],
        getInfo() {
            return `${this.title} by ${this.author} (${this.year})`;
        },
        getPriceWithTax() {
            return Math.floor(this.price * 1.1);
        },
        isExpensive() {
            return this.price > 3000;
        }
    };
    
    displayOutput(book.getInfo());
    displayOutput(`税込価格: ${book.getPriceWithTax()}円`);
    displayOutput(`高価な本: ${book.isExpensive()}`);
    displayOutput(`カテゴリ: ${book.categories.join(', ')}`);
}

// 車オブジェクト
function carObject() {
    displayOutput('=== 車オブジェクト ===');
    
    const car = {
        brand: 'トヨタ',
        model: 'プリウス',
        year: 2022,
        color: '白',
        mileage: 15000,
        fuelType: 'ハイブリッド',
        features: ['ナビゲーション', 'バックカメラ', '自動運転支援'],
        start() {
            return `${this.brand} ${this.model}がエンジンを始動しました`;
        },
        drive(distance) {
            this.mileage += distance;
            return `${distance}km走行しました。総走行距離: ${this.mileage}km`;
        },
        getAge() {
            const currentYear = new Date().getFullYear();
            return currentYear - this.year;
        },
        isNew() {
            return this.getAge() <= 1;
        }
    };
    
    displayOutput(car.start());
    displayOutput(car.drive(100));
    displayOutput(`車齢: ${car.getAge()}年`);
    displayOutput(`新車: ${car.isNew()}`);
    displayOutput(`装備: ${car.features.join(', ')}`);
}

// 結果を表示する関数
function displayOutput(message) {
    const output = document.getElementById('output');
    output.innerHTML += `<div>${message}</div>`;
} 
