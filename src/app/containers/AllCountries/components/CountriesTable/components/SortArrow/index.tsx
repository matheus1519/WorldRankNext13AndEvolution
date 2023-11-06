import {
  KeyboardArrowDownRounded,
  KeyboardArrowUpRounded,
} from '@mui/icons-material'

import { Container } from './styles'

type SortArrowProps = {
  direction: '' | 'asc' | 'desc'
}

export const SortArrow: React.FC<SortArrowProps> = ({ direction }) => {
  return (
    <Container>
      {!direction && <></>}

      {direction === 'desc' && (
        <div>
          <KeyboardArrowDownRounded color="inherit" />
        </div>
      )}

      {direction === 'asc' && (
        <div>
          <KeyboardArrowUpRounded color="inherit" />
        </div>
      )}
    </Container>
  )
}
