// Q.ピカチュウのオブジェクトに下記の仕様を満たすメソッド "levelUp" を追加しなさい（発展問題）
// - 実行するとlevelが1増える
// - levelが20以上でskillsに”スパーク”が追加される
// Hints: 下記のコードを使います
//   * this.level++;
//   * this.skills.push("スパーク");

// A.
const pikachu = {
    name: "ピカチュウ",
    level: 18,
    types: ["でんき"],
    skills: ["10万ボルト", "でんこうせっか", "たいあたり"],
    levelUp: function() {
        this.level++;
        if(this.level >= 20){
            this.skills.push("スパーク");
        }
    }
};

pikachu.levelUp();
console.log(pikachu.level);