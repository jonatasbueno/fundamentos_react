import { ThumbsUp, Trash } from "phosphor-react"

import { Avatar } from "./Avatar"

import styles from "./Comment.module.css"

export function Comment({ content }) {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="http://github.com/jonatasbueno.png" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Jônatas Bueno</strong>
              <time title="11 de Mario as 08:50" dateTime="2022-05-11 08:50:00">Cerca de 1h atrás</time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}