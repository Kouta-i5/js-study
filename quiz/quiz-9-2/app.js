document.getElementById("js-button").addEventListener("click", () => {
    if (Math.random() <= 0.2) {
        alert("ピカチュウをゲットした！");
    } else {
        alert("ざんねん！もうすこしでつかまえられたのに！");
    }
});