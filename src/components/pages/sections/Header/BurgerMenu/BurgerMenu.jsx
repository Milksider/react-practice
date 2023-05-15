import './BurgerMenu.css'

function BurgerMenu(props){
    return(
        <div class="burger-menu">
        <div class="burger-menu__inner">
            <div class="burger-menu__content">
                <button class="close-btn burger-btn" onClick={props.toggleMenu}>
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
                <button class="burger-menu__logout" onClick={() => props.signout(() => props.navigate('/login', {replace: true}))}>
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
    )
}

export default BurgerMenu