/* eslint-disable @next/next/no-img-element */

import { Country } from '@/types/Country'
import styles from './Country.module.css'

type CountryDetailsProps = {
  country: Country
}

export const CountryDetails: React.FC<CountryDetailsProps> = async ({
  country,
}) => {
  let borders = [] as Country[]

  if (country.borders) {
    borders = await Promise.all(
      country.borders.map(async (borderCode) => {
        const response = await fetch(
          `https://restcountries.com/v3.1/alpha/${borderCode}`,
        )

        const country = await response.json()

        return country[0]
      }),
    )
  }

  return (
    <div className={styles.container}>
      <div className={styles.container_left}>
        <div className={styles.overview_panel}>
          <img src={country.flags?.png} alt={country.flags?.alt} />

          <h1 className={styles.overview_name}>{country.name?.common}</h1>
          <div className={styles.overview_region}>{country.region}</div>

          <div className={styles.overview_numbers}>
            <div className={styles.overview_population}>
              <div className={styles.overview_value}>{country.population}</div>
              <div className={styles.overview_label}>Population</div>
            </div>

            <div className={styles.overview_area}>
              <div className={styles.overview_value}>{country.area}</div>
              <div className={styles.overview_label}>Area</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.container_right}>
        <div className={styles.details_panel}>
          <h4 className={styles.details_panel_heading}>Details</h4>

          <div className={styles.details_panel_row}>
            <div className={styles.details_panel_label}>Capital</div>
            <div className={styles.details_panel_value}>{country.capital}</div>
          </div>

          <div className={styles.details_panel_row}>
            <div className={styles.details_panel_label}>Languages</div>
            <div className={styles.details_panel_value}>
              {Object.values(country.languages)
                .map((name) => name)
                .join(', ')}
            </div>
          </div>

          <div className={styles.details_panel_row}>
            <div className={styles.details_panel_label}>Currencies</div>
            <div className={styles.details_panel_value}>
              {Object.values(country.currencies)
                .map(({ name, symbol }) => `${name} (${symbol})`)
                .join(', ')}
            </div>
          </div>

          <div className={styles.details_panel_row}>
            <div className={styles.details_panel_label}>Native name</div>
            <div className={styles.details_panel_value}>
              {Object.values(country.name.nativeName)[0].common}
            </div>
          </div>

          <div className={styles.details_panel_row}>
            <div className={styles.details_panel_label}>Gini</div>
            <div className={styles.details_panel_value}>
              {Object.values(country.gini || { gini: 'No data' })}
            </div>
          </div>

          <div className={styles.details_panel_borders}>
            <div className={styles.details_panel_borders_label}>
              Neighbouring Countries
            </div>

            <div className={styles.details_panel_borders_container}>
              {borders?.map(({ cca3, flags, name }) => (
                <div
                  key={cca3}
                  className={styles.details_panel_borders_country}
                >
                  <img src={flags?.png} alt={name?.common}></img>

                  <div className={styles.details_panel_borders_name}>
                    {name?.common}
                  </div>
                </div>
              ))}
              {!borders.length && <div>No Borders</div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
