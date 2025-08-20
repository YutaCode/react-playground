// エントリポイントとなるファイルを作成したため、1行で複数のコンポーネントをインポートできる
import {Content, Title} from './index'

// エントリポイントを用いない場合のインポートは以下の通り
// インポートするコンポーネントが増えると行数が増えてしまう

// import Content from './content'
// import Title from './title'

const Article = (props) => {
    return (
        <div>
            <Title title={props.title} />
            <Content content={props.content} />
        </div>
    );
};

export default Article;