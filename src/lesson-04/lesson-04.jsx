// ※このまま実行するとエラーが出るよ！！！

// コンポーネントとは
// ・見た目+機能を持ったUI部品
// ・コンポーネントを組み合わせることでWebページを作る
// ・Class Component と Functional Component の2つに分けられる
// ・②のFunctional Componentの方を動画では推奨


import {Component} from 'react';

// ① Class Component　例文
class Button extends Component {
    render() {
        return <button>Say, {this.props.hello}</button>
    }
}

// ② Functional Component　例文
const Button = (props) => {
    return <button>Say, {props.hello}</button>;
};

export default Button;

// コンポーネントを使う理由
// ・同じ記述を何度もする必要がない
// ・コードの見通しをよくする
// ・変更に強くする


// コンポーネントの基本的な使い方(本来は親と子は別ファイルに記述)
// propsを用いて親子間でデータの受け渡しをする(親から子にデータを渡す)

// 親コンポーネント(import側)
import Article from "子コンポーネントのアドレス"

const App = () => {
    return (
        <div>
            <Article
                title={'ブログタイトル'}
                content={'ブログ本文'}
            />
        </div>
    );
}

export default App;

// 子コンポーネント(export側)、引数にpropsを指定する
const Article = (props) => {
    return (
        <div>
            <h2>{props.title}</h2> 
            <p>{props.content}</p>
        </div>
    )
};

export default Article;