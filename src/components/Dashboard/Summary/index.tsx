import { useContext } from 'react'
import { DEFAULT_TRANSITION, TRANSACTIONS_NAVIGATION } from 'src/constants'

import { TransactionsContext } from 'src/contexts/TransactionsContexts'
import formatCurrency from 'src/utils/format-currency'
import { CARDS_ANIMATION, CONTAINER_ANIMATION } from './animations'
import * as S from './styles'

export const Summary = () => {
  const { transactions } = useContext(TransactionsContext)

  const summary = transactions?.reduce(
    (acc, transaction) => {
      if (transaction.type === 'deposit') {
        acc.deposits += transaction.value
        acc.total += transaction.value
      } else {
        acc.withdraws += transaction.value
        acc.total -= transaction.value
      }

      return acc
    },
    {
      deposits: 0,
      withdraws: 0,
      total: 0
    }
  )

  return (
    <S.Container variants={CONTAINER_ANIMATION}>
      {Object.entries(TRANSACTIONS_NAVIGATION).map(([key, value]) => (
        <S.AnimatedTransactionsCards
          variants={CARDS_ANIMATION}
          transition={DEFAULT_TRANSITION}
          whileHover={{ y: -3, transition: DEFAULT_TRANSITION }}
          whileTap={{ y: 3, transition: DEFAULT_TRANSITION }}
          key={`card-${key}`}
        >
          <header>
            <p>{value.title}</p>
            <div>{value.icon}</div>
          </header>
          <strong>
            {value.title === 'Entradas'
              ? formatCurrency(Number(summary?.deposits))
              : value.title === 'Saídas'
              ? `-` + formatCurrency(Number(summary?.withdraws))
              : formatCurrency(Number(summary?.total))}
          </strong>
        </S.AnimatedTransactionsCards>
      ))}
    </S.Container>
  )
}
