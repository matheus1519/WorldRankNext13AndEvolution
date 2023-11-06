/* eslint-disable @next/next/no-img-element */

import Link from 'next/link'

import { useEffect, useState } from 'react'
import { Country } from '@/types/Country'
import { SortArrow } from './components/SortArrow'
import { Container } from './styles'

type CountriesTableProps = {
  countries: Country[]
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
    <Container>
      <div>
        <div />

        <button
        // onClick={() => setValueAndDirection('name')}
        >
          <div>Name</div>

          {/* {column === 'name.common' && <SortArrow direction={direction} />} */}
        </button>

        <button onClick={() => setValueAndDirection('population')}>
          <div>Population</div>

          {column === 'population' && <SortArrow direction={direction} />}
        </button>

        <button onClick={() => setValueAndDirection('area')}>
          <div>
            Area (km<sup style={{ fontSize: '0.5rem' }}>2</sup>)
          </div>

          {column === 'area' && <SortArrow direction={direction} />}
        </button>

        <button
        // onClick={() => setValueAndDirection('gini')}
        >
          <div>Gini</div>

          {/* {column === 'gini.2019?' && <SortArrow direction={direction} />} */}
        </button>
      </div>

      {orderedCountries.map((country) => (
        <Link href={`/country/${country.cca3}`} key={country.name.common}>
          <div>
            <div>
              <img src={country.flags.png} alt={country.flags.alt} />
            </div>
            <div>{country.name.common}</div>

            <div>{country.population}</div>

            <div>{country.area || 0}</div>

            <div>{Object.values(country.gini || { gini: 'No data' })}</div>
          </div>
        </Link>
      ))}
    </Container>
  )
}
