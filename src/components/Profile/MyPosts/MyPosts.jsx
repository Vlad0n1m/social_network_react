import s from './MyPosts.module.css'

const MyPosts = (props) => {
    return (

        <div className={s.post}>
            <img className={s.logo} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM_5jcNRka3Xxb6qC0MzK2-8Rb3W7NXU2jRAFuSSA&s' alt="logo" />
            <div className={s.text_wrapper}>
                <h1 className={s.title}>{props.title}</h1>
                <p className={s.text}>{props.text}</p>
             
                <p className={s.date}>{props.date}</p>
            </div>
        </div>

    )
}
export default MyPosts;