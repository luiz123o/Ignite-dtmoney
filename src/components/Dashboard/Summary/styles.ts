import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'

export const Container = styled(motion.section)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -10rem;
`

export const AnimatedTransactionsCards = styled(motion.button)`
  ${({ theme }) => css`
    box-shadow: 0px 8px 6px -6px rgba(81, 41, 204, 0.6);
    > header {
      display: flex;
      align-items: center;
      justify-content: space-between;

      > p {
        font-size: 1rem;
        font-weight: 500;
      }
    }

    strong {
      display: block;
      float: left;
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;
    }
    border: none;

    background: ${theme.colors.shape};
    padding: 2rem 2rem;
    border-radius: 0.25rem;
    color: ${theme.colors.text.title};

    &:last-child {
      background: ${theme.colors.green};
      color: ${theme.colors.shape};
    }
  `}
`
