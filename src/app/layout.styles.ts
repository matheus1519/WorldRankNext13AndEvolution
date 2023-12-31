import styled from 'styled-components'

export const Container = styled.div`
  padding: 24px;
  height: 100vh;

  display: grid;
  grid-template-rows: auto 1fr auto;

  max-width: 1100px;
  margin: 0 auto;

  > header {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 32px;

    gap: 8px;
    line-height: 0;

    > button {
      border: none;
      background-color: transparent;
      padding: 0;

      color: var(--text-color-secondary);
      margin-left: 4px;

      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  > footer {
    margin-top: 32px;
    text-align: center;
    font-size: 0.75rem;
  }
`
