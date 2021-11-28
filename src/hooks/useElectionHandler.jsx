import { useContext, useEffect } from 'react'
import { ChatContext } from '../context/ChatContext'
import ElectionFunctions from '../ElectionFunction'

const useElectionHandler = () => {
  const { currentElection, setCurrentElection, setMessages, setFoodType, setOptions, setGetRecipes } = useContext(ChatContext)

  useEffect(() => {
    if (ElectionFunctions[currentElection?.type]) {
      ElectionFunctions[currentElection.type]({
        setCurrentElection,
        setMessages,
        setFoodType,
        setOptions,
        setGetRecipes
      })
    }
  }, [currentElection])

  return ''
}

export default useElectionHandler
