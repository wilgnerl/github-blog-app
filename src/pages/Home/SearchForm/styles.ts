import styled from 'styled-components'

export const SearchFormContainer = styled.div`
  width: 54rem;
  display: flex;
  flex-direction: column;
  margin-top: 4.5rem;
  margin-bottom: 3rem;
`

export const SearchFormHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.9375rem;

  strong {
    display: block;
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 1.8rem;
  }

  span {
    font-size: 0.875rem;
    line-height: 1.4rem;
    color: ${(props) => props.theme['base-span']};
  }
`

export const Form = styled.form`
  display: flex;

  input {
    flex: 1;
    padding: 0.75rem 1rem;
    border-radius: 6px;
    border: 1px solid ${(props) => props.theme['base-border']};
    background-color: ${(props) => props.theme['base-input']};
    color: ${(props) => props.theme['base-text']};
    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }
  }
`
