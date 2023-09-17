import React, { useEffect, useState } from "react";
import styles from "./Form.module.css";
import "../../App.css";
import { TextField, styled, MenuItem } from "@mui/material";
import { useTelegram } from "../../hooks/useTelegram";


const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "var(--tg-theme-text-color)",
  },

  "& .MuiOutlinedInput-root": {
    color: "var(--tg-theme-text-color)",
    "& fieldset": {
      borderColor: " var(--tg-theme-button-color)",

      color: "var(--tg-theme-text-color)",
    },
    "&:hover fieldset": {
      borderColor: "var(--tg-theme-button-color)",
      color: "var(--tg-theme-text-color)",
      placeholder: "var(--tg-theme-text-color)",
    },
    "&.Mui-focused fieldset": {
      borderColor: "var(--tg-theme-button-color)",
      color: "var(--tg-theme-text-color)",
      placeholder: "var(--tg-theme-text-color)",
    },
  },
});

const currencies = [
  {
    value: "Почта России",
    label: "Почта России",
  },
  {
    value: "СДЭК",
    label: "СДЭК",
  },
  {
    value: "BoxBerry",
    label: "BoxBerry ",
  },
];

export default function Form() {
  const [ sity, setSity] = useState('')
  const [ FIO, setFIO] = useState('')
  const [ nomber, setNomber] = useState('')
  const [ dostavka, setDostavka] = useState('')
  const {tg} = useTelegram()

  useEffect( () => {
    tg.MainButton.setParams({
      text: "Отправить данные",
    })
  })

  useEffect(() =>{
    if(!sity || !nomber || !FIO){
      tg.MainButton.hied()
    } else {
      tg.MainButton.show()

    }
  }, [sity, nomber, FIO, tg])

  const onChangeSity = (e) => {
    setSity(e.target.value)
  }
  const onChangeFIO = (e) => {
    setFIO(e.target.value)
  }
  const onChangeNomber = (e) => {
    setNomber(e.target.value)
  }
  const onChangeDostavka = (e) => {
    setDostavka(e.target.value)
  }



  return (
    <div className={styles.form}>
      <div className="content">
        <h1 className={styles.title}>Ваши данные</h1>
        <form action="#">
          <div className={styles.wrap}>
            <CssTextField
              label="Ваше ФИО"
              margin="normal"
              value={FIO}
              onChange={onChangeFIO}
              placeholder="Введите ваше ФИО"
              className={styles.input}
              id="custom-css-outlined-input"
            />
            <CssTextField
              label="Номер телефона"
              margin="normal"
              value={nomber}
              onChange={onChangeNomber}
              className={styles.input}
              placeholder="Введите ваш номер телефона"
              id="custom-css-outlined-input"
            />
            <CssTextField
              label="Ваш адрес"
              margin="normal"
              value={sity}
              onChange={onChangeSity}
              className={styles.input}
              placeholder="Введите ваш адресс доставки"
              id="custom-css-outlined-input"
            />
            <CssTextField
              id="outlined-select-currency"
              select
              label="Способ доставки"
              margin="normal"
              value={dostavka}
              onChange={onChangeDostavka}
              helperText="*выберете самый удобный для вас способ доставки"
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </CssTextField>
          </div>
        </form>
      </div>
    </div>
  );
}
