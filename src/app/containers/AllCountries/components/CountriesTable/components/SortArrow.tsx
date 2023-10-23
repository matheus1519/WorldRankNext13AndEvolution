import {
  KeyboardArrowDownRounded,
  KeyboardArrowUpRounded,
} from '@mui/icons-material'

import styles from './SortArrow.module.css'

type SortArrowProps = {
  direction: '' | 'asc' | 'desc'
}

export const SortArrow: React.FC<SortArrowProps> = ({ direction }) => {
  return (
    <>
      {!direction && <></>}

      {direction === 'desc' && (
        <div className={styles.heading_arrow}>
          <KeyboardArrowDownRounded color="inherit" />
        </div>
      )}

      {direction === 'asc' && (
        <div className={styles.heading_arrow}>
          <KeyboardArrowUpRounded color="inherit" />
        </div>
      )}
    </>
  )
}
