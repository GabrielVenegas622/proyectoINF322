import React from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';

import carga from '../assets/logo_de_carga.jpeg'

import "../stylesheets/trial/index.scss"

const trial = ({num}) => {
    // Usamos useParams para obtener el parámetro de la ruta
    const { imageId } = useParams();
    num = imageId
    // Imprimir el imageId en la consola
    console.log('imageId:', imageId);
    const names = {
        1: "IATU",
        2: "DialogApp",
        3: "Canaria",
        4: "GeoTMM",
        5: "QAGuarIAn",
        6: "MineGuard"
    }

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
        <div className='encabezado'>
            <h1>{names[num]}</h1>
            <div className='horizontal-container'>
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
            
                    {/* Barra de entrada de mensaje */}Contacta con nosotros!
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
        </div>
    );
};

export default trial;