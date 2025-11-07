import { Link, Outlet } from 'react-router-dom'

export default function MainLayout({ onLogout }: { onLogout: () => void }) {
  return (
    <div>
      <nav style={{ background: '#222', color: '#fff', padding: '10px' }}>
        <Link to="/" style={{ color: '#fff', marginRight: 20 }}>🏠 Dashboard</Link>
        <Link to="/profile" style={{ color: '#fff', marginRight: 20 }}>👤 Perfil</Link>
        <button onClick={onLogout}>Sair</button>
      </nav>

      <main style={{ padding: 20 }}>
        <Outlet /> {/* Aqui aparecem as páginas internas */}
      </main>
    </div>
  )
}
