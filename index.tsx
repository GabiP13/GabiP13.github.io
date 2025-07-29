import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
import ReactDOM from "react-dom" 
import './index.css'
import App from './app.tsx'


ReactDOM.render(
  <StrictMode><App /></StrictMode>, 
  document.getElementById("root"));
{/* <React.StrictMode><App /></React.StrictMode>, document.getElementById("root")); */}
// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
