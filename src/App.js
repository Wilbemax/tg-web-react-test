import { useEffect } from "react";
import "./App.css";
import { useTelegram } from "./hooks/useTelegram";
import Header from "./components/Header/Header";
import Button from "./components/Button/Button";

function App() {
  const { onToggleButton, tg } = useTelegram();

  useEffect(() => {
    tg.ready();
  }, [tg, onToggleButton]);

  return (
    <div className="App">
      <Header />
      <Button className="button" onClick={onToggleButton}>Отправить</Button>
    </div>
  );
}

export default App;
