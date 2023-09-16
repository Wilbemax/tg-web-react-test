import React from "react";
import styles from "./Form.module.css";
import "../../App.css";
import { TextField, styled, Select, MenuItem } from "@mui/material";

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "var(--tg-theme-text-color)",
  },

  "& .MuiOutlinedInput-root": {
    color: "var(--tg-theme-text-color)",
    "& fieldset": {
      borderColor: " var(--tg-theme-secondary-bg-color)",
    },
    "&:hover fieldset": {
      borderColor: "var(--tg-theme-button-color)",
      color: "var(--tg-theme-text-color)",
    },
    "&.Mui-focused fieldset": {
      borderColor: "var(--tg-theme-button-color)",
      color: "var(--tg-theme-text-color)",
    },
  },
});
const CssSelect = styled(Select)({

});

export default function Form() {
  return (
    <div className={styles.form}>
      <div className="content">
        <h1 className={styles.title}>Ваши данные</h1>
        <form action="#">
          <div className={styles.wrap}>
            <CssTextField
              label="Ваше ФИО"
              placeholder="Введите ваше ФИО"
              id="custom-css-outlined-input"
            />
            <CssTextField
              label="Номер телефона"
              placeholder="Введите ваш номер телефона"
              id="custom-css-outlined-input"
            />
            <CssTextField
              label="Ваш адрес"
              placeholder="Введите ваш адресс доставки"
              id="custom-css-outlined-input"
            />
            <CssSelect label="Выберете способ доставки">
              <MenuItem value={'Почта России'}>Почта России</MenuItem>
              <MenuItem value={'СДЭК'}>СДЭК</MenuItem>
              <MenuItem value={'BoxBerry'}>BoxBerry</MenuItem>
            </CssSelect>
          </div>
        </form>
      </div>
    </div>
  );
}
