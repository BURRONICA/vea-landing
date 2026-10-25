export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-indigo-500 selection:text-white">
      {/* Barra de Navegación */}
      <header className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-2xl font-black tracking-wider bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
            VEA+
          </span>
          <span className="hidden md:inline text-xs text-slate-400 border-l border-slate-800 pl-3">
            Visión y Estrategia Administrativa
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-300">
          <a href="#beneficios" className="hover:text-white transition-colors">Beneficios</a>
          <a href="#demo" className="hover:text-white transition-colors">Demo</a>
          <a href="#contacto" className="hover:text-white transition-colors">Contacto</a>
        </nav>
        <a
          href="https://api.whatsapp.com/send?phone=529981955326&text=Hola,%20me%20interesa%20conocer%20la%20demo%20de%20VEA+%20para%20mi%20óptica"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-lg transition-all duration-200 flex items-center gap-2"
        >
          <span>Solicitar demo</span>
        </a>
      </header>

      {/* Sección Hero / Principal */}
      <section className="max-w-7xl mx-auto px-6 pt-12 pb-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Columna de Texto */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-block bg-slate-900 border border-slate-800 text-indigo-400 text-xs font-semibold px-3 py-1.5 rounded-full uppercase tracking-wider">
            Software de administración para ópticas
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            Optimiza y digitaliza la gestión de tu óptica con <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">VEA+</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl leading-relaxed">
            VEA+ significa Visión y Estrategia Administrativa para tu óptica. Controla el inventario, emite notas de venta en segundos y automatiza el aviso al paciente por WhatsApp.
          </p>
          <div className="pt-4">
            <a
              href="https://api.whatsapp.com/send?phone=529981955326&text=Hola,%20me%20interesa%20conocer%20la%20demo%20de%20VEA+%20para%20mi%20óptica"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white hover:bg-slate-100 text-slate-950 font-bold px-8 py-4 rounded-2xl shadow-xl transition-all duration-200 text-base"
            >
              <span>Solicitar demo</span>
            </a>
          </div>
        </div>

        {/* Columna de Tarjeta / Panel de la Óptica */}
        <div className="lg:col-span-5">
          <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-800/80 p-6 rounded-3xl shadow-2xl space-y-4 relative overflow-hidden">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800/60">
              <span className="text-sm font-medium text-slate-300">Panel de tu óptica</span>
              <span className="text-xs bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 px-2.5 py-1 rounded-full">
                En operación
              </span>
            </div>
            
            <div className="space-y-3 pt-2">
              <div className="bg-slate-950/60 border border-slate-800/50 p-4 rounded-xl flex items-center justify-between">
                <span className="text-sm text-slate-300 flex items-center gap-2">📦 Inventario</span>
                <span className="text-xs text-slate-400 bg-slate-900 px-2.5 py-1 rounded-md">Armazones y micas</span>
              </div>
              <div className="bg-slate-950/60 border border-slate-800/50 p-4 rounded-xl flex items-center justify-between">
                <span className="text-sm text-slate-300 flex items-center gap-2">📄 Nota de venta</span>
                <span className="text-xs text-indigo-400 bg-indigo-950/50 border border-indigo-900/50 px-2.5 py-1 rounded-md font-medium">NV-1042 lista</span>
              </div>
              <div className="bg-slate-950/60 border border-slate-800/50 p-4 rounded-xl flex items-center justify-between">
                <span className="text-sm text-slate-300 flex items-center gap-2">💬 WhatsApp</span>
                <span className="text-xs text-emerald-400 bg-emerald-950/50 border border-emerald-900/50 px-2.5 py-1 rounded-md font-medium">Nota enviada</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
