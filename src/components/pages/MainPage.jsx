import React from "react"
import About  from './sections/About/About.jsx'
import Expirience from './sections/Expirience/Expirience.jsx'
import Tools from './sections/Tools/Tools.jsx'
import Portfolio from './sections/Portfolio/Portfolio.jsx'
import Price from './sections/Price/Price.jsx'
import Feedback from './sections/Feedback/Feedback.jsx'
import Header from './sections/Header/Header.jsx'

function MainPage(){

    return(
        <>
    <Header></Header>
    <About></About>
    <Expirience></Expirience>
    <Tools></Tools>
    <Portfolio></Portfolio>
    <Price></Price>
    <Feedback></Feedback>
        </>
    )
}

export default MainPage