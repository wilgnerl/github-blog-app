import { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { PostContent } from './PostContent'
import { PostInfo } from './PostInfo'
import { PostContainer } from './styles'
import { v4 as uuidV4 } from 'uuid'
import { api } from '../../lib/axios'

interface RepoData {
  createdAt: string
  title: string
  body: any
  number: number
  htmlUrl: string
  comments: number
}

interface UserData {
  login: string
}

export function Post() {
  const [repoData, setRepoData] = useState<RepoData | undefined>()
  const [userData, setUserData] = useState<UserData>({} as UserData)
  const { contentId } = useParams()

  const getData = useCallback(async () => {
    const response = await api.get(
      `repos/rocketseat-education/reactjs-github-blog-challenge/issues/${contentId}`,
    )

    const {
      html_url: htmlUrl,
      title,
      created_at: createdAt,
      comments,
      body,
      number,
    } = response.data

    const newObject = {
      htmlUrl: String(htmlUrl),
      title: String(title),
      createdAt: String(createdAt),
      comments: Number(comments),
      body,
      number: Number(number),
    }

    const responseUserData = await api.get('users/wilgnerl')

    const userDataObject = {
      login: responseUserData.data.login,
    }

    setUserData(userDataObject)
    setRepoData(newObject)
  }, [contentId])

  useEffect(() => {
    getData()
  }, [getData])

  return (
    <PostContainer>
      {repoData === undefined ? (
        ''
      ) : (
        <>
          <PostInfo
            key={uuidV4()}
            githubUrl={repoData.htmlUrl}
            title={repoData.title}
            login={userData.login}
            createdAt={repoData.createdAt}
            comments={repoData.comments}
          />
          <PostContent key={uuidV4()} body={repoData.body} />
        </>
      )}
    </PostContainer>
  )
}
