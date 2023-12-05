'use client'

import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 24px;

  > aside {
    padding: 20px;
    border-radius: 8px;
    box-shadow: var(--box-shadow);
    background-color: var(--background-color-light);

    height: fit-content;

    > img {
      width: 100%;
      border-radius: 4px;
    }

    > h1 {
      text-align: center;
      font-size: 32px;
      margin-bottom: 0;
    }

    > div {
      text-align: center;
      font-size: 14px;
      font-weight: 300;
      margin-top: 4px;
      margin-bottom: 24px;
    }

    > footer {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
      text-align: center;

      > div {
        > label {
          font-size: 14px;
          color: var(--text-color-secondary);
        }
      }
    }
  }

  > div {
    background-color: var(--background-color-light);
    box-shadow: var(--box-shadow);
    border-radius: 8px;

    > h4 {
      padding: 20px;
      padding-bottom: 0;

      margin: 0;
    }

    > div {
      display: flex;
      justify-content: space-between;
      align-items: center;

      padding: 20px;
      border-bottom: 1px solid #e0e0e0;

      > label {
        color: var(--text-color-secondary);
      }

      > p {
        margin: 0;
      }
    }

    > footer {
      padding: 20px;
      display: grid;
      gap: 24px;

      > label {
        color: var(--text-color-secondary);
      }

      > div {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
        gap: 24px;

        > div {
          text-align: center;

          > img {
            width: 100%;
            border-radius: 4px;
          }

          > p {
            margin: 0;
          }
        }
      }
    }
  }

  @media screen and (min-width: 720px) {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 24px;

    > aside {
      grid-column: 1 / span 4;
    }

    > div {
      grid-column: 5 / span 8;
    }
  }
`
