import React, { useState } from "react";

const Form: React.FC = () => {
    const [name, setName] = useState('');
    const onSubmit = (event: React.FormEvent) => {
        
    }

    return (
        <form>
            <div>
                <label>
                    Nome
                </label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full border rounded"
                />
            </div>
            <button
                type="submit"
                className="bg-stone-500 text-white p-2 rounded"
            >
                Enviar
            </button>
        </form>
    )
}