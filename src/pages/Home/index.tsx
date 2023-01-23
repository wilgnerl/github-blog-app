import { CardProfile } from './CardProfile'
import { SearchForm } from './SearchForm'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <CardProfile />
      <SearchForm />
    </HomeContainer>
  )
}
