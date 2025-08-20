// エントリポイント (複数の子コンポーネントをまとめたファイル、本来のエントリポイントの意味は違うらしい)

// content,titleファイル内でdefaultエクスポートしているので、
// それぞれのコンポーネントはdefaultという名前でエクスポートされている
// 下の２行のコードはそれぞれのdefaultコンポーネントをインポートして別名をつけてエクスポートしている
export {default as Content} from './content'
export {default as Title} from './title'