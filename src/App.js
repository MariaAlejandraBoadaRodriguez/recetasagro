import logo from './logo.svg';
import './App.css';
import Footer from './common/component/Footer/footer';
import Header from './common/component/Header/Header';
import Conversacion from './view/conversacion/conversacion';
import Bot from './view/bot/bot';

function App() {
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
  );
}

export default App;
