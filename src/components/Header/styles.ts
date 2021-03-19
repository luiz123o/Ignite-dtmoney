import styled, { css } from 'styled-components'
import { tint } from 'polished'

export const Container = styled.header`
  ${({ theme }) => css`
    background: ${theme.colors.primaryColor};
    box-shadow: 0px 8px 6px -6px rgba(0, 0, 0, 0.6);
  `}
`
export const Content = styled.div`
  ${({ theme }) => css`
    max-width: 1120px;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3rem 10rem 10rem;

    button {
      font-size: 1rem;
      color: ${theme.colors.shape};
      background: ${theme.colors.primaryColorLight};
      border: 0;
      padding: 0 2rem;

      border-radius: 0.25rem;
      height: 3rem;
      transition: background 0.2s;
      &:hover {
        background: ${tint(0.09, theme.colors.primaryColorLight)};
      }
    }
  `}
`
