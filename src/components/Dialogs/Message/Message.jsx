import s from './Message.module.css';

const Message = () => {
    return (

        <div className={s.message}>
            <div className={s.user}>
                <img src="https://wonder-day.com/wp-content/uploads/2020/10/wonder-day-among-us-png-51.png" alt="" className={s.logo} />
                <p className='name'>qvifle</p>
            </div>
            <div className={s.text}>
                <p>Lorem ipsum dolor sit amtis eveniet neque earum blanditiis officia. Itaque dolor necessitatibus excepturi non dolorum veniam commodi enim. Magnam, molestias maxime. Aperiam reiciendis itaque est, magni placeat commodi nemo nesciunt alias officia doloribus numquam laborum sequi amet velit hic odio quis fuga error architecto voluptas maiores distinctio? Excepturi sed perspiciatis eligendi, unde facilis repellendus ullam magni explicabo! Iure nam, tempore cum illo, quaerat tenetur et error provident similique deserunt consequatur commodi in dicta? Quia eaque ratione blanditiis vero! Possimus vitae nisi delectus magni.</p>
            </div>
        </div>

    )
}

export default Message;