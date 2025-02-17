(() => {
    // カウンターを取得
    const $jsCounter = document.getElementById("js-counter");

    // js-buttonをクリックすると値が1増減する関数
    const clickHandler = (e) => {
		// カウンター値を取得
        const $jsCounterNumber = parseInt($jsCounter.textContent);
		// クリックされたボタンを取得
        const $clickButton = e.currentTarget;

		// クリックされたボタンを判別して計算
        if ($clickButton.textContent === "+") {
            $jsCounter.textContent = $jsCounterNumber + 1;
        } else {
            // アレンジ箇所(カウンターの値が0の場合は減算できない)
            if($jsCounterNumber !== 0) {
                $jsCounter.textContent = $jsCounterNumber - 1;
            }
            // アレンジ箇所(アラート)
            if($jsCounterNumber === 0) {
                alert("値が0のため減算できません");
            }
        }
    };
	// イベントリスナーを設定
    document.getElementsByClassName("js-button")[0].addEventListener("click", (e) => clickHandler(e));
    document.getElementsByClassName("js-button")[1].addEventListener("click", (e) => clickHandler(e));
})();
