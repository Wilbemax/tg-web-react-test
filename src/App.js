import { useEffect } from 'react';
import './App.css';
import { useTelegram } from './hooks/useTelegram';
import Header from './components/header/Header';
import Button from './components/button/button';

function App() {
  const { onToggleButton, tg } = useTelegram();

  useEffect(() => {
    tg.ready();
  }, [tg, onToggleButton]);

  return (
    <div className="App">
      <Header/>
      <Button onClick={onToggleButton}>Отправить</Button>
    </div>
  );
}

export default App;
