import {
  ArrowSquareUpRight,
  CalendarBlank,
  CaretLeft,
  ChatCircle,
  GithubLogo,
} from 'phosphor-react'
import {
  PostInfoContainer,
  PostInfoFooter,
  PostInfoHeader,
  PostInfoIcons,
  PostInfoMain,
} from './styles'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { NavLink } from 'react-router-dom'

interface PostInfoProps {
  githubUrl: string
  title: string
  login: string
  createdAt: string
  comments: number
}

export function PostInfo({
  githubUrl,
  title,
  login,
  createdAt,
  comments,
}: PostInfoProps) {
  return (
    <PostInfoContainer>
      <PostInfoHeader>
        <NavLink to="/">
          <CaretLeft size={14} weight="bold" />
          voltar
        </NavLink>
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
          Ver no github
          <ArrowSquareUpRight weight="bold" />
        </a>
      </PostInfoHeader>
      <PostInfoMain>
        <h1>{title}</h1>
      </PostInfoMain>
      <PostInfoFooter>
        <PostInfoIcons>
          <div>
            <GithubLogo size={18} weight="fill" />
          </div>
          <span>{login}</span>
        </PostInfoIcons>
        <PostInfoIcons>
          <div>
            <CalendarBlank size={18} weight="fill" />
          </div>
          <time>
            {formatDistanceToNow(new Date(createdAt), {
              addSuffix: true,
              locale: ptBR,
            })}
          </time>
        </PostInfoIcons>
        <PostInfoIcons>
          <div>
            <ChatCircle size={18} weight="fill" />
          </div>
          <span>{comments} comentarios</span>
        </PostInfoIcons>
      </PostInfoFooter>
    </PostInfoContainer>
  )
}
