import styled, { css } from 'styled-components'
import { shade } from 'polished'

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
