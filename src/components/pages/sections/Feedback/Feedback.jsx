import './Feedback.css'

function Feedback(){
    return(
        <section className="feedback">
        <div className="main-container">
            <div className="feedback__inner">
                <div className="fedback__picture">
                    <img className="feedback__picture-img" src="./images/me.jpg" alt="" />
                </div>
                <div className="feedback__content">
                    <div className="circle-left">
                        <img src="./images/Circle.svg" alt=""/>
                        <p>Контакты</p>
                    </div>
                    <h1 className="title-left">Свяжитесь со мной</h1>
                    <h3>Любым удобным для вас способом:</h3>
                    <div className="feedback__links">
                        <a href="#" className="feedback__link">
                            <img src="./images/Instagram-2.svg" alt="" />
                        </a>
                        <a href="#" className="feedback__link">
                            <img src="./images/Instagram-2.svg" alt="" />
                        </a>
                        <a href="#" className="feedback__link">
                            <img src="./images/Instagram-2.svg" alt="" />
                        </a>
                    </div>
                    <h3>Или оставьте ваши данные и я сама вам напишу:</h3>
                    <form action="#">
                        <div className="form__input-pair">
                            <div className="form__input-block">
                                <label className="feedback__form-label" htmlFor="">Ваше имя</label>
                                <input className="feedback__form-name" type="text" name="name" id="" placeholder="Иван" autoComplete="name"/>
                            </div>
                            <div className="form__input-block">
                                <label className="feedback__form-label" htmlFor="">Ваша почта</label>
                                <input className="feedback__form-mail" type="email" name="mail" id="" autoComplete="email"/>
                            </div>
                        </div>
                        <div className="form__input-block">
                            <label htmlFor="" className="feedback__form-label">Ваше сообщение</label>
                            <textarea className="feedback__form-text" name="textarea" id=""></textarea>
                        </div>
                        <button type="submit" className="feedback__form-btn">
                            Отправить сообщение
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Feedback