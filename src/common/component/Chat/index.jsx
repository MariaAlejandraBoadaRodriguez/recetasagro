import React, { useContext, useEffect, } from 'react'
import BotMessage from './BotMessage'
import UserMessage from './UserMessage'
import styles from './Chat.module.css'
import { ChatContext } from '../../../context/ChatContext'
import useElectionHandler from '../../../hooks/useElectionHandler'
import useGetRecipes from '../../../hooks/useGetRecipes'


const Chat = () => {
  const { chatContainer } = styles
  const { messages, foodType, currentElection } = useContext(ChatContext)

  useElectionHandler()
  useGetRecipes()


  return (
    <div className={chatContainer}>
      <h3>Food type</h3>
      {foodType}
      <h3>current election</h3>
      {JSON.stringify(currentElection)}

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
