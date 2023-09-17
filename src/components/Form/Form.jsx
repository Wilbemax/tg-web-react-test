import React from "react";
import styles from "./Form.module.css";
import "../../App.css";
import { TextField, styled, MenuItem } from "@mui/material";

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    // color: "#ff0000",
  },

  "& .MuiOutlinedInput-root": {
    color: "#ff0000",
    placeholder: "var(--tg-theme-text-color)",
    "& fieldset": {
      borderColor: " var(--tg-theme-button-color)",
      backgroundColor: " var(--tg-theme-secondary-bg-color)",
      placeholder: "var(--tg-theme-text-color)",
      color: " var(--tg-theme-text-color)",

    },
    "&:hover fieldset": {
      borderColor: "var(--tg-theme-button-color)",
      color: "#ff0000",
      placeholder: "var(--tg-theme-text-color)",

    },
    "&.Mui-focused fieldset": {
      borderColor: "var(--tg-theme-button-color)",
      color: "var(--tg-theme-text-color)",
      placeholder: "var(--tg-theme-text-color)",

    },
    "&.MuiMenuItem-root":{
      backgroundColor: "#ff0000"
    }
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
  return (
    <div className={styles.form}>
      <div className="content">
        <h1 className={styles.title}>Ваши данные</h1>
        <form action="#">
          <div className={styles.wrap}>
            <CssTextField
              label="Ваше ФИО"
              margin="normal"
              placeholder="Введите ваше ФИО"
              className={styles.input}
              id="custom-css-outlined-input"
            />
            <CssTextField
              label="Номер телефона"
              margin="normal"
              className={styles.input}
              placeholder="Введите ваш номер телефона"
              id="custom-css-outlined-input"
            />
            <CssTextField
              label="Ваш адрес"
              margin="normal"
              className={styles.input}
              placeholder="Введите ваш адресс доставки"
              id="custom-css-outlined-input"
            />
            <CssTextField
              id="outlined-select-currency"
              select
              label="Способ доставки"
              margin="normal"
              defaultValue=""
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
