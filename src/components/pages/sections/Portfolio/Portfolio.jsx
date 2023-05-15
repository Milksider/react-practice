import './Portfolio.css'

function Portfolio(){
    return(
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
    )
}

export default Portfolio