import './Expirience.css'

function Expirience(){
    return (
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
    )
}

export default Expirience