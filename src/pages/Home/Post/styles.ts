import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const PostContainer = styled(NavLink)`
  width: 26rem;
  height: 16.25rem;
  background-color: ${(props) => props.theme['base-post']};
  padding: 2rem;
  border-radius: 10px;

  text-decoration: none;

  &:hover {
    border: 2px solid ${(props) => props.theme['base-label']};
  }
`

export const PostContainerHeader = styled.header`
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  h1 {
    color: ${(props) => props.theme['base-title']};
    flex: 1;
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 2rem;
  }

  time {
    line-height: 22.4px;
    font-weight: 400;
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-span']};
  }
`

export const PostContainerMain = styled.main`
  margin-top: 1.25rem;
  p {
    color: ${(props) => props.theme['base-text']};
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    line-height: 1.6rem;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
  }
`
