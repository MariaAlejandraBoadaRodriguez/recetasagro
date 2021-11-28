import React from 'react'
import Chat from '../../common/component/Chat';
import Footer from '../../common/component/Footer';
import Header from '../../common/component/Header';

const ChatView = () => {
  return (
    <div className="App">
      <div className="header">
        <Header/>
      </div>
      <div>
        <Chat/>
      </div>
        <Footer/>
    </div>
  )
}

export default ChatView
