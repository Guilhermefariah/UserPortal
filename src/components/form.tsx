import React, { useState } from "react";

const Form: React.FC = () => {
    const [name, setName] = useState('');

    return (
        <form>
            <div>
                <label>
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full border rounded"
                />
            </div>
            <button>

            </button>
        </form>
    )
}