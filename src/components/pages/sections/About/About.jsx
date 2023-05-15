import './About.css'

function About(){
    return (
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
    )
}

export default About