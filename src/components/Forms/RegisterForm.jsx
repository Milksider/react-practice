import '../styles/style.css';


function RegisterForm() {
    return(
        <div className="form-wrapper hidden">
            <h2 className="form-wrapper__title">
              Sign up
            </h2>
            <p className="form-wrapper__text">
              If you already have an account register
              You can   <a className="form-wrapper__link">Login here !</a>
            </p>

            <form action="#" className="form">

                <label htmlFor="#" className="form__label">
                    Email
                    <input className="form__input form__input-email" type="email" name="" id="" placeholder='Enter your email address'/>
                </label>

                <label htmlFor="#" className="form__label">
                    Name
                    <input className="form__input" type="text" name="" id="" placeholder='Enter your name'/>
                </label>
                
                <label htmlFor="#" className="form__label">
                    Last name
                    <input className="form__input" type="text" name="" id="" placeholder='Enter your last name'/>
                </label>

                <label htmlFor="#" className="form__label">
                    Patronymic
                    <input className="form__input" type="text" name="" id="" placeholder='Enter your patronymic'/>
                </label>

                
                <label htmlFor="#" className="form__label">
                    Phone number
                    <input className="form__input" type="number" name="" id="" placeholder='Enter your phone number'/>
                </label>

                <label htmlFor="#" className="form__label">
                    Password
                    <input className="form__input form__input-pass" type="password" name="" id="" placeholder='Enter your Password'/>
                </label>
                <label htmlFor="#" className="form__label">
                    Confirm Password
                    <input className="form__input form__input-pass" type="password" name="" id="" placeholder='Confirm your Password'/>
                </label>
                <button className="form__btn" type="submit">Register</button>
            </form>
      </div>
    )
        
}

export default RegisterForm;