import { useContext, useEffect } from 'react'
import { ChatContext } from '../context/ChatContext'

const useGetRecipes = () => {
  const { setOptions, setMessages, foodType, getRecipes } = useContext(ChatContext)

  useEffect(() => {
    // Gestionamos con current option
    if (getRecipes) {
      setMessages(currentMessages => currentMessages.concat(
        [
          {
            message: 'Buscando recetas',
            type: 'BOT'
          },
          {
            message: 'Muchas gracias',
            type: 'USER'
          }
        ]
      ))
      setTimeout(() => {
        setMessages(currentMessages => currentMessages.concat(
          [
            {
              message: 'Puedo ofrecerte: ',
              type: 'BOT'
            },
            {
              message: 'Receta 1: Pollo al horno con papas a la francesa',
              type: 'BOT'
            },
            {
              message: 'Receta 2: Papas hervidas con queso',
              type: 'BOT'
            },
            {
              message: 'Receta 3: Guiso de lentejas con pure de papa',
              type: 'BOT'
            },
          ]
        ))

        setOptions([      
          {
            message: 'Receta 1',
            type: 'breakfast',
            moreInfo: '', 
          },
          {
            message: 'Receta 2',
            type: 'lunch',
            moreInfo: '', 
          },
          {
            message: 'Receta 3',
            type: 'dinner',
            moreInfo: '', 
          },
        ])

      }, 1000)
    }
  }, [getRecipes])
}

export default useGetRecipes
