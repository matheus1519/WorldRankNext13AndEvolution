export type Country = {
  name: {
    common: string
    nativeName: {
      [key: string]: {
        common: string
      }
    }
  }
  region: string
  subregion: string
  area: number
  population: number
  cca3: string
  flags: {
    png: string
    alt: string
  }
  gini: {
    [key: string]: number
  }
  borders: string[]
  capital: string[]
  languages: {
    [key: string]: string
  }
  currencies: {
    [key: string]: {
      name: string
      symbol: string
    }
  }
}
