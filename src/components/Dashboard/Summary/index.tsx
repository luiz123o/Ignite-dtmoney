import { TRANSACTIONS_NAVIGATION } from 'src/constants'
import * as S from './styles'

export const Summary = () => {
  return (
    <S.Container>
      {Object.entries(TRANSACTIONS_NAVIGATION).map(([key, value]) => (
        <S.AnimatedTransactionsCards key={`card-${key}`}>
          <header>
            <p>{value.title}</p>
            <div>{value.icon}</div>
          </header>
          <strong>R$ 1000</strong>
        </S.AnimatedTransactionsCards>
      ))}
    </S.Container>
  )
}
