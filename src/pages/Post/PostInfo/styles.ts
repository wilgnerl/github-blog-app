import styled from 'styled-components'

export const PostInfoContainer = styled.div`
  width: 54rem;
  height: 10.5rem;
  margin-top: -5.5rem;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme['base-profile']};
  padding: 2rem;
`

export const PostInfoHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    font-weight: 700;
    display: flex;
    align-items: center;
    color: ${(props) => props.theme.blue};
    text-transform: uppercase;
    font-size: 0.75rem;
    gap: 0.5rem;
  }

  a {
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;
    font-size: 0.75rem;
    color: ${(props) => props.theme.blue};
    text-transform: uppercase;
  }

  a:hover {
    border-bottom: 1px solid ${(props) => props.theme.blue};
  }
`

export const PostInfoMain = styled.main`
  margin-bottom: 0.5rem;
  margin-top: 1.25rem;

  h1 {
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 31.2px;
  }
`

export const PostInfoFooter = styled.footer`
  display: flex;
  align-items: center;
  gap: 2rem;
`

export const PostInfoIcons = styled.div`
  display: flex;
  gap: 0.5rem;

  div {
    color: ${(props) => props.theme['base-label']};
  }

  time,
  span {
    color: ${(props) => props.theme['base-span']};
  }
`
