import React from 'react'
import ReactDOM from 'react-dom/client'
import Theme from './theme/Theme'
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Theme />
    </BrowserRouter>
  </React.StrictMode>
)
