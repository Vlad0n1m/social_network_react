import s from './Contact.module.css';
import {NavLink} from 'react-router-dom';

const Contact = (props) => {
    let link = `/dialogs/${props.name}`
    return (
        <NavLink className={s.contact} to={`/dialogs/${props.name}`}>
            <img src={props.image_url} alt="" className={s.logo} />
            <h1 className={s.name}>{props.name}</h1>
        </NavLink>

    )
}

export default Contact;