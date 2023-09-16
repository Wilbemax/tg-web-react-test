import React from "react";

import{GrClose}from 'react-icons/gr';
import styles from "./Header.module.css";

import { useTelegram } from "../../hooks/useTelegram";
import Button from "../Button/Button";

const Header = () => {
  const { user, onClose } = useTelegram();

  return (
    <div className={styles.header}>
      
      <div className={styles.shop_title}>Your Shop</div>
      <div className={styles.flex_box}>
        {user ? (
          
            
            <Button  className={styles.close} onClick={onClose} >
              <p className={styles.username}>{user?.username}</p>
              <GrClose className={styles.cross}/>{" "}
            </Button>
          
        ) : (
          <span className={styles.close}>
            <Button onClick={onClose}>
              Закрыть{" "}
            </Button>
          </span>
        )}
      </div>
    </div>
  );
};

export default Header;
