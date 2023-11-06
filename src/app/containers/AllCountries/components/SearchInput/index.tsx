import { SearchRounded } from '@mui/icons-material'

import { InputHTMLAttributes } from 'react'
import { Container } from './styles'

type SearchInputProps = InputHTMLAttributes<HTMLInputElement>

export const SearchInput: React.FC<SearchInputProps> = ({ ...rest }) => {
  return (
    <Container>
      <SearchRounded color="inherit" />
      <input {...rest} />
    </Container>
  )
}
