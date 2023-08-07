import './App.css';

const tg = window.Telegram.WebApp

function App() {

function close() {
  tg.close();
}
  return (
    <div className="App">
      <header>
        <p>название магазина</p>
        <button onClick={close}>Закрыть машазин</button>
      </header>
    </div>
  );
}

export default App;
