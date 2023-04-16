import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img className={s.banner} src='https://www.ixbt.com/img/n1/news/2019/5/3/chrome-73-mode-sombre-android_large.jpg' />
            </div>
            <div className={s.info}>
                <img className={s.logo} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM_5jcNRka3Xxb6qC0MzK2-8Rb3W7NXU2jRAFuSSA&s' />
                <div classNameText="">
                    
                    <h1 className={s.h1_lox}>l0xa1 Py.</h1>

                    <p>SomeL: Ingo</p>
                    <p>SomeL: Ingo</p>
                    <p>SomeL: Ingo</p>
                    <p>SomeL: Ingo</p>
                </div>
            </div>

            <div className={s.posts}>
                <h1>My Posts</h1>
                <input type="text" />
                <button className={s.btn}>Send</button>
            </div>
            <div className={s.all_posts}>
                <MyPosts title='First Post' text="It is my first post made by props" date="02.05.2007"/>
                <MyPosts title='2nd Post' text="I think it is enough" date="02.05.2007"/>
            </div>
        </div>

        
    )
}

export default Profile;