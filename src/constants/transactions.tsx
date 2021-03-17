import { IncomeIcon, OutcomeIcon, TotalIcon } from '../assets'

export default {
  Income: {
    title: 'Entradas',
    icon: <IncomeIcon />
  },
  Outcome: {
    title: 'Saídas',
    icon: <OutcomeIcon />
  },
  Total: {
    title: 'Total',
    icon: <TotalIcon />
  }
} as const
