import {useEffect, useState} from 'react';

// useEffect = 副作用フック
// ここでいう"副作用"とは、レンダリングに伴って実行されるという意味
const Counter = () => {
    const [count, setCount] = useState(0)
    const countUp = () => {
        setCount(prevState => prevState + 1)
    }
    const countDown = () => {
        setCount(prevState => prevState - 1)
    }

    // countが変更された場合のみ実行される
    useEffect(() => {
        console.log("Current count is...", count)
    }, [count])

    return (
        <div>
            <p>現在のカウント数: {count}</p>
            <button onClick={countUp}>up</button>
            <button onClick={countDown}>down</button>
        </div>
    );
};