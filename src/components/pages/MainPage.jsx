import React from "react"
import { useAuth } from "../useAuth"
import { openMenu, closeMenu } from "../../script"

function MainPage(){

    const {setIsLoggedIn} = useAuth()

    function logOut(){
        return setIsLoggedIn(false)
    }
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
                    <button class="burger-menu__logout" onClick={logOut}>
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
                <div class="shroud">
    
                </div>
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
        </>
    )
}

export default MainPage