import { isAfter, isBefore } from "date-fns"
import { IMockApiGetAllPaymentTransactionsParams, IMockApiGetAllPaymentTransactionsResponse } from "./interfaces/IMockApiInterface"

const response: IMockApiGetAllPaymentTransactionsResponse = {
    data: [
        {
            id: 1,
            date: new Date(),
            description: 'Description 1',
            amount: 10
        },
        {
            id: 2,
            date: new Date('10-10-2024'),
            description: 'Description 2',
            amount: 7.5
        },
        {
            id: 3,
            date: new Date('10-7-2024'),
            description: 'Description 3',
            amount: 9.6
        },
    ],
    totalItens: 3,
}

export function getAllPaymentTransactions(filters?: IMockApiGetAllPaymentTransactionsParams): Promise<IMockApiGetAllPaymentTransactionsResponse> {
    
    const { initialDate, finalDate } = filters ?? {}

    return new Promise((resolve) => {
        if (initialDate && finalDate) {
            const filteredResponseByDate = response.data.filter(paymentTransaction => isAfter(paymentTransaction.date, initialDate) && isBefore(paymentTransaction.date, finalDate))
            return resolve({ data: filteredResponseByDate, totalItens: response.totalItens})
        }
        return resolve(response)
    })
}

// export function getAllPaymentTransactionsError(data?: IMockApiGetAllPaymentTransactionsParams): Promise<IMockApiGetAllPaymentTransactionsResponse> {
//     throw new Error('Internal server error in Mock API')
// }

const mockAPI = {
    getAllPaymentTransactions,
    // getAllPaymentTransactionsError
}

export default mockAPI