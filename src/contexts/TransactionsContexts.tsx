import { createContext, PropsWithChildren, useEffect, useState } from 'react'
import { api } from 'src/services/api'

interface Transaction {
  id: number
  title: string
  value: number
  type: string
  category: string
  createdAt: string
}
type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>
export type TransactionPropsContext = {
  transactions?: Transaction[]
  createTransaction(transaction: TransactionInput): Promise<void>
}

export const TransactionsContext = createContext({} as TransactionPropsContext)

export const TransactionsProvider = ({
  children
}: PropsWithChildren<unknown>) => {
  //Carregando as informações de transação
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    api
      .get('transactions')
      .then((response) => setTransactions(response.data.transactions))
  }, [])

  //criando informações

  const createTransaction = async (transactionInput: TransactionInput) => {
    const response = await api.post('/transactions', {
      ...transactionInput,
      createdAt: new Date()
    })
    const { transaction } = response.data

    setTransactions([...transactions, transaction])
  }

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        createTransaction
      }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}
