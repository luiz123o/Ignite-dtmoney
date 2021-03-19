import { FormEvent, useContext, useState } from 'react'
import Modal from 'react-modal'
import { CloseIcon, IncomeIcon, OutcomeIcon } from 'src/assets'
import { TransactionsContext } from 'src/contexts/TransactionsContexts'

import * as S from './styles'

export type NewTransactionModalProps = {
  isOpen: boolean
  onRequestClose: () => void
}

export const NewTransactionModal = ({
  isOpen,
  onRequestClose
}: NewTransactionModalProps) => {
  const { createTransaction } = useContext(TransactionsContext)

  const [type, setType] = useState('deposit')
  const [title, setTitle] = useState('')
  const [value, setValue] = useState(0)
  const [category, setCategory] = useState('')

  const handleCreateNewTransaction = async (event: FormEvent) => {
    event.preventDefault()

    await createTransaction({
      title,
      value,
      type,
      category
    })
    setType('deposit')
    setTitle('')
    setValue(0)
    setCategory('')
    onRequestClose()
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <CloseIcon />
      </button>
      <S.Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadatrar transação</h2>
        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        <input
          type="number"
          placeholder="Valor"
          value={value}
          onChange={(event) => setValue(Number(event.target.value))}
        />

        <S.TransactionContainer>
          <S.RadioBox
            isActive={type === 'deposit'}
            activeColor="green"
            onClick={() => {
              setType('deposit')
            }}
          >
            <IncomeIcon />
            <span>Entrada</span>
          </S.RadioBox>
          <S.RadioBox
            activeColor="red"
            isActive={type === 'withdraw'}
            onClick={() => {
              setType('withdraw')
            }}
          >
            <OutcomeIcon />
            <span>Saída</span>
          </S.RadioBox>
        </S.TransactionContainer>

        <input
          type="text"
          placeholder="Categoria"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />
        <button type="submit">Cadastrar</button>
      </S.Container>
    </Modal>
  )
}
