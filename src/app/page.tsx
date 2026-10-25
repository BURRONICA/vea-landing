'use client';

import { useState } from 'react';

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  // Define aquí la contraseña de acceso privada
  const SECRET_PASSWORD = 'VEA2026'; 

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === SECRET_PASSWORD) {
      setIsAuthenticated(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  // Si no está autenticado, muestra el formulario de acceso
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-4 font-sans">
        <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl shadow-2xl max-w-md w-full space-y-6 text-center">
          <div className="space-y-2">
            <span className="text-3xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
              VEA+
            </span>
            <h1 className="text-xl font-bold text-slate-100">Acceso Privado</h1>
            <p className="text-xs text-slate-400">
              Ingresa la contraseña para acceder al sistema.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors text-center"
              />
            </div>

            {error && (
              <p className="text-red-400 text-xs font-medium">
                Contraseña incorrecta. Intenta de nuevo.
              </p>
            )}

            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 rounded-xl transition-all duration-200 shadow-lg"
            >
              Ingresar
            </button>
          </form>
        </div>
      </div>
    );
  }

  // Si la contraseña es correcta, se muestra el contenido del sistema
  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-indigo-500 selection:text-white">
      {/* Barra de Navegación */}
      <header className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between border-b border-slate-900">
        <div className="flex items-center gap-3">
          <span className="text-2xl font-black tracking-wider bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
            VEA+
          </span>
          <span className="hidden md:inline text-xs text-slate-400 border-l border-slate-800 pl-3">
            Panel Privado del Sistema
          </span>
        </div>
        <button
          onClick={() => setIsAuthenticated(false)}
          className="bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold px-4 py-2 rounded-lg transition-colors"
        >
          Cerrar sesión
        </button>
      </header>

      {/* Contenido Privado del Software */}
      <main className="max-w-7xl mx-auto px-6 py-12 space-y-8">
        <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl space-y-4">
          <h2 className="text-2xl font-bold text-indigo-400">Bienvenido al Panel de VEA+</h2>
          <p className="text-slate-300 leading-relaxed">
            Este es el acceso exclusivo para pruebas del software. Desde aquí se podrán gestionar inventarios, notas de venta y notificaciones personalizadas por WhatsApp.
          </p>
        </div>

        {/* Tarjetas de Operación del Sistema */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl space-y-2">
            <span className="text-2xl">📦</span>
            <h3 className="font-bold text-lg">Gestión de Inventario</h3>
            <p className="text-xs text-slate-400">Control total de armazones, micas y accesorios en existencia.</p>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl space-y-2">
            <span className="text-2xl">📄</span>
            <h3 className="font-bold text-lg">Notas de Venta</h3>
            <p className="text-xs text-slate-400">Emisión rápida de folios y comprobantes digitales para pacientes.</p>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl space-y-2">
            <span className="text-2xl">💬</span>
            <h3 className="font-bold text-lg">Avisos por WhatsApp</h3>
            <p className="text-xs text-slate-400">Automatización de confirmaciones y listo para entrega.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
