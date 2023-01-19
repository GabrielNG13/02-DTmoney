import React from 'react';
import ReactDOM from 'react-dom/client';
import { createServer } from 'miragejs'
import { App } from './App';
import { timingSafeEqual } from 'crypto';

createServer({
  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'Salário',
          amount: 1400,
          category: 'Renda',
          createdAt: new Date()
        },
        {
          id: 2,
          title: 'Compras',
          amount: 300,
          category: 'Gasto',
          createdAt: new Date()
        }
      ]
    })
  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);