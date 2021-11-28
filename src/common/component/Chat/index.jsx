import React, { useContext, useEffect, useState } from 'react'
import BotMessage from './BotMessage'
import UserMessage from './UserMessage'
import styles from './Chat.module.css'
import { ChatContext } from '../../../context/ChatContext'

const Chat = () => {
  const { chatContainer } = styles
  const { messages, } = useContext(ChatContext)

  useEffect(() => {
    console.log('Esto es manasas');
    console.log(messages);
  }, [messages])


  return (
    <div className={chatContainer}>
      {messages?.map((_message, index) => {
        const { type, message } = _message
        const key = `${index}-${type}`
        return (
        type === 'BOT' ? 
        <BotMessage key={key}>
          {message}
        </BotMessage> : 
        <UserMessage key={key}>
          {message}
        </UserMessage>
        )})}
    </div>
  )
}

export default Chat
