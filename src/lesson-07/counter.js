import {useState} from 'react';

// prevStateを活用する
// prevStateは更新前のstateを保持する変数
// prevStateを更新してreturnする

// useStateの更新関数は、
// ①値そのものを渡せる
// ②関数を渡して「最新の state」を引数として受け取れる
// という二刀流で動く(どっちの方法も使える！)

// prevStateを使う理由
// setCount(count + 1) でも動くが、これは「今のレンダー時点の count」しか参照しない。
// そのため、非同期処理や複数回連続で呼び出した場合に古い値を使ってしまうことがある。
// → 例: setCount(count + 1); setCount(count + 1); // 期待は +2だが実際は +1
//
// 一方、setCount(prevState => prevState + 1) は
// Reactが「直前のstate」を引数(prevState)として関数に渡してくれる。
// そのため、常に最新の値から計算でき、安全に更新できる。
// → 例: setCount(prev => prev + 1); setCount(prev => prev + 1); // 正しく +2

const Counter = () => {
    const [count, setCount] = useState(0)
    const countUp = () => {
        setCount(prevState => prevState + 1)
    }
    const countDown = () => {
        setCount(prevState => prevState - 1)
    }
    return (
        <div>
            <p>現在のカウント数: {count}</p>
            <button onClick={countUp}>up</button>
            <button onClick={countDown}>down</button>
        </div>
    );
};

export default Counter;