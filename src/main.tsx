import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ThemeProvider } from '@/components/theme-provider.tsx'
import './index.css'
import { Route, Switch } from 'wouter'
import Policy from '@/policy.tsx'
import Tnc from '@/tnc.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <Switch>
        <Route path='/policy' component={Policy} />
        <Route path='/terms-and-conditions' component={Tnc} />

        <App />
      </Switch>
    </ThemeProvider>
  </React.StrictMode>,
)
