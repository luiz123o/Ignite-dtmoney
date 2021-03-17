import * as S from './styles'
import { Summary } from './Summary'
import { TransactionTable } from './TransactionTable'

export const Dashboard = () => {
  return (
    <S.Container>
      <Summary />
      <TransactionTable />
    </S.Container>
  )
}
