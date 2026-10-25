'use client'
// Módulo de administración
import { useState } from 'react';
import { useState } from 'react';

export default function SoftwareApp() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const [activeTab, setActiveTab] = useState<'dashboard' | 'inventario' | 'clientes' | 'ventas'>('dashboard');

  const [inventario, setInventario] = useState([
    { id: 1, codigo: 'ARM-001', producto: 'Armazón Ray-Ban Black', stock: 12, precio: '$2,400' },
    { id: 2, codigo: 'MIC-002', producto: 'Mica Antirreflejante Poly', stock: 25, precio: '$850' },
    { id: 3, codigo: 'ARM-003', producto: 'Armazón Oakley Sport', stock: 5, precio: '$3,100' },
  ]);

  const [clientes, setClientes] = useState([
    { id: 1, nombre: 'Carlos Mendoza', telefono: '9981234567', grad: 'OD: -1.50 | OI: -1.75', estado: 'Pendiente' },
    { id: 2, nombre: 'María Fernández', telefono: '9987654321', grad: 'OD: +0.50 | OI: +0.75', estado: 'Listo para entrega' },
  ]);

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

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-4 font-sans">
        <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl shadow-2xl max-w-md w-full space-y-6 text-center">
          <div className="space-y-2">
            <span className="text-3xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
              VEA+ Admin
            </span>
            <h1 className="text-xl font-bold text-slate-100">Acceso al Software</h1>
            <p className="text-xs text-slate-400">
              Ingresa la clave de administración para acceder.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              placeholder="Contraseña del sistema"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors text-center"
            />

            {error && (
              <p className="text-red-400 text-xs font-medium">Contraseña incorrecta.</p>
            )}

            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 rounded-xl transition-all shadow-lg"
            >
              Ingresar al Panel
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans flex flex-col">
      <header className="bg-slate-900 border-b border-slate-800 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="text-2xl font-black bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
            VEA+
          </span>
          <span className="text-xs bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 px-2.5 py-1 rounded-full">
            Sistema de Gestión
          </span>
        </div>
        <button
          onClick={() => setIsAuthenticated(false)}
          className="bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs px-4 py-2 rounded-lg"
        >
          Cerrar Sesión
        </button>
      </header>

      <div className="flex flex-1">
        <aside className="w-64 bg-slate-900/50 border-r border-slate-800/80 p-4 space-y-2">
          <button
            onClick={() => setActiveTab('dashboard')}
            className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
              activeTab === 'dashboard' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:bg-slate-800'
            }`}
          >
            📊 Resumen General
          </button>
          <button
            onClick={() => setActiveTab('inventario')}
            className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
              activeTab === 'inventario' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:bg-slate-800'
            }`}
          >
            📦 Inventario de Productos
          </button>
          <button
            onClick={() => setActiveTab('clientes')}
            className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
              activeTab === 'clientes' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:bg-slate-800'
            }`}
          >
            👥 Pacientes / Clientes
          </button>
          <button
            onClick={() => setActiveTab('ventas')}
            className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
              activeTab === 'ventas' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:bg-slate-800'
            }`}
          >
            📄 Notas de Venta & WhatsApp
          </button>
        </aside>

        <main className="flex-1 p-8 space-y-6">
          {activeTab === 'dashboard' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Resumen de la Óptica</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
                  <p className="text-slate-400 text-xs">Total Productos</p>
                  <p className="text-3xl font-extrabold text-indigo-400 mt-2">42 artículos</p>
                </div>
                <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
                  <p className="text-slate-400 text-xs">Pacientes Registrados</p>
                  <p className="text-3xl font-extrabold text-pink-400 mt-2">128 clientes</p>
                </div>
                <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
                  <p className="text-slate-400 text-xs">Avisos por WhatsApp Enviados</p>
                  <p className="text-3xl font-extrabold text-emerald-400 mt-2">89 mensajes</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'inventario' && (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Control de Inventario</h2>
              <div className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden">
                <table className="w-full text-left text-sm text-slate-300">
                  <thead className="bg-slate-950 text-slate-400 uppercase text-xs">
                    <tr>
                      <th className="p-4">Código</th>
                      <th className="p-4">Producto</th>
                      <th className="p-4">Stock</th>
                      <th className="p-4">Precio</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800">
                    {inventario.map((item) => (
                      <tr key={item.id} className="hover:bg-slate-800/40">
                        <td className="p-4 font-mono text-indigo-400">{item.codigo}</td>
                        <td className="p-4 font-medium text-white">{item.producto}</td>
                        <td className="p-4">{item.stock} pzas</td>
                        <td className="p-4">{item.precio}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'clientes' && (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Expedientes de Pacientes</h2>
              <div className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden">
                <table className="w-full text-left text-sm text-slate-300">
                  <thead className="bg-slate-950 text-slate-400 uppercase text-xs">
                    <tr>
                      <th className="p-4">Paciente</th>
                      <th className="p-4">Teléfono</th>
                      <th className="p-4">Graduación</th>
                      <th className="p-4">Estado del trabajo</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800">
                    {clientes.map((cli) => (
                      <tr key={cli.id} className="hover:bg-slate-800/40">
                        <td className="p-4 font-medium text-white">{cli.nombre}</td>
                        <td className="p-4">{cli.telefono}</td>
                        <td className="p-4 text-xs font-mono">{cli.grad}</td>
                        <td className="p-4">
                          <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                            cli.estado === 'Listo para entrega' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                          }`}>
                            {cli.estado}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'ventas' && (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Notas de Venta y Notificaciones</h2>
              <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-4 max-w-xl">
                <h3 className="font-semibold text-lg text-indigo-400">Enviar aviso de lentes listos</h3>
                <p className="text-xs text-slate-400">Genera una notificación automática por WhatsApp al cliente.</p>
                <div className="space-y-3">
                  <input
                    type="text"
                    placeholder="Nombre del paciente"
                    className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm"
                  />
                  <input
                    type="text"
                    placeholder="Número de WhatsApp (10 dígitos)"
                    className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm"
                  />
                  <button className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-medium py-2.5 rounded-xl text-sm transition-colors">
                    💬 Notificar por WhatsApp
                  </button>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
