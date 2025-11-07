import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import { Toaster } from "react-hot-toast";
import MainLayout from './layout/MainLayout'
import { useState } from 'react'

function App() {
  // Simula um login. Depois você pode usar contexto ou JWT
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
  
    <Router>
       <Toaster
  position="top-center"
  toastOptions={{
    duration: 3000,
    style: {
      borderRadius: "8px",
      color: "#fff",
      fontWeight: "500",
    },
    success: {
      style: {
        background: "green",
      },
      iconTheme: {
        primary: "#fff",
        secondary: "#22c55e", // verde claro
      },
    },
    error: {
      style: {
        background: "red",
      },
      iconTheme: {
        primary: "#fff",
        secondary: "#ef4444", // vermelho claro
      },
    },
  }}
/>

      <Routes>
        {/* Página de Login */}
        <Route path="/login" element={<Login onLogin={() => setIsLoggedIn(true)} />} />

        {/* Rotas protegidas (visíveis só se logado) */}
        {isLoggedIn ? (
          <Route element={<MainLayout onLogout={() => setIsLoggedIn(false)} />}>
           
          </Route>
        ) : (
          // Redireciona quem não estiver logado para o login
          <Route path="*" element={<Navigate to="/login" />} />
        )}
      </Routes>
    </Router>
  )
}

export default App
