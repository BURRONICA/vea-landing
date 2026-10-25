'use client';

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

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'VEA2026') {
      setIsAuthenticated(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
        <div className="bg-slate-800 p-8 rounded-2xl shadow-2xl border border-slate-700 max-w-md w-full text-center">
          <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-500/30">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">VEA+ Administración</h2>
          <p className="text-slate-400 text-sm mb-6">Acceso exclusivo para personal autorizado</p>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <input
                type="password"
                placeholder="Ingresa la contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
              />
            </div>
            {error && (
              <p className="text-red-400 text-xs font-medium">Contraseña incorrecta. Intenta de nuevo.</p>
            )}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 rounded-xl shadow-lg shadow-blue-600/30 transition-all active:scale-[0.98]"
            >
              Ingresar al Sistema
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col md:flex-row">
      <aside className="w-full md:w-64 bg-slate-900 border-r border-slate-800 p-6 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center font-bold text-xl shadow-md shadow-blue-500/20">
              V+
            </div>
            <div>
              <h1 className="font-bold text-lg leading-none">VEA+</h1>
              <span className="text-xs text-slate-400">Panel de Control</span>
            </div>
          </div>

          <nav className="space-y-2">
            {[
              { id: 'dashboard', label: 'Dashboard', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
              { id: 'inventario', label: 'Inventario', icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4' },
              { id: 'clientes', label: 'Pacientes / Clientes', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' },
              { id: 'ventas', label: 'Ventas y Recibos', icon: 'M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                    : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={tab.icon} />
                </svg>
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        <button
          onClick={() => setIsAuthenticated(false)}
          className="w-full flex items-center justify-center gap-2 px-4 py-3 mt-6 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-sm font-medium transition-all border border-slate-700"
        >
          Cerrar Sesión
        </button>
      </aside>

      <main className="flex-1 p-6 md:p-10 overflow-y-auto">
        {activeTab === 'dashboard' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Resumen General</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-sm">
                <span className="text-slate-400 text-sm">Ventas del Mes</span>
                <p className="text-3xl font-extrabold text-blue-400 mt-2">$42,800</p>
              </div>
              <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-sm">
                <span className="text-slate-400 text-sm">Pacientes Atendidos</span>
                <p className="text-3xl font-extrabold text-emerald-400 mt-2">18</p>
              </div>
              <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-sm">
                <span className="text-slate-400 text-sm">Armazones en Stock</span>
                <p className="text-3xl font-extrabold text-amber-400 mt-2">42</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'inventario' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Gestión de Inventario</h2>
              <button className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-xl text-sm font-semibold transition-all">
                + Agregar Producto
              </button>
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
              <table className="w-full text-left text-sm text-slate-300">
                <thead className="bg-slate-800 text-slate-400 font-semibold border-b border-slate-700">
                  <tr>
                    <th className="p-4">Código</th>
                    <th className="p-4">Producto</th>
                    <th className="p-4">Stock</th>
                    <th className="p-4">Precio</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {inventario.map((item) => (
                    <tr key={item.id} className="hover:bg-slate-800/50">
                      <td className="p-4 font-mono text-xs text-slate-400">{item.codigo}</td>
                      <td className="p-4 font-medium text-white">{item.producto}</td>
                      <td className="p-4">{item.stock} pzas</td>
                      <td className="p-4 text-emerald-400 font-semibold">{item.precio}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'clientes' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Registro de Pacientes</h2>
              <button className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-xl text-sm font-semibold transition-all">
                + Nuevo Paciente
              </button>
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
              <table className="w-full text-left text-sm text-slate-300">
                <thead className="bg-slate-800 text-slate-400 font-semibold border-b border-slate-700">
                  <tr>
                    <th className="p-4">Nombre</th>
                    <th className="p-4">Teléfono</th>
                    <th className="p-4">Graduación Reciente</th>
                    <th className="p-4">Estado del Pedido</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {clientes.map((cliente) => (
                    <tr key={cliente.id} className="hover:bg-slate-800/50">
                      <td className="p-4 font-medium text-white">{cliente.nombre}</td>
                      <td className="p-4 text-slate-400">{cliente.telefono}</td>
                      <td className="p-4 font-mono text-xs">{cliente.grad}</td>
                      <td className="p-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          cliente.estado === 'Listo para entrega'
                            ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                            : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                        }`}>
                          {cliente.estado}
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
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Historial de Ventas</h2>
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl text-center text-slate-400">
              Módulo de notas de venta e impresión de recibos activo.
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
