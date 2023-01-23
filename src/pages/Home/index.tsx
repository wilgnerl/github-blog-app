import { Post } from './Post'
import { CardProfile } from './CardProfile'
import { SearchForm } from './SearchForm'
import { HomeContainer, PostContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <CardProfile />
      <SearchForm />

      <PostContainer>
        <Post />
        <Post />
        <Post />
        <Post />
      </PostContainer>
    </HomeContainer>
  )
}
