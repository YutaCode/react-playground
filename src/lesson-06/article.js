import { useState, useCallback } from 'react'
import { Content, PublishButton, Title } from './index'

const Article = (props) => {
  const [isPublished, setIsPublished] = useState(false)

  // 更新関数を直渡しせず、意図を表すハンドラを渡す
  const publishArticle = useCallback(() => {
    setIsPublished(true)
  }, [])

  return (
    <div>
      <Title title={props.title} />
      <Content content={props.content} />
      {/* ❌ onClick={publishArticle()} は即実行 → 無限再レンダ */}
      {/* ✅ 関数そのものを渡す */}
      <PublishButton isPublished={isPublished} onClick={publishArticle} />
    </div>
  )
}

export default Article


// 「onClickにpublishArticle()のように()をつけると、レンダリング時に即実行されてしまう
//  結果、setState が毎回走り、再レンダ → 実行 → 再レンダ... となって無限ループ（Too many re-renders）になる」