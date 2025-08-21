// 実行不可(エラーが出るよ！)
// useEffectの第二引数を指定することで、副作用フックが実行されるタイミングを制御できる

// 指定なし(レンダリングされる度に実行される)
useEffect(() => {
    console.log("Current count is...", count)
})

// 初回のレンダリング後のみ実行される
useEffect(() => {
    console.log("Current count is...", count)
}, [])

// triggerが変更される度に実行される
useEffect(() => {
    console.log("Current count is...", count)
}, [trigger])

// triggerかtrigger2が変更される度に実行される
useEffect(() => {
    console.log("Current count is...", count)
}, [trigger, trigger2])

// --- クリーンアップ関数 ---
// useEffect の中で return した関数は「クリーンアップ関数」と呼ばれる
// ・コンポーネントがアンマウントされる直前
// ・依存配列の値が変わって再実行される直前
// に呼ばれる（次の副作用が実行される前に準備を整える）
//
// 例: イベントリスナーやタイマーを解除する
useEffect(() => {
    const id = setInterval(() => console.log("tick"), 1000);

    // クリーンアップ関数
    return () => {
        clearInterval(id);
        console.log("cleaned up!");
    }
}, []); // [] の場合 → アンマウント時にだけ cleanup 実行