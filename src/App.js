import { useEffect } from 'react';
import './App.css';
import { useTelegram } from './hooks/useTelegram';

function App() {
  const { onToggleButton, tg } = useTelegram();

  useEffect(() => {
    tg.ready();
  }, [tg, onToggleButton]);

  return (
    <div className="App">
      <button onClick={onToggleButton}>Отправить</button>
    </div>
  );
}

export default App;
