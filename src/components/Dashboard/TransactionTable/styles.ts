import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    margin-top: 4rem;

    table {
      width: 100%;
      border-spacing: 0 0.5rem;

      th {
        color: ${theme.colors.text.textBody};
        font-weight: 400;
        padding: 1rem 2rem;
        text-align: left;
        line-height: 1.5rem;
      }
      td {
        padding: 1rem 2rem;
        border: 0;
        background: ${theme.colors.shape};
        color: ${theme.colors.text.textBody};
        border-radius: 0.25rem;
        &:first-child {
          color: ${theme.colors.text.title};
        }
        &.deposit {
          color: ${theme.colors.green};
        }
        &.withdraw {
          color: ${theme.colors.red};
        }
      }
    }
  `}
`
