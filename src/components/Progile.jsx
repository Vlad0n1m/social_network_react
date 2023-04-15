const Profile = () => {
    return (
        <div className="content">
            <div>
                <img className="banner" src='https://www.ixbt.com/img/n1/news/2019/5/3/chrome-73-mode-sombre-android_large.jpg' />
            </div>
            <div className='user-info'>
                <img className="logo" src='https://cakeshop.com.ua/images/6eRbfrsEzMM/h:1000/bG9jYWw/6Ly8vY2FrZXNob3AuY29tLnVhL3B1YmxpY19odG1sL3N0b3JhZ2UvYXBwL3B1YmxpYy9pbWcvcHJvZHVjdC85NDc0XzEuanBn' />
                <div classNameText="">
                    <h1>l0xa1 Py.</h1>
                    <p>SomeL: Ingo</p>
                    <p>SomeL: Ingo</p>
                    <p>SomeL: Ingo</p>
                    <p>SomeL: Ingo</p>
                </div>
            </div>

            <div className="posts-section">
                <h1>My Posts</h1>
                <input type="text" />
                <button className="green-btn">Send</button>
            </div>

        </div>
    )
}

export default Profile;