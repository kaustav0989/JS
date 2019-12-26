var comment = {id:4,title:"new post"}

var posts = [
    {postid:4,content:"ma chudaye"},
    {postid:4,content:"ma chudaye ye kya language hain"},
    {postid:3,content:"ma nahi chudaye"}
]

function postsforcomment(posts,comment)
{
    return sposts.find(function(comment){
        return comment.id === posts.postid
    })
}
console.log(postsforcomment(posts,comment))