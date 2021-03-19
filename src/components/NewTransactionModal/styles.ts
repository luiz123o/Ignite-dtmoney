import styled, { css } from 'styled-components'
import { shade, tint } from 'polished'
import { motion } from 'framer-motion'

export const Container = styled.form`
  ${({ theme }) => css`
    h2 {
      color: ${theme.colors.text.title};
      font-size: 1.5rem;
      margin-bottom: 2rem;
    }
    input {
      width: 100%;
      padding: 0 1.5rem;
      height: 4rem;
      border-radius: 0.25rem;

      border: 1px solid ${theme.colors.input.border};
      background: ${theme.colors.input.background};

      font-weight: 400;
      font-size: 1rem;

      &::placeholder {
        color: ${theme.colors.text.textBody};
      }
      & + input {
        margin-top: 1rem;
      }
    }
    button[type='submit'] {
      width: 100%;
      padding: 0 1.5rem;
      height: 4rem;

      background: ${theme.colors.green};
      color: ${theme.colors.shape};
      border-radius: 0.25rem;

      border: 0;
      font-size: 1rem;
      margin-top: 1.5rem;
      transition: background 0.4s;
      font-weight: 600;
      &:hover {
        transform: skewX(0deg) scale(1.01);
        background: ${shade(0.2, theme.colors.green)};
      }
    }
  `}
`
export const TransactionContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;

  margin: 1rem 0;
`

interface RadioBoxProps {
  isActive: boolean
  activeColor: 'green' | 'red'
}

export const RadioBox = styled(motion.button)<RadioBoxProps>`
  ${({ theme, isActive, activeColor }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    height: 4rem;
    border: 1px solid ${theme.colors.input.border};
    border-radius: 0.25rem;
    transition: transform 0.2s;
    background: ${isActive && activeColor === 'green'
      ? tint(0.6, theme.colors.green)
      : isActive && activeColor === 'red'
      ? tint(0.6, theme.colors.red)
      : 'transparent'};
    &:hover {
      transform: skewX(-1deg) scale(1.03);
    }
    svg {
      width: 20px;
      height: 20px;
    }
    span {
      display: inline-block;
      margin-left: 1rem;
      font-size: 1rem;
      color: ${theme.colors.text.title};
    }
  `}
`
