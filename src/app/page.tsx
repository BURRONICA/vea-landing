export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-6">
      <div className="max-w-3xl text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          VEA+ para tu Óptica
        </h1>
        <p className="text-lg md:text-xl text-slate-300">
          La solución inteligente B2B para optimizar la gestión y potenciar las ventas de tu clínica óptica.
        </p>
        <div className="pt-4">
          <a
            href="https://api.whatsapp.com/send?phone=529981955326&text=Hola,%20me%20interesa%20conocer%20la%20demo%20de%20VEA+%20para%20mi%20óptica"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 hover:bg-green-500 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-all duration-200 text-lg"
          >
            Solicitar Demo por WhatsApp
          </a>
        </div>
      </div>
    </main>
  );
}
