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
      borderColor: " var(--tg-theme-button-color)",
      backgroundColor: " var(--tg-theme-secondary-bg-color)",
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
const CssSelect = styled(Select)(({ theme }) => ({
  // Set the background color of the select component to transparent
  borderColor: " var(--tg-theme-button-color)",
  backgroundColor: " var(--tg-theme-secondary-bg-color)",

  // Set the color of the select component to the primary text color
  color: "var(--tg-theme-text-color)",

  // Set the hover color of the select component to the secondary text color
  "&:hover": {
    borderColor: " var(--tg-theme-button-color)",
    backgroundColor: " var(--tg-theme-secondary-bg-color)",
  },

  // Set the focus color of the select component to the primary text color
  "&.Mui-focused": {
    borderColor: " var(--tg-theme-button-color)",
    backgroundColor: " var(--tg-theme-secondary-bg-color)",
  },

}));

const CssItem = styled(MenuItem)({
  
  "& label.Mui-focused": {
    color: "var(--tg-theme-text-color)",
  },

  "&. MuiSelect-select": {
    color: "var(--tg-theme-text-color)",
    "& MuiSelect-select": {
      borderColor: " var(--tg-theme-button-color)",
      backgroundColor: " var(--tg-theme-secondary-bg-color)",
    },
    "&:hover MuiSelect-select": {
      borderColor: "var(--tg-theme-button-color)",
      color: "var(--tg-theme-text-color)",
    },
    "&.Mui-focused MuiSelect-select": {
      borderColor: "var(--tg-theme-button-color)",
      color: "var(--tg-theme-text-color)",
    },
  },
})

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
              className={styles.input}
              id="custom-css-outlined-input"
            />
            <CssTextField
              label="Номер телефона"
              className={styles.input}
              placeholder="Введите ваш номер телефона"
              id="custom-css-outlined-input"
            />
            <CssTextField
              label="Ваш адрес"
              className={styles.input}
              placeholder="Введите ваш адресс доставки"
              id="custom-css-outlined-input"
            />
            <CssSelect
              label="Выберете способ доставки"
              className={styles.input}
              onChange={(event) => console.log(event)}
            >
              <CssItem value={"Почта России"}>Почта России</CssItem>
              <CssItem value={"СДЭК"}>СДЭК</CssItem>
              <CssItem className="MuiSelect-option" value={"BoxBerry"}>
                BoxBerry
              </CssItem>
            </CssSelect>
          </div>
        </form>
      </div>
    </div>
  );
}
