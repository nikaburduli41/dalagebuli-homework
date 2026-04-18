import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import Hello from './App2.jsx'
import Third from './Third.jsx'
createRoot(document.getElementById('root')).render(

  // <App name='nika' age='100' city='tbilisi' bColor='black' />

  // <Hello name='nika' age='100' city='paris' />

    <Third name='afd' age='503' city='tbilisi' bgColor='black' hobby='run' />
)
