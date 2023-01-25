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

export function PostInfo() {
  return (
    <PostInfoContainer>
      <PostInfoHeader>
        <span>
          <CaretLeft size={14} weight="bold" />
          voltar
        </span>
        <a href="">
          Ver no github
          <ArrowSquareUpRight weight="bold" />
        </a>
      </PostInfoHeader>
      <PostInfoMain>
        <h1>JavaScript data types and data structures</h1>
      </PostInfoMain>
      <PostInfoFooter>
        <PostInfoIcons>
          <div>
            <GithubLogo size={18} weight="fill" />
          </div>
          <span>wilgnerl</span>
        </PostInfoIcons>
        <PostInfoIcons>
          <div>
            <CalendarBlank size={18} weight="fill" />
          </div>
          <time>Ha 1 dia</time>
        </PostInfoIcons>
        <PostInfoIcons>
          <div>
            <ChatCircle size={18} weight="fill" />
          </div>
          <span>5 comentarios</span>
        </PostInfoIcons>
      </PostInfoFooter>
    </PostInfoContainer>
  )
}
