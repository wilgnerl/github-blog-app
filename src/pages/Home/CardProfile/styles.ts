import styled from 'styled-components'

export const CardProfileContainer = styled.div`
  width: 54rem;
  height: 13.25rem;
  margin-top: -5.5rem;
  border-radius: 10px;
  padding-left: 2.5rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
  padding-right: 2rem;
  background-color: ${(props) => props.theme['base-profile']};
  display: flex;
  gap: 2rem;

  img {
    border-radius: 8px;
    width: 9.25rem;
    height: 9.25rem;
  }
`

export const DataProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const DataProfileHeader = styled.header`
  display: flex;
  justify-content: space-between;
  font-weight: 700;
  margin-bottom: 0.5rem;
  span {
    font-size: 1.5rem;
    color: ${(props) => props.theme['base-title']};
    line-height: 1.95rem;
    text-transform: capitalize;
  }

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;
    font-size: 0.75rem;
    color: ${(props) => props.theme.blue};
    text-transform: uppercase;
  }
`

export const DataProfileMain = styled.main`
  line-height: 1.6rem;
  margin-bottom: 1.5rem;
`

export const DataProfileFooter = styled.footer`
  display: flex;
  gap: 1.5rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`

export const InfoIconsContainer = styled.div`
  display: flex;

  div {
    color: ${(props) => props.theme['base-label']};
  }

  span {
    color: ${(props) => props.theme['base-subtitle']};
  }
`
