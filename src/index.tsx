import React from 'react'
import ReactDOM from 'react-dom/client'
import { createServer, Model } from 'miragejs'
import { App } from './App'

createServer({
  models: {
    transaction: Model
  },

  seeds(server) {
      server.db.loadData({
        transactions: [
          {
            id: 1,
            title: 'Salário',
            type: 'deposit',
            category: 'Renda',
            amount: 1419.26,
            createdAt: new Date('2022-06-05 10:15:45') 
          },
          {
            id: 2,
            title: 'Aluguel',
            type: 'withdraw',
            category: 'Moradia',
            amount: 800,
            createdAt: new Date('2022-06-08 10:15:45') 
          }
        ]
      })
  },

  routes() {
    this.namespace = 'api'

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
    })
  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)