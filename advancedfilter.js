var post = {id:4,title:"new post"}

var comments = [
    {postid:4,content:"ma chudaye"},
    {postid:4,content:"ma chudaye ye kya language hain"},
    {postid:3,content:"ma nahi chudaye"}
]

function commentsforpost(post,comments){
    return comments.filter(function(comment){
        return comment.postid === post.id
    })
}

console.log(commentsforpost(post,comments))