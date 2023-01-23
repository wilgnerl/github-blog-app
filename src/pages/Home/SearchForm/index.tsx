import { Form, SearchFormContainer, SearchFormHeader } from './styles'

export function SearchForm() {
  return (
    <SearchFormContainer>
      <SearchFormHeader>
        <strong>Publicações</strong>
        <span>6 publicações</span>
      </SearchFormHeader>
      <Form action="">
        <input type="text" placeholder="Buscar Conteudo" />
      </Form>
    </SearchFormContainer>
  )
}
