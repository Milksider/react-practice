import React from "react"
import { useAuth } from "../useAuth"
import { openMenu, closeMenu } from "../../script"
import { useNavigate } from "react-router-dom"

function MainPage(){

    const {signout} = useAuth()
    const navigate = useNavigate()

    return (
        <>
        <section class="header">
        <div class="burger-menu">
            <div class="burger-menu__inner">
                <div class="burger-menu__content">
                    <button class="close-btn burger-btn" onClick={closeMenu}>
                        <img src="./images/Close.svg" alt=""/>
                    </button>
                    <div class="burger-menu__list">
                        <a href="#" class="burger-menu__link">ПРО МЕНЯ</a>
                        <a href="#" class="burger-menu__link">МОЙ ОПЫТ</a>
                        <a href="#" class="burger-menu__link">МОИ НАВЫКИ</a>
                        <a href="#" class="burger-menu__link">МОИ РАБОТЫ</a>
                        <a href="#" class="burger-menu__link">ПРАЙС-ЛИСТ</a>
                        <a href="#" class="burger-menu__link">КОНТАКТЫ</a>
                    </div>
                    <button class="burger-menu__logout" onClick={() => signout(() => navigate('/login', {replace: true}))}>
                        <img src="./images/logout.png" alt=""/>
                    </button>
                    <div class="burger-menu__social">
                        <a href="#" class="burger-menu__social-link">
                            <img src="./images/Github-2.svg" alt=""/>
                        </a>
                        <a href="#" class="burger-menu__social-link">
                            <img src="./images/Instagram-2.svg" alt=""/>
                        </a>
                        <a href="#" class="burger-menu__social-link">
                            <img src="./images/Facebook-2.svg" alt=""/>
                        </a>
                    </div>
                </div>
                <div class="shroud"></div>
            </div>
        </div>
        <div class="header__burger">
            <button class="burger-btn" onClick={openMenu}>
                <img src="./images/Hamburger.svg" alt=""/>
            </button>
        </div>
       <div class="header__wrapper">
        <div class="header-social">
            <div class="header-social__links">
                <a href="#" class="header-social__link">
                    <img src="./images/Facebook.svg" alt=""/>
                </a>
                <a href="#" class="header-social__link">
                    <img src="./images/Instagram.svg" alt=""/>
                </a>
                <a href="#" class="header-social__link">
                    <img src="./images/Github.svg" alt=""/>
                </a>
            </div>
            <img class="line-img" src="./images/line-1.svg" alt=""/>
            <p class="header-social__text">
                Социальные сети
            </p>
        </div>
        <div class="header__inner">
            <div class="header__inner-text">
                <div class="circle-left">
                    <img src="./images/Circle.svg" alt=""/>
                    <p>Меня зовут Александра Смит</p>
                </div>
                <h2 class="header__title">
                     Я web-разработчик 
                     из города Москва
                </h2>
                <div class="header__buttons">
                    <a class="header__btn">
                        Портфолио
                    </a>
                    <a class="header__btn">
                        Про меня
                    </a>
                </div>
            </div>
        </div>
       </div>
    </section>
    <section className="about">
        <div className="main-container">
            <div className="about__inner">
            <div className="about-picture">
                <img className="about-picture__img" src="./images/me.jpg" alt="" />
            </div>
            <div className="about__content">
                <div className="circle-left">
                    <img src="./images/Circle.svg" alt=""/>
                    <p>Про меня</p>
                </div>
                <h1 className="title-left">Меня зовут Александра</h1>
                <p className="about__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                </p>
                <div className="about__skills">
                    <div className="about__skills-item">
                        <img src="./images/web-development.svg" alt="" className="about__skills-img" />
                        <div className="about__skills-content">
                            <h5 className="about__skills-title">
                            Web-разработка
                            </h5>
                            <p className="about__skills-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                    </div>
                    <div className="about__skills-item">
                        <img src="./images/web-development.svg" alt="" className="about__skills-img" />
                        <div className="about__skills-content">
                            <h5 className="about__skills-title">
                            Разработка приложений
                            </h5>
                            <p className="about__skills-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                    </div>
                    <div className="about__skills-item">
                        <img src="./images/web-development.svg" alt="" className="about__skills-img" />
                        <div className="about__skills-content">
                            <h5 className="about__skills-title">
                            UI/UX Design
                            </h5>
                            <p className="about__skills-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </section>
    <section className="expirience">
        <div className="main-container">
            <div className="expirience__inner">
                <div className="circle-mid">
                    <img src="./images/Circle.svg" alt=""/>
                    <p>Опыт</p>
                </div>
                <h1 className="title-mid">
                    Чем я буду полезна 
                </h1>
                <div className="expirience__utility">
                    <div className="utility-item">
                        <div className="utility-item__aside">
                            <img src="./images/aside.svg" alt="" className="aside-img" />
                        </div>
                        <div className="utility-item__content">
                            <h2 className="utility-item__title">
                                Образование
                            </h2>
                            <div className="utility-item__content-item">
                                <div className="content-item__title">
                                    <img src="./images/web-development.svg" alt="" className="about__skills-img" />
                                    <div className="pair">
                                        <h3>МГТУ им. Н. Э. Баумана</h3>
                                        <p>Диплом магистра | Москва (2014-2020)</p>
                                    </div>
                                </div>
                                <p className="content-item__text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo. 
                                </p>
                            </div>
                            <div className="utility-item__content-item">
                                <div className="content-item__title">
                                    <img src="./images/web-development.svg" alt="" className="about__skills-img" />
                                    <div className="pair">
                                        <h3>Udemy</h3>
                                        <p>Курсы по Web-разработке </p>
                                    </div>
                                </div>
                                <p className="content-item__text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo. 
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="utility-item">
                        <div className="utility-item__aside">
                            <img src="./images/aside.svg" alt="" className="aside-img" />
                        </div>
                        <div className="utility-item__content">
                            <h2 className="utility-item__title">
                                Опыт работы
                            </h2>
                            <div className="utility-item__content-item">
                                <div className="content-item__title">
                                    <img src="./images/web-development.svg" alt="" className="about__skills-img" />
                                    <div className="pair">
                                        <h3>Front-End Developer</h3>
                                        <p>EPAM | Москва (2018-2019)</p>
                                    </div>
                                </div>
                                <p className="content-item__text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo. 
                                </p>
                            </div>
                            <div className="utility-item__content-item">
                                <div className="content-item__title">
                                    <img src="./images/web-development.svg" alt="" className="about__skills-img" />
                                    <div className="pair">
                                        <h3>UI/UX Designer</h3>
                                        <p>Squad Team | Москва (2018)</p>
                                    </div>
                                </div>
                                <p className="content-item__text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo. 
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
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
    <section className="portfolio">
        <div className="main-container">
            <div className="circle-mid">
                    <img src="./images/Circle.svg" alt=""/>
                    <p>Портфолио</p>
            </div>
                <h1 className="title-mid">
                    Мои работы
                </h1>
            <div className="portfolio__list">
                <div className="portfolio__item">
                    <a href="#" className="portfolio__link">
                        <img src="./images/1.jpg" alt="" className="portfolio__img" />
                    </a>
                </div>
                <div className="portfolio__item">
                    <a href="#" className="portfolio__link">
                        <img src="./images/2.jpg" alt="" className="portfolio__img" />
                    </a>
                </div>
                <div className="portfolio__item">
                    <a href="#" className="portfolio__link">
                        <img src="./images/3.jpg" alt="" className="portfolio__img" />
                    </a>
                </div>
                <div className="portfolio__item two-columns">
                    <a href="#" className="portfolio__link">
                        <img src="./images/4.jpg" alt="" className="portfolio__img" />
                    </a>
                </div>
                <div className="portfolio__item">
                    <a href="#" className="portfolio__link">
                        <img src="./images/5.jpg" alt="" className="portfolio__img" />
                    </a>
                </div>
                <div className="portfolio__item two-rows">
                    <a href="#" className="portfolio__link">
                        <img src="./images/6.jpg" alt="" className="portfolio__img" />
                    </a>
                </div>
            </div>
        </div>
    </section>
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
        </>
    )
}

export default MainPage