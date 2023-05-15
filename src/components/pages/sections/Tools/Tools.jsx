import './Tools.css'

function Tools(){
    return(
        <section className="tools">
        <div className="main-container">
                <div className="circle-mid">
                    <img src="./images/Circle.svg" alt=""/>
                    <p>Навыки</p>
                </div>
                <h1 className="title-mid">
                    Что я использую в работе
                </h1>
            <div className="tools__inner">
                <div className="tools__item">
                    <div className="tools__item-picture">
                        <img src="./images/html5.svg" alt="" className="tools__item-img" />
                    </div>
                    <h3 className="tools__item-title">
                        HTML5
                    </h3>
                    <p className="tools__item-text">
                        Именно он создает каркас вашего сайта или приложения, а пятая версия позволит мне создавать более SEO-оптимизированную структуру вашего продукта
                    </p>
                </div>
                <div className="tools__item">
                     <div className="tools__item-picture">
                        <img src="./images/css3.svg" alt="" className="tools__item-img" />
                    </div>
                    <h3 className="tools__item-title">
                        CSS5
                    </h3>
                    <p className="tools__item-text">
                        Этот язык стилей позволяет мне создавать абсолютно любой внешний вид вашего сайта или приложения. Все ограничивается только вашей фантазией!
                    </p>
                </div>
                <div className="tools__item">
                    <div className="tools__item-picture">
                        <img src="./images/JS.svg" alt="" className="tools__item-img" />
                    </div>
                    <h3 className="tools__item-title">
                        Java Script
                    </h3>
                    <p className="tools__item-text">
                        Этот язык программирования позволяет оживить все что угодно: слайдеры, окна, подсказки, вкладки, получение данных от сервера и многое другое
                    </p>
                </div>
                <div className="tools__item">
                    <div className="tools__item-picture">
                        <img src="./images/Jquery.svg" alt="" className="tools__item-img" />
                    </div>
                    <h3 className="tools__item-title">
                        Jquery
                    </h3>
                    <p className="tools__item-text">
                        Библиотека Jquery позволит ускорить разработку. Без необходимости интегрировать в проект мы её не будем, но навык работы с ней присутствует
                    </p>
                </div>
                <div className="tools__item">
                    <div className="tools__item-picture">
                        <img src="./images/React.svg" alt="" className="tools__item-img" />
                    </div>
                    <h3 className="tools__item-title">
                        React
                    </h3>
                    <p className="tools__item-text">
                        Эта библиотека позволяет создавать web-приложения. Мы можем создать максимально интерактивный продукт именно под ваши цели
                    </p>
                </div>
                <div className="tools__item">
                    <div className="tools__item-picture">
                        <img src="./images/Node.js.svg" alt="" className="tools__item-img" />
                    </div>
                    <h3 className="tools__item-title">
                        Node.js
                    </h3>
                    <p className="tools__item-text">
                        Эта платформа позволяет создавать бэкенд для вашего продукта - “мозги”, которые будут выполнять действия, которые пользователь не видит
                    </p>
                </div>
                <div className="tools__item">
                    <div className="tools__item-picture">
                        <img src="./images/Mongo.db.svg" alt="" className="tools__item-img" />
                    </div>
                    <h3 className="tools__item-title">
                        Mongo.db
                    </h3>
                    <p className="tools__item-text">
                        Это нереляционная база данных, которая будет хранить данные вашего сайта или приложения
                    </p>
                </div>
            </div>
            <div className="percents">
                <div className="percents__item">
                    <div className="percents__item-title">
                        <div className="circle-left">
                            <img src="./images/Circle.svg" alt=""/>
                            <p>Создание сайтов</p>
                        </div>
                        <span>100%</span>
                    </div>
                    <div className="percents__line">
                        <span className="grey-line">
                        <span style={{width: 'calc(100% - 0%)'}} className="yellow-line">
                        </span>
                        </span>
                    </div>
                </div>
                <div className="percents__item">
                    <div className="percents__item-title">
                        <div className="circle-left">
                            <img src="./images/Circle.svg" alt=""/>
                            <p>Создание приложений</p>
                        </div>
                        <span>85%</span>
                    </div>
                    <div className="percents__line">
                        <span className="grey-line">
                        <span style={{width: 'calc(100% - 15%)'}} className="yellow-line">
                        </span>
                        </span>
                    </div>
                </div>
                <div className="percents__item">
                    <div className="percents__item-title">
                        <div className="circle-left">
                            <img src="./images/Circle.svg" alt=""/>
                            <p>Работа с данными</p>
                        </div>
                        <span>90%</span>
                    </div>
                    <div className="percents__line">
                        <span className="grey-line">
                        <span style={{width: 'calc(100% - 10%)'}} className="yellow-line">
                        </span>
                        </span>
                    </div>
                </div>
                <div className="percents__item">
                    <div className="percents__item-title">
                        <div className="circle-left">
                            <img src="./images/Circle.svg" alt=""/>
                            <p>Креативность</p>
                        </div>
                        <span>75%</span>
                    </div>
                    <div className="percents__line">
                        <span className="grey-line">
                        <span style={{width: 'calc(100% - 25%)'}} className="yellow-line">
                        </span>
                        </span>
                    </div>
                </div>
                <div className="percents__item">
                    <div className="percents__item-title">
                        <div className="circle-left">
                            <img src="./images/Circle.svg" alt=""/>
                            <p>Создание дизайна</p>
                        </div>
                        <span>90%</span>
                    </div>
                    <div className="percents__line">
                        <span className="grey-line">
                        <span style={{width: 'calc(100% - 10%)'}} className="yellow-line">
                        </span>
                        </span>
                    </div>
                </div>
                <div className="percents__item">
                    <div className="percents__item-title">
                        <div className="circle-left">
                            <img src="./images/Circle.svg" alt=""/>
                            <p>Soft skills</p>
                        </div>
                        <span>95%</span>
                    </div>
                    <div className="percents__line">
                        <span className="grey-line">
                        <span style={{width: 'calc(100% - 5%)'}} className="yellow-line">
                        </span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Tools