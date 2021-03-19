import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'
import { shade } from 'polished'

export const Container = styled.div`
  ${({ theme }) => css`
    margin-top: 4rem;

    table {
      width: 100%;
      border-spacing: 0 0rem;
      th {
        color: ${theme.colors.text.textBody};
        font-weight: 400;
        padding: 1rem 2rem;
        text-align: left;
        line-height: 1.5rem;
      }
    }
  `}
`
export const TrTransaction = styled(motion.tr)`
  ${({ theme }) => css`
    background: ${theme.colors.shape};
    border-radius: 0.25rem !important;
    transition: background 0.2s ease;
    td {
      padding: 1rem 2rem;
      border: 1px solid transparent;

      color: ${theme.colors.text.textBody};

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
    &:hover {
      background: ${shade(0.03, theme.colors.shape)};
    }
  `}
`
