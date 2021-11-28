import React, { createContext, useState, useEffect } from 'react'

export const ChatContext = createContext();

/*
setMessages(currentMessages => currentMessages.concat({
          message: 'que más', 
          type: 'USER'
        },
        {
          message: 'hola', 
          type: 'BOT'
        },
        {
          message: 'Soy pepebot', 
          type: 'USER'
        }
      ))
*/

const ChatProvider = ({children}) => {
  const [ opciones, setOpciones ] = useState([])
  const [ messages, setMessages ] = useState([])

  useEffect(() => {
    setMessages([
      {
        message: 'hola', 
        type: 'BOT'
      },
      {
        message: 'hola', 
        type: 'USER'
      },
      {
        message: 'Soy pepebot', 
        type: 'BOT'
      },
    ])
  }, [])



  const chatContext =  {
    messages,
    setMessages,
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
