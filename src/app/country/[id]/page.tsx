import { Country } from '@/types/Country'
import { CountryDetails } from './containers/CountryDetails'

type Props = {
  params: {
    id: string
  }
}

type CodeCountry = {
  cca3: string
}

export async function generateStaticParams() {
  const response = await fetch('https://restcountries.com/v3.1/all')
  const countries: CodeCountry[] = await response.json()

  const paths = countries.map((country) => ({
    params: { id: country.cca3 },
  }))

  return paths
}

export const dynamicParams = false

export const generateMetadata = async ({ params: { id } }: Props) => {
  const response = await fetch(`https://restcountries.com/v3.1/alpha/${id}`)

  const country = await response.json()

  return {
    title: country[0].name.common,
  }
}

export default async function Country({ params }: Props) {
  const response = await fetch(
    `https://restcountries.com/v3.1/alpha/${params.id}`,
  )

  const [country]: Country[] = await response.json()

  let borders = [] as Country[]

  if (country.borders) {
    borders = await Promise.all(
      country.borders.map(async (borderCode) => {
        const response = await fetch(
          `https://restcountries.com/v3.1/alpha/${borderCode}`,
        )

        const [borderCountry] = await response.json()

        return borderCountry
      }),
    )
  }

  return <CountryDetails country={country} borders={borders} />
}
