import React, { createContext, useState } from 'react'

export const ChatContext = createContext();

const ChatProvider = ({children}) => {
  const [ mensajes, setMensajes ] = useState([])
  const [opciones, setOpciones] = useState([])


  const chatContext =  {
    mensajes,
    setMensajes,
    opciones,
    setOpciones
  }
  return (
    <ChatContext.Provider value={chatContext}>
      {children}
    </ChatContext.Provider>
  )
}

export default ChatProvider
