import react from "react";
import Article from "./Article"

function ArticleList({posts}) {
    return(
        <main>
            {posts.map((posts, id) => {
                return <Article title={posts.title} date={posts.date} preview={posts.preview} />
            })}
        </main>
    )
}

export default ArticleList