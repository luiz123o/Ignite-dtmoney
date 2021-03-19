import { ThemeProvider } from 'styled-components'
import { Dashboard } from './components/Dashboard'
import Modal from 'react-modal'
import { Headers } from './components/Header'
import { GlobalStyles } from './styles/global'
import * as themes from './styles/themes'
import { useState } from 'react'
import { NewTransactionModal } from './components/NewTransactionModal'
import { TransactionsProvider } from './contexts/TransactionsContexts'

Modal.setAppElement('#root')

function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(
    false
  )
  function handleOpenNewTransacionModal() {
    setIsNewTransactionModalOpen(true)
  }
  function handleCloseNewTransacionModal() {
    setIsNewTransactionModalOpen(false)
  }

  return (
    <>
      <ThemeProvider theme={themes.light}>
        <TransactionsProvider>
          <Headers onOpenNewTransactionModal={handleOpenNewTransacionModal} />
          <Dashboard />
          <NewTransactionModal
            isOpen={isNewTransactionModalOpen}
            onRequestClose={handleCloseNewTransacionModal}
          />
          <GlobalStyles />
        </TransactionsProvider>
      </ThemeProvider>
    </>
  )
}

export default App
