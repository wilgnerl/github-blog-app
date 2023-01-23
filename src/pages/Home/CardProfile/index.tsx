import {
  GithubLogo,
  Users,
  Buildings,
  ArrowSquareUpRight,
} from 'phosphor-react'
import {
  CardProfileContainer,
  DataProfileContainer,
  DataProfileFooter,
  DataProfileHeader,
  DataProfileMain,
  InfoIconsContainer,
} from './styles'

export function CardProfile() {
  return (
    <CardProfileContainer>
      <img src="https://github.com/wilgnerl.png" alt="Avatar" />

      <DataProfileContainer>
        <DataProfileHeader>
          <span>Wilgner Lopes</span>
          <a href="">
            Github
            <ArrowSquareUpRight weight="bold" />
          </a>
        </DataProfileHeader>

        <DataProfileMain>
          <span>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </span>
        </DataProfileMain>

        <DataProfileFooter>
          <InfoIconsContainer>
            <div>
              <GithubLogo size={18} weight="fill" />
            </div>
            <span>wilgnerl</span>
          </InfoIconsContainer>
          <InfoIconsContainer>
            <div>
              <Buildings size={18} weight="fill" />
            </div>
            <span>Makers</span>
          </InfoIconsContainer>
          <InfoIconsContainer>
            <div>
              <Users size={18} weight="fill" />
            </div>
            <span>8 Seguidores</span>
          </InfoIconsContainer>
        </DataProfileFooter>
      </DataProfileContainer>
    </CardProfileContainer>
  )
}
