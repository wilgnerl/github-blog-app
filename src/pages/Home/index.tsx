import { Post } from './Post'
import { CardProfile } from './CardProfile'
import { SearchForm } from './SearchForm'
import { HomeContainer, PostContainer } from './styles'
import { useEffect, useState } from 'react'
import { v4 as uuidV4 } from 'uuid'
import { api } from '../../lib/axios'

interface RepoData {
  items: {
    created_at: string
    title: string
    body: string
    number: number
  }[]
  totalCount: number
}

interface UserData {
  avatarUrl: string
  name: string
  htmlUrl: string
  bio: string
  login: string
  company: string
  followers: number
}

export function Home() {
  const [repoData, setRepoData] = useState<RepoData>({} as RepoData)
  const [userData, setUserData] = useState<UserData>({} as UserData)

  async function getData(query?: string) {
    const response = await api.get(
      `search/issues?q=${
        query || ''
      }repo:rocketseat-education/reactjs-github-blog-challenge`,
    )

    const { items, total_count: totalCount } = response.data
    const responseUserData = await api.get('users/wilgnerl')

    const {
      avatar_url: avatarUrl,
      name,
      html_url: htmlUrl,
      bio,
      login,
      company,
      followers,
    } = responseUserData.data

    setUserData({
      avatarUrl,
      name,
      htmlUrl,
      bio,
      login,
      company,
      followers,
    })

    setRepoData({ items, totalCount })
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <HomeContainer>
      <CardProfile userData={userData} />
      <SearchForm totalCount={repoData.totalCount} getData={getData} />

      <PostContainer>
        {repoData.items === undefined
          ? ''
          : repoData.items.map((item) => {
              return (
                <Post
                  key={uuidV4()}
                  createdAt={item.created_at}
                  title={item.title}
                  body={item.body}
                  number={item.number}
                />
              )
            })}
      </PostContainer>
    </HomeContainer>
  )
}
