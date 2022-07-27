import { useState } from "react"
import { format } from "date-fns"
import { formatDistanceToNow } from "date-fns/esm"
import ptBr from "date-fns/locale/pt-BR"

import { Avatar } from "./Avatar"
import { Comment } from "./Comment"

import styles from "./Post.module.css"

export function Post({ author, content, publishedAt }) {
  const [comments, setComments] = useState([
    "Post muito bancana!"
  ])

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'ás' HH:mm'h'", { locale: ptBr })
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, { locale: ptBr, addSuffix: true })

  function handleCreateNewComment() {
    event.preventDefault();

    setComments([...comments])
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map(line => {
          if (line.type === "paragraph") {
            return <p key={line.content}>{line.content}</p>
          } else {
            return <p key={line.content}><a href="#">{line.content}</a></p>
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe seu comentário" />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => (
          <Comment key={comment} content={comment} />
        ))}
      </div>
    </article >
  )
}