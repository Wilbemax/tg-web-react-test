import { useEffect } from "react";
import "./App.css";
import { useTelegram } from "./hooks/useTelegram";
import './App.css'
import Header from "./components/Header/Header";
// import Button from "./components/Button/Button";
import { Route, Routes } from "react-router-dom";
import ProduktList from "./components/ProduktList/ProduktList";
import Form from "./components/Form/Form";

function App() {
  const { onToggleButton, tg } = useTelegram();

  useEffect(() => {
    tg.ready();
  }, [tg, onToggleButton]);

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route index element={<ProduktList />} />
        <Route path="/form" element={<Form />} />
      </Routes>
      <div className="content">
        lorem ipsum dolor sit amet, consectetur
      </div>
    </div>
  );
}

export default App;
