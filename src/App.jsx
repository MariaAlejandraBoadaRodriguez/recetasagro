import React from 'react'
import ChatView from './view/ChatView'
import ChatProvider from './context/ChatContext';

function App() {
  return (
    <ChatProvider>
      <ChatView/>
    </ChatProvider>
  );
}

export default App;
