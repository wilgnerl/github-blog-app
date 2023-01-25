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

interface UserData {
  avatarUrl: string
  name: string
  htmlUrl: string
  bio: string
  login: string
  company: string
  followers: number
}

interface UserDataProps {
  userData: UserData
}

export function CardProfile({ userData }: UserDataProps) {
  return (
    <CardProfileContainer>
      <img src={userData.avatarUrl} alt="Avatar" />

      <DataProfileContainer>
        <DataProfileHeader>
          <span>{userData.name}</span>
          <a href={userData.htmlUrl} target="_blank" rel="noopener noreferrer">
            Github
            <ArrowSquareUpRight weight="bold" />
          </a>
        </DataProfileHeader>

        <DataProfileMain>
          <span>{userData.bio}</span>
        </DataProfileMain>

        <DataProfileFooter>
          <InfoIconsContainer>
            <div>
              <GithubLogo size={18} weight="fill" />
            </div>
            <span>{userData.login}</span>
          </InfoIconsContainer>
          <InfoIconsContainer>
            <div>
              <Buildings size={18} weight="fill" />
            </div>
            <span>{userData.company ? userData.company : 'Sem empresa'}</span>
          </InfoIconsContainer>
          <InfoIconsContainer>
            <div>
              <Users size={18} weight="fill" />
            </div>
            <span>{userData.followers} Seguidores</span>
          </InfoIconsContainer>
        </DataProfileFooter>
      </DataProfileContainer>
    </CardProfileContainer>
  )
}
