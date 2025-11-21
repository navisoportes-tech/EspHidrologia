import React from "react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-900 via-blue-700 to-blue-400 flex flex-col justify-center items-center text-white px-6">
      <h1 className="text-5xl font-extrabold mb-6 text-center drop-shadow-lg">
        Plataforma de Recursos Hídricos Agronómicos
      </h1>

      <p className="max-w-2xl text-xl text-center mb-10 opacity-90">
        Aprende hidrología aplicada a la agronomía de forma interactiva:
        simulaciones, cálculos de riego, embalses, hidráulica y manejo del agua
        en proyectos reales.
      </p>

      <div className="flex gap-6">
        <Link href="/login">
          <button className="bg-white text-blue-700 font-semibold px-7 py-3 rounded-lg hover:bg-blue-100 transition shadow-lg">
            Iniciar Sesión
          </button>
        </Link>

        <Link href="/registro">
          <button className="bg-green-400 text-white font-semibold px-7 py-3 rounded-lg hover:bg-green-500 transition shadow-lg">
            Registrarse
          </button>
        </Link>
      </div>
    </div>
  );
}
