import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import Header from './components/sidebar'
import Footer from './components/footer'
import Preview from './components/previewevent'
import Fullview from './components/fullview'



createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  
  <Header />
    <App />

  <Footer />
  
  </BrowserRouter>,
)
