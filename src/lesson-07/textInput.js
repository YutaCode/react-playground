import {useState} from 'react' // 名前つきインポートなので{}をつける！

// lesson-06で学習したuseStateの基礎的な使い方
const TextInput = () => {
    const [name, setName] = useState('')

    // 更新関数は直接propsとして渡さない(復習)
    const handleName = (event) => {
        // event.target.value に、ユーザーがテキストに入力した内容が格納される
        setName(event.target.value)
    }

    return (
        <input
            // eventにはonChangeイベントの戻り値が入る
            // つまり、ユーザーが入力したテキストをhandleName関数に渡している
            onChange={(event) => handleName(event)}
            type={'text'}
            value={name}
            />
    );
}
