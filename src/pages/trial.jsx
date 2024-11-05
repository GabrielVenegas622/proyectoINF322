import React from 'react'
import { useState } from 'react';

import carga from '../assets/logo_de_carga.jpeg'

import "../stylesheets/trial/index.scss"

function trial() {

    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    const handleSend = () => {
        if (message.trim() !== '') {
        setMessages([...messages, message]); // Agrega el mensaje al array de mensajes
        setMessage(''); // Vacía el campo de entrada
        }
    };

    const handleInputChange = (e) => {
        setMessage(e.target.value);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
          handleSend();
        }
    };

    return(
        <div className='trial-image'>
            <img src= {carga} alt="imagen de carga"/>
            <div className="chat-bar">
                {/* Área de mensajes */}
                <div className="messages">
                {messages.map((msg, index) => (
                    <div key={index} className="message">
                    {msg}
                    </div>
                ))}
                </div>
        
                {/* Barra de entrada de mensaje */}
                <div className="input-bar">
                <input
                    type="text"
                    placeholder="Escribe tu mensaje..."
                    value={message}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                />
                <button onClick={handleSend}>Enviar</button>
                </div>
            </div>
        </div>
        
    );
}

export default trial;