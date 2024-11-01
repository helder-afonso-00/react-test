import { useEffect, useState } from 'react'
import './App.css'
import { Container, ErrorMessage, FiltersContainer, Loading } from './styles'
import mockAPI from './api/mockApi'
import { IMockApiGetAllPaymentTransactionsResponse } from './api/interfaces/IMockApiInterface'
import PaymentTransactionList from './components/PaymentTransactionList'

interface IGetAllPaymentTransactionsParams {
  initialDate?: Date
  finalDate?: Date
  offset?: number
  limit?: number
}

function App() {
  const [paymentsTransactions, setPaymentsTransactions] = useState<IMockApiGetAllPaymentTransactionsResponse>(null)
  const [loading, setLoading] = useState(true)
  const [initialDate, setInitialDate] = useState<Date | null>(null)
  const [finalDate, setFinalDate] = useState<Date | null>(null)
  const [error, setError] = useState(null)
  
  useEffect(() => {
    (async () => {
     await getAllPaymentTransactions()
    })()
  }, [initialDate, finalDate])

  function handleChangeDate(setDate: React.Dispatch<React.SetStateAction<Date>>, e: React.ChangeEvent<HTMLInputElement>): void {
    e.preventDefault();
    setDate(new Date(e.target.value))
  }

  async function getAllPaymentTransactions(filters?: IGetAllPaymentTransactionsParams): Promise<void> {
    try {
      const response = await mockAPI.getAllPaymentTransactions(filters)
      setPaymentsTransactions(response) 
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Container> 
        <FiltersContainer>
          <div>
            <span>Initial Date</span>
            <input type='date' onChange={(e) => handleChangeDate(setInitialDate, e)} />
          </div>

          <div>
            <span>Final Date</span>
            <input type='date' onChange={(e) => handleChangeDate(setFinalDate, e)} />
          </div>

        </FiltersContainer>
        {
          loading && (
            <Loading>fething API</Loading>
          ) 
        }
        {
           error && (
            <ErrorMessage>{error}</ErrorMessage>
           )
           
        }
        {
          paymentsTransactions && (
            <PaymentTransactionList paymentsTransactionsList={paymentsTransactions.data} />
           )
        }
    </Container>
  )
}

export default App
