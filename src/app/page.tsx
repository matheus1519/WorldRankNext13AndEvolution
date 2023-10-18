import AllCountries from '@/app/containers/AllCountries'

export default async function Home() {
  const response = await fetch('https://restcountries.com/v3.1/all')

  const countries = await response.json()

  return (
    <main>
      <AllCountries countries={countries} />
    </main>
  )
}
