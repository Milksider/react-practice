import '../styles/style.css';



function LoginForm() {
    return(
        <div className="form-wrapper">
            <h2 className="form-wrapper__title">
              Sign in
            </h2>
            <p className="form-wrapper__text">
              If you don’t have an account register
              You can   <a className="form-wrapper__link">Register here !</a>
            </p>

            <form action="#" className="form">

                <label htmlFor="#" className="form__label">
                    Email
                    <input className="form__input form__input-email" type="email" name="" id="" placeholder='Enter your email address'/>
                </label>
                <label htmlFor="#" className="form__label">
                    Password
                    <input className="form__input form__input-pass" type="password" name="" id="" placeholder='Enter your Password'/>
                    </label>
                <button className="form__btn" type="submit">Login</button>
            </form>
            <div className="alt-actions">
                <p className="alt-actions__text">
                    or continue with
                </p>
                <div className="alt-actions__content">
                    <a className="alt-actions__link" href="#">
                        <img className="alt-actions_img" src="./icons/facebook.svg" alt="" />
                    </a>
                    <a className="alt-actions__link" href="#">
                        <img className="alt-actions_img" src="./icons/apple.svg" alt="" />
                    </a>
                    <a className="alt-actions__link" href="#">
                        <img className="alt-actions_img" src="./icons/google.svg" alt="" />
                    </a>
                </div>
            </div>

      </div>
    )
        
}

export default LoginForm;