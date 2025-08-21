import { useState } from 'react'

// useStateの使い方 (実行不可)

// useStateによるstateの宣言
// state(現在の状態)、setState(更新関数)、initialState(初期値)
// setStateは、stateを更新して再レンダリングしてください、とreactにお願いする関数
const [state, setState] = useState(initialState)

// stateの更新
// newState(新しい値)
setState(newState)

// 具体例
const[message, setMessage] = useState('Hello World!') //文字列
const[likes, setLikes] = useState(0) //数値
const[isPublished, setIsPublished] = useState(false) //真偽値
setIsPublished(true) //更新関数
