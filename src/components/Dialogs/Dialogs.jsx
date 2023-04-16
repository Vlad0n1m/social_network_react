import s from './Dialogs.module.css';
import Contact from './Contact/Contact';
import Message from './Message/Message';
const Dialogs = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.contacts}>
                <h1>Contacts</h1>
                <Contact image_url="https://wonder-day.com/wp-content/uploads/2020/10/wonder-day-among-us-png-49.png" name="qvifle" />
                <Contact image_url="https://wonder-day.com/wp-content/uploads/2020/10/wonder-day-among-us-png-48.png" name="artcevvv" />
                <Contact image_url="https://wonder-day.com/wp-content/uploads/2020/10/wonder-day-among-us-png-50.png" name="triki" />
                <Contact image_url="https://wonder-day.com/wp-content/uploads/2020/10/wonder-day-among-us-png-46.png" name="shish" />
            </div>
            <div className={s.chat}>
                <div className={s.messages}>
                    <Message />
                    <Message />
                </div>
                <form className={s.send_msg_form} action="">
                    <input type="text" name="message" id="message" className={s.message_input} />
                    <button className={s.btn}>Send</button>
                </form>
            </div>
        </div>
    )
}

export default Dialogs;