export interface IMockApiGetAllPaymentTransactionsResponse {
    data: Array<{
        id: number
        date: Date
        description: string
        amount: number
    }>,
    totalItens: number
}

export interface IMockApiGetAllPaymentTransactionsParams {
    initialDate?: Date;
    finalDate?: Date;
    offset?: number
    limit?: number
}