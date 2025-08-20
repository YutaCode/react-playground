const PublishButton = (props) => {
    return (
        <button onClick={props.onClick}>
                isPublished: {props.isPublished.toString()} 
        </button>
    )
}

export default PublishButton;

// onClickに「関数そのもの」を渡している
// () => props.onClick() のようにラップするのは引数を渡したいときだけでOK
// toString() は true/false を "true"/"false" の文字列に変換する