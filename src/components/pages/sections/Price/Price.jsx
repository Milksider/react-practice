import './Price.css'

function Price(){
    return(
        <section className="price">
        <div className="main-container">
            <div className="circle-mid">
                        <img src="./images/Circle.svg" alt=""/>
                        <p>Прайс-лист</p>
            </div>
            <h1 className="title-mid"> </h1>
            <div className="price__content">
                <div className="price__list">
                    <div className="price__item">
                        <img src="./images/Circle.svg" alt="" className="price__item-img" />
                        <a href="#" className="price__item-link">
                            <div className="price__item-title">
                                <h3>Landing-page</h3>
                                <h3>от 8000 руб.</h3>
                            </div>
                            <p className="price__item-text">
                                Одностаничный сайт для презентации услуг/товаров/...
                            </p>
                        </a>
                    </div>
                    <div className="price__item">
                        <img src="./images/Circle.svg" alt="" className="price__item-img" />
                        <a href="#" className="price__item-link">
                            <div className="price__item-title">
                                <h3>Корпоративный сайт</h3>
                                <h3>от 20000 руб.</h3>
                            </div>
                            <p className="price__item-text">
                                Сайт для вашего бизнеса или компании
                            </p>
                        </a>
                    </div>
                    <div className="price__item">
                        <img src="./images/Circle.svg" alt="" className="price__item-img" />
                        <a href="#" className="price__item-link">
                            <div className="price__item-title">
                                <h3>Интернет магазин</h3>
                                <h3>от 30000 руб.</h3>
                            </div>
                            <p className="price__item-text">
                                Инструмент для ваших продаж в сети
                            </p>
                        </a>
                    </div>
                </div>

                <div className="price__list">
                    <div className="price__item">
                        <img src="./images/Circle.svg" alt="" className="price__item-img" />
                        <a href="#" className="price__item-link">
                            <div className="price__item-title">
                                <h3>Web-приложение</h3>
                                <h3>от 28000 руб.</h3>
                            </div>
                            <p className="price__item-text">
                                Приложение внутри браузера для лучшего комфорта
                            </p>
                        </a>
                    </div>
                    <div className="price__item">
                        <img src="./images/Circle.svg" alt="" className="price__item-img" />
                        <a href="#" className="price__item-link">
                            <div className="price__item-title">
                                <h3>Android/IOS Приложение</h3>
                                <h3>от 25000 руб.</h3>
                            </div>
                            <p className="price__item-text">
                                Приложение для смартфона любой ОС
                            </p>
                        </a>
                    </div>
                    <div className="price__item">
                        <img src="./images/Circle.svg" alt="" className="price__item-img" />
                        <a href="#" className="price__item-link">
                            <div className="price__item-title">
                                <h3>Дизайн</h3>
                                <h3>Индивудуально</h3>
                            </div>
                            <p className="price__item-text">
                                Создам дизайн для вашего сайт/приложения...
                            </p>
                        </a>
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
    )
}

export default Price