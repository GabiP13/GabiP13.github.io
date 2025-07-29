// import { createRoot } from 'react-dom/client'
// import './index.html'
// import App from './app.tsx'

// const root = createRoot(document.getElementById('root'));
// root.render(<App />);


import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './app.tsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
