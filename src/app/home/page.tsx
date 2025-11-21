// src/app/page.tsx
import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-blue-50 p-6">
      <h1 className="text-4xl font-bold mb-4 text-center text-blue-900">
        Bienvenido a la Plataforma de Recursos Hídricos
      </h1>
      <p className="text-lg mb-6 text-center text-blue-800">
        Aprende teoría y práctica de hidrología aplicada a la agronomía de manera interactiva.
      </p>
      <div className="flex gap-4">
        <Link href="/login">
          <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
            Iniciar Sesión
          </button>
        </Link>
        <Link href="/registro">
          <button className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700">
            Registrarse
          </button>
        </Link>
      </div>
    </div>
  );
}
