(() => {
    const $resetButton = document.getElementById("js-reset-button");

    $resetButton.addEventListener("click", (e) => {
        // カウンターを取得して値を代入
        const $jsCounter = document.getElementById("js-counter");
        $jsCounter.textContent = 0;
    });
})();
