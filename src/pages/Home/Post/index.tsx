import { PostContainer, PostContainerHeader, PostContainerMain } from './styles'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

interface PostProps {
  number: number
  title: string
  body: string
  createdAt: string
}

export function Post({ number, title, body, createdAt }: PostProps) {
  return (
    <PostContainer to={`post/${number}`}>
      <PostContainerHeader>
        <h1>{title}</h1>
        <time>
          {formatDistanceToNow(new Date(createdAt), {
            addSuffix: true,
            locale: ptBR,
          })}
        </time>
      </PostContainerHeader>
      <PostContainerMain>
        <p>{body}</p>
      </PostContainerMain>
    </PostContainer>
  )
}
