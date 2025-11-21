'use client'

import { useState } from 'react'


export default function RegistroPage() {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        password: ''
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log('Datos del formulario:', formData)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Registro
                    </h2>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <input
                            name="nombre"
                            type="text"
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            placeholder="Nombre"
                            value={formData.nombre}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <input
                            name="email"
                            type="email"
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <input
                            name="password"
                            type="password"
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            placeholder="Contraseña"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
                    >
                        Registrarse
                    </button>
                </form>
            </div>
        </div>
    )
}