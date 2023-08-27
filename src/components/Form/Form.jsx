import React from "react";
import { TextField } from "@mui/material";
import styles from "./Form.module.css";
import "../../App.css";

export default function Form() {
  return (
    <div className={styles.form}>
      <div className="content">
        <h1>Ваши данные</h1>
        <form action="#">
          <div className={styles.fullName}>
            <TextField className={styles.textField}
              id="1"
              placeholder="Ваше имя"
              label="Ваше имя"
              variant="outlined"
            />
            <TextField
              id="1.1"
              placeholder="Ваше фамилия"
              label="Ваше фамилия"
              variant="outlined"
            />
          </div>
          <TextField
            id="1"
            placeholder="Ваше имя"
            label="Outlined"
            variant="outlined"
          />
          <TextField
            id="2"
            placeholder="Placeholder"
            label="Outlined"
            variant="outlined"
          />
          <TextField
            id="3"
            placeholder="Placeholder"
            label="Outlined"
            variant="outlined"
          />
        </form>
      </div>
    </div>
  );
}
