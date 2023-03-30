import '../styles/style.css';
import {useForm} from 'react-hook-form';


function LoginForm() {

    const {
        register,
        formState: {
            errors,
            isValid
        },
        handleSubmit,
        reset
    } = useForm({
        mode: 'onBlur'
    });

    const onSubmit = (data) => {
        alert(JSON.stringify(data));
        reset();
    };

    return(
        <div className="form-wrapper">
            <h2 className="form-wrapper__title">
              Sign in
            </h2>
            <p className="form-wrapper__text">
              If you don’t have an account register
              You can   <a className="form-wrapper__link">Register here !</a>
            </p>

            <form onSubmit={handleSubmit(onSubmit)} 
            action="#" className="form">

                <div className='error'>{errors?.email && <p>{errors?.email?.message || 'Error'}</p>}</div>
                <label htmlFor="#" className="form__label">
                    Email
                    <input {...register('email', {
                        required: 'Connot be empty',
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Wrong email format'
                        }
                    })}
                    className="form__input form__input-email" type="email" name="email" id="" placeholder='Enter your email address'/>
                </label>
                <div className='error'>{errors?.pass && <p>{errors?.pass?.message || 'Error'}</p>}</div>
                <label htmlFor="#" className="form__label">
                    Password
                    <input {...register('pass', {
                        required: 'Connot be empty',
                        minLength: {
                            value: 8,
                            message: 'Password must contain at least 8 characters'
                        },
                        pattern: {
                            value: /^.*(?=.*[a-z])(?=.*[A-Z])(?=.*\d).*$/,
                            message: 'Password must contain A-Z and a-z and 0-9'

                        }

                    })} 
                    className="form__input form__input-pass" type="password" name="pass" id="" placeholder='Enter your Password'/>
                    </label>
                <button disabled={!isValid} className="form__btn" type="submit">Login</button>
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