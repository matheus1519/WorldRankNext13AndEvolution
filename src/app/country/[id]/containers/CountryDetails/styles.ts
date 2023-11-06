import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 24px;

  @media screen and (min-width: 720px) {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 24px;
  }
`
