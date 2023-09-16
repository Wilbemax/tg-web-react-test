import React from "react";
import styles from "./Form.module.css";
import "../../App.css";
import { TextField,styled } from "@mui/material";


const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: 'var(--tg-theme-text-color)',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#ff0000',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: ' var(--tg-theme-secondary-bg-color)',
    },
    '&:hover fieldset': {
      borderColor: 'var(--tg-theme-button-color)',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'var(--tg-theme-button-color)',
    },
  },
});

export default function Form() {
  return (
    <div className={styles.form}>
      <div className="content">
        <h1 className={styles.title}>Ваши данные</h1>
        <form action="#">
          <div className={styles.wrap}>
          <CssTextField label="Ваше ФИО" placeholder="Введите ваше ФИО" id="custom-css-outlined-input" />
            <div className={styles.input}>
              <input type="Name" placeholder="Введите ваше ФИО" />
            </div>
            <div className={styles.input}>
              <input type="tel" placeholder="Введите ваше номер телефона " />
            </div>
            <div className={styles.input}>
              <input type="text" placeholder="Введите адрксс доставки" />
            </div>
            <div className={styles.input}>
              <select name="" id="">
                <option value=""></option>
              </select>
            </div>
            <div className={styles.input}>
              <input type="email" placeholder="Введите ваше ФИО" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
