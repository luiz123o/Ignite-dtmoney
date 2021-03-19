import { useContext } from 'react'
import { DEFAULT_TRANSITION } from 'src/constants'
import { TransactionsContext } from 'src/contexts/TransactionsContexts'

import { TABLE_ANIMATION } from './animations'
import * as S from './styles'

export const TransactionTable = () => {
  const { transactions } = useContext(TransactionsContext)

  return (
    <S.Container>
      <table>
        <thead>
          <th>Título</th>
          <th>Valor</th>
          <th>Categoria</th>
          <th>Data</th>
        </thead>

        <tbody>
          {transactions?.map((transaction) => {
            return (
              <S.TrTransaction
                key={`trans-${transaction.id}`}
                variants={TABLE_ANIMATION}
                transition={DEFAULT_TRANSITION}
                whileHover={{ x: -13, transition: DEFAULT_TRANSITION }}
                whileTap={{ x: 13, transition: DEFAULT_TRANSITION }}
              >
                <td>{transaction.title}</td>
                <td className={transaction.type}>
                  {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                  }).format(transaction.value)}
                </td>
                <td>{transaction.category}</td>
                <td>
                  {new Intl.DateTimeFormat('pt-BR').format(
                    new Date(transaction.createdAt)
                  )}
                </td>
              </S.TrTransaction>
            )
          })}
        </tbody>
      </table>
    </S.Container>
  )
}
