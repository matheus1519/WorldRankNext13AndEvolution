import styled from 'styled-components'

export const Container = styled.div`
  > div:first-child {
    margin-bottom: 40px;

    display: grid;
    align-items: center;
    gap: 16px;

    grid-template-columns: 1fr 2fr;
    color: var(--text-color-secondary);
  }

  @media screen and (max-width: 720px) {
    > div:first-child {
      grid-template-columns: 1fr;
    }
  }
`
