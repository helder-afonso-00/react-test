import React from 'react'

import { ListContainer, PaymentTransactionContainer, PaymentTransactionItem } from './styles'
import { format } from 'date-fns'

export default function PaymentTransactionList({ paymentsTransactionsList }) {
    return (
        <ListContainer>
            {paymentsTransactionsList && paymentsTransactionsList.map(paymentTransaction => (
            <PaymentTransactionContainer>
                <PaymentTransactionItem>{paymentTransaction.id}</PaymentTransactionItem>
                <PaymentTransactionItem>{format(paymentTransaction.date, 'MM/dd/yy')}</PaymentTransactionItem>
                <PaymentTransactionItem>{paymentTransaction.description}</PaymentTransactionItem>
                <PaymentTransactionItem>{paymentTransaction.amount}</PaymentTransactionItem>
            </PaymentTransactionContainer>
            
            ))}
        </ListContainer>
    )
}

