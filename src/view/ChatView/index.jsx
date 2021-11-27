import React from 'react'
import Footer from '../../common/component/Footer';
import Header from '../../common/component/Header';
import Bot from '../../view/bot/bot';

const ChatView = () => {
  return (
    <div className="App">
      <div className="header">
        <Header/>
      </div>
      <div>
        <Bot/>
      </div>
      <div className="footer">
        <Footer/>
      </div>
    </div>
  )
}

export default ChatView
