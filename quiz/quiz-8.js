// Q. "サンダー", "ホウオウ", "スイクン", "ラティアス", "パルキア" を持つ配列myPokemonsを作成しなさい
// A.
const myPokemons = ["サンダー", "ホウオウ", "スイクン", "ラティアス", "パルキア"];

// Q. myPokemonsに新しい値 "ミュウツー" を追加しなさい
// A.
myPokemons.push("ミュウツー");

// Q. myPokemonsが持つ値が今いくつかあるか出力しなさい
// A.
console.log(myPokemons.length);

// Q. oldVersionsとnewVersionsを1つの配列にまとめなさい
// A.
const oldVersions = ["赤","緑", "青"];
const nerVersions = ["ルビー", "サファイア", "エメラルド"];
console.log(oldVersions.concat(nerVersions));