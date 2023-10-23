import { SearchRounded } from '@mui/icons-material'

import styles from './SearchInput.module.css'
import { InputHTMLAttributes } from 'react'

type SearchInputProps = InputHTMLAttributes<HTMLInputElement>

export const SearchInput: React.FC<SearchInputProps> = ({ ...rest }) => {
  return (
    <div className={styles.wrapper}>
      <SearchRounded color="inherit" />
      <input className={styles.input} {...rest} />
    </div>
  )
}
