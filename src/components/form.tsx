import React, { useState } from "react";

interface FormProps {
    onSubmit: (name: string) => void;
}

const Form: React.FC<FormProps> = ({ onSubmit }) => {
    const [name, setName] = useState('');
    const setSubmit = (event: React.FormEvent) => {
        
        event.preventDefault();
        onSubmit(name);
    }

    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            <form onSubmit={setSubmit} className="bg-white p-8 rounded shadow-md">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-black">
                        Nome
                    </label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 text-white p-2 rounded w-full"
                >
                    Enviar
                </button>
            </form>
        </div>
    )
}
export default Form