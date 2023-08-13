const tg = window.Telegram.WebApp


export function useTelegram(){

    const onClose = () =>  {
        tg.close();
    }

    const onToggleButton = () => {
        if(tg.MainButton.isVisible){
            tg.MainButton.show()
        }else{
            tg.MainButton.hide()
        }
    }
console.log(tg)
    return{
        onClose,
        onToggleButton,
        tg,
        user: tg.inintDataUnsafe?.user
    }


}