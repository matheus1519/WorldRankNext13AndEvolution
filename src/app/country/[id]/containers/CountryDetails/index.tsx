/* eslint-disable @next/next/no-img-element */

import { Country } from '@/types/Country'
import { Container } from './styles'

type CountryDetailsProps = {
  country: Country
  borders: Country[]
}

export const CountryDetails: React.FC<CountryDetailsProps> = ({
  country,
  borders,
}) => {
  return (
    <Container>
      <aside>
        <img src={country.flags?.png} alt={country.flags?.alt} />
        <h1>{country.name?.common}</h1>
        <div>{country.region}</div>

        <footer>
          <div>
            <div>{country.population}</div>
            <label>Population</label>
          </div>

          <div>
            <div>{country.area}</div>
            <label>Area</label>
          </div>
        </footer>
      </aside>
      <div>
        <h4>Details</h4>
        <div>
          <label>Capital</label>
          <p>{country.capital}</p>
        </div>

        <div>
          <label>Languages</label>
          <p>
            {Object.values(country.languages)
              .map((name) => name)
              .join(', ')}
          </p>
        </div>

        <div>
          <label>Currencies</label>
          <p>
            {Object.values(country.currencies)
              .map(({ name, symbol }) => `${name} (${symbol})`)
              .join(', ')}
          </p>
        </div>

        <div>
          <label>Native name</label>
          <p>{Object.values(country.name.nativeName)[0].common}</p>
        </div>

        <div>
          <label>Gini</label>
          <p>{Object.values(country.gini || { gini: 'No data' })}</p>
        </div>

        <footer>
          <label>Neighbouring Countries</label>

          <div>
            {borders?.map(({ cca3, flags, name }) => (
              <div key={cca3}>
                <img src={flags?.png} alt={name?.common}></img>

                <p>{name?.common}</p>
              </div>
            ))}
            {!borders.length && <div>No Borders</div>}
          </div>
        </footer>
      </div>
    </Container>
  )
}
