// タイマー処理の勉強用JavaScriptファイル

let timerInterval = null;
let countdownInterval = null;
let timerSeconds = 0;
let countdownValue = 10;

// setTimeout
function setTimeoutDemo() {
    displayOutput('=== setTimeout ===');
    
    displayOutput('3秒後にメッセージを表示します...');
    
    setTimeout(function() {
        displayOutput('3秒が経過しました！');
    }, 3000);
}

// setInterval
function setIntervalDemo() {
    displayOutput('=== setInterval ===');
    
    let count = 0;
    const interval = setInterval(function() {
        count++;
        displayOutput(`カウント: ${count}`);
        
        if (count >= 5) {
            clearInterval(interval);
            displayOutput('インターバルを停止しました');
        }
    }, 1000);
}

// clearTimeout
function clearTimeoutDemo() {
    displayOutput('=== clearTimeout ===');
    
    displayOutput('タイマーを設定しました（5秒後）');
    
    const timeoutId = setTimeout(function() {
        displayOutput('このメッセージは表示されません');
    }, 5000);
    
    // 2秒後にタイマーをキャンセル
    setTimeout(function() {
        clearTimeout(timeoutId);
        displayOutput('タイマーをキャンセルしました');
    }, 2000);
}

// clearInterval
function clearIntervalDemo() {
    displayOutput('=== clearInterval ===');
    
    let count = 0;
    const interval = setInterval(function() {
        count++;
        displayOutput(`インターバル: ${count}`);
    }, 1000);
    
    // 3秒後にインターバルを停止
    setTimeout(function() {
        clearInterval(interval);
        displayOutput('インターバルを停止しました');
    }, 3000);
}

// タイマー開始
function startTimer() {
    if (timerInterval) {
        displayOutput('タイマーは既に実行中です');
        return;
    }
    
    displayOutput('タイマーを開始しました');
    
    timerInterval = setInterval(function() {
        timerSeconds++;
        updateTimerDisplay();
    }, 1000);
}

// タイマー停止
function stopTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
        displayOutput('タイマーを停止しました');
    } else {
        displayOutput('タイマーは実行されていません');
    }
}

// タイマーリセット
function resetTimer() {
    stopTimer();
    timerSeconds = 0;
    updateTimerDisplay();
    displayOutput('タイマーをリセットしました');
}

// タイマー表示更新
function updateTimerDisplay() {
    const minutes = Math.floor(timerSeconds / 60);
    const seconds = timerSeconds % 60;
    const display = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    const timerDisplay = document.getElementById('timerDisplay');
    if (timerDisplay) {
        timerDisplay.textContent = display;
    }
}

// カウントダウン開始
function startCountdown() {
    if (countdownInterval) {
        displayOutput('カウントダウンは既に実行中です');
        return;
    }
    
    displayOutput('カウントダウンを開始しました');
    
    countdownInterval = setInterval(function() {
        countdownValue--;
        updateCountdownDisplay();
        
        if (countdownValue <= 0) {
            clearInterval(countdownInterval);
            countdownInterval = null;
            displayOutput('カウントダウン終了！');
        }
    }, 1000);
}

// カウントダウン停止
function stopCountdown() {
    if (countdownInterval) {
        clearInterval(countdownInterval);
        countdownInterval = null;
        displayOutput('カウントダウンを停止しました');
    } else {
        displayOutput('カウントダウンは実行されていません');
    }
}

// カウントダウン表示更新
function updateCountdownDisplay() {
    const countdownDisplay = document.getElementById('countdown');
    if (countdownDisplay) {
        countdownDisplay.textContent = countdownValue;
    }
}

// 遅延アラート
function delayedAlert() {
    displayOutput('5秒後にアラートを表示します...');
    
    setTimeout(function() {
        alert("Hello");
        displayOutput('アラートを表示しました');
    }, 5000);
}

// 定期更新
function periodicUpdate() {
    displayOutput('=== 定期更新 ===');
    
    let updateCount = 0;
    const interval = setInterval(function() {
        updateCount++;
        displayOutput(`定期更新 ${updateCount}: ${new Date().toLocaleTimeString()}`);
        
        if (updateCount >= 5) {
            clearInterval(interval);
            displayOutput('定期更新を停止しました');
        }
    }, 2000);
}

// デバウンス処理
function debounceDemo() {
    displayOutput('=== デバウンス処理 ===');
    
    let timeoutId = null;
    
    function debouncedFunction() {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        
        timeoutId = setTimeout(function() {
            displayOutput('デバウンス処理が実行されました');
        }, 1000);
    }
    
    // 複数回呼び出しをシミュレート
    debouncedFunction();
    debouncedFunction();
    debouncedFunction();
    
    displayOutput('デバウンス処理を設定しました（1秒後に実行）');
}

// 結果を表示する関数
function displayOutput(message) {
    const output = document.getElementById('output');
    output.innerHTML += `<div>${message}</div>`;
} 
