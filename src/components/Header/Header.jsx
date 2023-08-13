import React from 'react'
import "./Header/Header.css"
import Button from '../button/button'
import { useTelegram } from '../../hooks/useTelegram'

export default function Header() {
const {user, onClose} = useTelegram()


  return (
    <div className={"header"}>
        <Button onClik={onClose}>Закрыть</Button>
        <span className={"userName"}>
        {user.user}
        </span>

    </div>
  )
}
