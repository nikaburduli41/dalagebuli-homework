import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Profile from './App.jsx'
import FormFields from './App2.jsx'
import Dashboard from './App3.jsx'

createRoot(document.getElementById('root')).render(
    <Dashboard/>
)
