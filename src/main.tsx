import { createRoot } from 'react-dom/client'

import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Expenses from './routes/Expenses/index.tsx'
import Invoices from './routes/Invoices/index.tsx'
import NotFunding from './routes/NotFounding/index.tsx'
import Invoice from './routes/Invoices/Invoice/index.tsx'
import InvoicesIndex from './routes/Invoices/Invoicesindex/index.tsx'
import Greeting from './routes/Greeting/index.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Greeting/>}/>
        <Route path="expenses" element={<Expenses />} />
        <Route path="invoices" element={<Invoices />} >
          <Route index element={<InvoicesIndex/>} />
          <Route path=":invoiceId" element={<Invoice />} />
        </Route>
        <Route path="*" element={<NotFunding />} />
      </Route>
    </Routes>
  </BrowserRouter>,
)
