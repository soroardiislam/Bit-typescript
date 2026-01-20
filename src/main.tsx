
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { HomeLayout } from './layout/HomeLayout' 

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <HomeLayout />
    </StrictMode>
  )
}
