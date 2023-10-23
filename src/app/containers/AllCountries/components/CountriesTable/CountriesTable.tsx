/* eslint-disable @next/next/no-img-element */

import Link from 'next/link'

import { useEffect, useState } from 'react'
import styles from './CountriesTable.module.css'
import { Country } from '@/types/Country'
import { SortArrow } from './components/SortArrow'

type CountriesTableProps = {
  countries: Country[]
  color: string
  size: number
  className: string
}

export const CountriesTable: React.FC<CountriesTableProps> = ({
  countries,
}) => {
  const [direction, setDirection] = useState('' as '' | 'asc' | 'desc')
  const [column, setColumn] = useState('' as '' | 'population' | 'area')

  const [orderedCountries, setOrderedCountries] = useState([] as Country[])

  useEffect(() => {
    if (column === '') {
      setOrderedCountries(countries)
      return
    }

    if (direction === 'asc') {
      setOrderedCountries(
        [...countries].sort((a, b) => (a[column] > b[column] ? 1 : -1)),
      )
    }

    if (direction === 'desc') {
      setOrderedCountries(
        [...countries].sort((a, b) => (a[column] > b[column] ? -1 : 1)),
      )
    }
  }, [countries, direction, column])

  const setValueAndDirection = (columnOrdering: '' | 'population' | 'area') => {
    if (!direction) {
      setDirection('desc')
    } else if (direction === 'desc') {
      setDirection('asc')
    } else {
      setDirection('')
    }

    setColumn(columnOrdering)
  }

  return (
    <div>
      <div className={styles.heading}>
        <div className={styles.heading_flag}></div>

        <button
          className={styles.heading_name}
          // onClick={() => setValueAndDirection('name')}
        >
          <div>Name</div>

          {/* {column === 'name.common' && <SortArrow direction={direction} />} */}
        </button>

        <button
          className={styles.heading_population}
          onClick={() => setValueAndDirection('population')}
        >
          <div>Population</div>

          {column === 'population' && <SortArrow direction={direction} />}
        </button>

        <button
          className={styles.heading_area}
          onClick={() => setValueAndDirection('area')}
        >
          <div>
            Area (km<sup style={{ fontSize: '0.5rem' }}>2</sup>)
          </div>

          {column === 'area' && <SortArrow direction={direction} />}
        </button>

        <button
          className={styles.heading_gini}
          // onClick={() => setValueAndDirection('gini')}
        >
          <div>Gini</div>

          {/* {column === 'gini.2019?' && <SortArrow direction={direction} />} */}
        </button>
      </div>

      {orderedCountries.map((country) => (
        <Link href={`/country/${country.cca3}`} key={country.name.common}>
          <div className={styles.row}>
            <div className={styles.flag}>
              <img src={country.flags.png} alt={country.flags.alt} />
            </div>
            <div className={styles.name}>{country.name.common}</div>

            <div className={styles.population}>{country.population}</div>

            <div className={styles.area}>{country.area || 0}</div>

            <div className={styles.gini}>
              {Object.values(country.gini || { gini: 'No data' })}
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
