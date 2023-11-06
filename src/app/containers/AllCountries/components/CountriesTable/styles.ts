import styled from 'styled-components'

export const Container = styled.div`
  > div {
    display: flex;
    padding: 20px;

    > div {
      flex: 1;
      margin-right: 16px;
    }

    > button {
      border: none;
      background-color: transparent;
      outline: none;
      cursor: pointer;

      flex: 4;
      color: var(--text-color-secondary);
      font-weight: 500;

      display: flex;
      justify-content: center;
      align-items: center;
    }

    :nth-child(2) {
      justify-content: flex-start;
    }
  }

  > a {
    > div {
      display: flex;
      padding: 20px;

      text-align: center;

      background-color: var(--background-color-light);
      border-radius: 8px;
      margin-bottom: 16px;

      box-shadow: var(--box-shadow);
      font-weight: 500;

      transition:
        transform 200ms ease-in-out,
        box-shadow 200ms ease-in-out;

      > div {
        flex: 4;
      }

      :first-child {
        flex: 1;
        margin-right: 16px;

        > img {
          border-radius: 2px;
          width: 100%;
        }
      }

      :nth-child(2) {
        text-align: left;
      }
    }

    > :hover {
      transform: translateY(-4px);
      box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
    }
  }

  @media screen and (max-width: 720px) {
    > div {
      > :first-child {
        display: none;
      }

      > :nth-child(4) {
        display: none;
      }

      > :last-child {
        display: none;
      }
    }

    > a {
      > div {
        :first-child {
          display: none;
        }

        :nth-child(4) {
          display: none;
        }

        :last-child {
          display: none;
        }
      }
    }
  }
`
