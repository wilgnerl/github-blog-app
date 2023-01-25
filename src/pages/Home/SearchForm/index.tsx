import { Form, SearchFormContainer, SearchFormHeader } from './styles'
import * as zod from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

interface SearchFormProps {
  totalCount: number
  getData: (query?: string) => Promise<void>
}

const searchFormSchema = zod.object({
  query: zod.string(),
})

type SearchFormInputs = zod.infer<typeof searchFormSchema>

export function SearchForm({ totalCount, getData }: SearchFormProps) {
  const { register, handleSubmit } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
    defaultValues: {
      query: '',
    },
  })

  async function handleData(data: SearchFormInputs) {
    await getData(data.query)
  }

  return (
    <SearchFormContainer>
      <SearchFormHeader>
        <strong>Publicações</strong>
        <span>{totalCount} publicações</span>
      </SearchFormHeader>
      <Form onSubmit={handleSubmit(handleData)}>
        <input
          type="text"
          placeholder="Buscar Conteudo"
          {...register('query')}
        />
      </Form>
    </SearchFormContainer>
  )
}
