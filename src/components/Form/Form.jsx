import React, { useState } from "react";
import { TextField } from "@mui/material";
import styles from "./Form.module.css";
import "../../App.css";

export default function Form() {
  return (
    <div className={styles.form}>
      <div className="content">
        <h1 className={styles.title}>Ваши данные</h1>
        <form action="#">
          <div className={styles.wrap}>
            <TextField
              className={styles.input}
              id="1"
              margin="normal"
              placeholder="Введите ваше Ф.И.О."
              label="Ваше ф.И.О."
              variant="outlined"
            />
            <TextField
              className={styles.input}
              id="1"
              margin="normal"
              placeholder="Ваше имя"
              label="Outlined"
              variant="outlined"
            />
            <TextField
              className={styles.input}
              id="2"
              margin="normal"
              placeholder="Placeholder"
              label="Outlined"
              variant="outlined"
            />
            <TextField
              className={styles.input}
              id="3"
              margin="normal"
              placeholder="Placeholder"
              label="Outlined"
              variant="outlined"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
