import messages from "../messages";

const ElectionFunctions = {
  test: () => {
    console.log('Test')
  },
  prueba: () => {
    console.log('prueba');
  },
  welcome: ({ setMessages, setFoodType, setOptions }) => {
    const date = new Date()
    const hour = date.getHours()
    console.log(hour);
    let foodType = 0

    if(3 <= hour && hour <= 10) {
      foodType = 1
      setFoodType('breakfast')
    }
    if(11 <= hour && hour <= 15) {
      foodType = 2
      setFoodType('lunch')
    }
    if((16 <= hour && hour <= 23) || (0 <= hour && hour <= 3)) {
      foodType = 3
      setFoodType('dinner')
    }

    setMessages(currentMessages => currentMessages.concat(
      messages.welcome[0],
      messages.welcome[foodType]
    ))
    setOptions([      
      {
        message: 'Si',
        type: 'showRecipes',
        moreInfo: '',
      },
      {
        message: 'No',
        type: 'showFoodTypeOption',
        moreInfo: ''
      },
    ])
  },

  showFoodTypeOption: ({setOptions, setMessages, setFoodType}) => {
    setMessages(currentMessages => currentMessages.concat(
      messages?.showFoodTypeOption
    ))
    setOptions([      
      {
        message: 'Desayuno',
        type: 'breakfast',
        moreInfo: '', 
        handler: () => {
          setFoodType('breakfast')
        }
      },
      {
        message: 'Almuerzo',
        type: 'lunch',
        moreInfo: '', 
        handler: () => {
          setFoodType('lunch')
        }
      },
      {
        message: 'Cena',
        type: 'dinner',
        moreInfo: '', 
        handler: () => {
          setFoodType('dinner')
        }
      },
    ])
  },



  showRecipes: ({setMessages, setOptions, setGetRecipes}) => {
    setMessages(currentMessages => currentMessages.concat(
      messages.showRecipes
    ))
    setOptions([])
    setGetRecipes(true)
  },



}

export default ElectionFunctions