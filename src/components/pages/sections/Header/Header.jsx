import './Header.css'
import { useAuth } from "../../../useAuth"
import { useNavigate } from "react-router-dom"
import { useState } from 'react'
import BurgerMenu from './BurgerMenu/BurgerMenu.jsx'

function Header(){

    const {signout} = useAuth()
    const navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        if(isOpen === false){
            setIsOpen(true)
            if(document.querySelector('.burger-menu')){
                document.querySelector('.burger-menu').classList.add('burger-menu--active')}
        }
        if(isOpen === true){
            setIsOpen(false)
            if(document.querySelector('.burger-menu')){
                document.querySelector('.burger-menu').classList.remove('burger-menu--active')}
        }
    }

    return(
        <section class="header">
        <BurgerMenu toggleMenu={toggleMenu} signout={signout} navigate={navigate}></BurgerMenu>
        <div class="header__burger">
            <button class="burger-btn" onClick={toggleMenu}>
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
    )
}

export default Header