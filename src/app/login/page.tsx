'use client'

export default function LoginPage() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-linear-to-b from-blue-200 to-green-100 relative overflow-hidden">
      <style>{`
        @keyframes waterflow {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        @keyframes splash {
          0% { opacity: 1; }
          100% { opacity: 0; }
        }
        .waterfall {
          animation: waterflow 2s linear infinite;
        }
        .splash {
          animation: splash 1s ease-out infinite;
        }
      `}</style>

      {/* Cascada animada */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-96">
        {/* Agua cayendo */}
        <div className="absolute inset-0 bg-linear-to-b from-blue-400 via-blue-300 to-blue-200 opacity-70 waterfall rounded-full blur-lg"></div>
        <div className="absolute inset-0 bg-linear-to-b from-blue-300 via-cyan-300 to-blue-100 opacity-50 waterfall rounded-full blur-md" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute inset-0 bg-linear-to-b from-cyan-200 via-blue-200 to-transparent opacity-40 waterfall rounded-full" style={{animationDelay: '1s'}}></div>
      </div>

      {/* Lago en la base */}
      <div className="absolute bottom-0 w-full h-32 bg-linear-to-b from-blue-400 to-blue-600 opacity-80">
        {/* Ondas en el agua */}
        <div className="absolute inset-0 opacity-30">
          <svg className="w-full h-full" viewBox="0 0 1000 100" preserveAspectRatio="none">
            <defs>
              <style>{`
                @keyframes wave {
                  0% { d: path("M0,50 Q250,30 500,50 T1000,50 L1000,100 L0,100 Z"); }
                  50% { d: path("M0,50 Q250,70 500,50 T1000,50 L1000,100 L0,100 Z"); }
                  100% { d: path("M0,50 Q250,30 500,50 T1000,50 L1000,100 L0,100 Z"); }
                }
                .wave-path {
                  animation: wave 4s ease-in-out infinite;
                  fill: rgba(59, 130, 246, 0.3);
                }
              `}</style>
            </defs>
            <path className="wave-path" d="M0,50 Q250,30 500,50 T1000,50 L1000,100 L0,100 Z"></path>
          </svg>
        </div>
      </div>

      {/* Contenido de texto */}
      <div className="relative z-10 text-center">
        <h1 className="text-4xl font-bold mb-4 text-blue-900 drop-shadow-lg">Página de Login</h1>
        <p className="text-3xl text-blue-600 font-semibold drop-shadow-lg animate-pulse">Hola Ivan eres un genio</p>
      </div>
    </div>
  );
}
