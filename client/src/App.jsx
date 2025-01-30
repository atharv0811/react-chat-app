import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AuthForms from './pages/auth-forms'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<AuthForms />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
