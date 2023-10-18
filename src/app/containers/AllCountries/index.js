'use client'

import { useState, useEffect } from 'react'
import CountriesTable from './components/CountriesTable/CountriesTable'
import SearchInput from './components/SearchInput/SearchInput'
import styles from './Home.module.css'

export default function AllCountries({ countries }) {
  const [keyword, setKeyword] = useState('')
  const [countriesFiltered, setCountriesFiltered] = useState([])

  useEffect(() => {
    const countriesFound = countries?.filter(
      (country) =>
        country.name.common.toLowerCase().includes(keyword) ||
        country.region.toLowerCase().includes(keyword) ||
        country.subregion?.toLowerCase().includes(keyword),
    )

    setCountriesFiltered(countriesFound)
  }, [keyword])

  const onInputChange = (e) => {
    e.preventDefault()

    setKeyword(e.target.value.toLowerCase())
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
