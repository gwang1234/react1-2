import Comment from "./Comment"

const comments = [
    {
        name: "111",
        comment: "안녕"
    },
    {
        name: "222",
        comment: "안녕!"
    }
]

export default function CommentList () {
    return (
        <>
            {comments.map((comment) => {
                return (
                    <Comment name = {comment.name} comment={comment.comment}/> 
                )
            })}
            <Comment name = "홍길동" comment="안녕"/> 
            <Comment name = "이순신" comment="안녕!"/>
            <Comment name = "강감찬" comment="안녕!!"/>
        </>
    )

}