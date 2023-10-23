'use client'

import { useState, useEffect, ChangeEvent } from 'react'
import { CountriesTable } from './components/CountriesTable/CountriesTable'
import { SearchInput } from './components/SearchInput/SearchInput'
import styles from './Home.module.css'
import { Country } from '@/types/Country'

type AllCountriesProps = {
  countries: Country[]
}

export default function AllCountries({ countries }: AllCountriesProps) {
  const [keyword, setKeyword] = useState('')
  const [countriesFiltered, setCountriesFiltered] = useState([] as Country[])

  useEffect(() => {
    const countriesFound = countries?.filter(
      (country) =>
        country.name.common.toLowerCase().includes(keyword) ||
        country.region.toLowerCase().includes(keyword) ||
        country.subregion?.toLowerCase().includes(keyword),
    )

    setCountriesFiltered(countriesFound)
  }, [countries, keyword])

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()

    setKeyword(event.target.value.toLowerCase())
  }

  return (
    <>
      <div className={styles.inputContainer}>
        <div className={styles.counts}>
          Found {countriesFiltered.length} countries
        </div>

        <div className={styles.input}>
          <SearchInput
            placeholder="Filter by Name, Region or SubRegion"
            onChange={onInputChange}
          />
        </div>
      </div>

      <CountriesTable countries={countriesFiltered} />
    </>
  )
}
