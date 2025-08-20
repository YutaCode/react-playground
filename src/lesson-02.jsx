import React from 'react';

// JSXの基礎文法①
// return の中身が JSX の構文
// class は className と書く (JSのclassと混同しないため)
const BlueButton = () => {
    return (
        <button className={'btn-blue'}>
            Click me!
        </button>
    )
}

export default BlueButton;


// JSXの基礎文法②
// 変数名等はキャメルケース(単語の繋ぎ目は大文字)で記述する (ハイフンはJSでは使えない)
// JSX構文内で{}を使うことで変数を扱うことができる

const Thumbnail = () => {
    const caption = 'キャプション'
    const imagePath = '/img/figure.png' //画像パスはサンプル（実行時エラー）

    return (
        <div>
            <p>{caption}</p>
            <img src={imagePath} alt={'サンプル画像'} />
        </div>
    )
}

// export default Thumbnail (1ページにdefaultが2つあるとエラーが出るのでコメント化)


//特殊なJSX構文
// Code① エラーが出る(JSXは必ず階層構造で記述する。最上位のコンポーネントは並列不可)
return (
    <p>react練習</p>
    <p>JSXの基礎文法を学習中</p>
)

// Code② React.Fragmentで囲むことで、HTMLタグとして出力されないようにして階層構造を作れる
// divタグ等で囲んで階層構造を作ると、HTMLタグとして出力されてしまう
// 無駄なタグを増やしたくないときにはReact.Fragmentを使うと良い
return (
    <React.Fragment>
        <p>react練習</p>
        <p>JSXの基礎文法を学習中</p>
    </React.Fragment>
)

// Code③ Code②の省略形
return (
    <>
        <p>react練習</p>
        <p>JSXの基礎文法を学習中</p>
    </>
)