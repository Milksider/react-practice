import '../styles/style.css';
import {useForm} from 'react-hook-form';

function RegisterForm() {

    const {
        register,
        formState: {
            errors,
            isValid
        },
        handleSubmit,
        reset,
        getValues
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
              Sign up
            </h2>
            <p className="form-wrapper__text">
              If you already have an account register
              You can   <a className="form-wrapper__link">Login here !</a>
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

                <div className='error'>{errors?.fname && <p>{errors?.fname?.message || 'Error'}</p>}</div>
                <label htmlFor="#" className="form__label">
                    Name
                    <input {...register('fname', {
                        required: 'Connot be empty',
                    })}
                        className="form__input" type="text" name="fname" id="" placeholder='Enter your name'/>
                </label>

                <div className='error'>{errors?.lname && <p>{errors?.lname?.message || 'Error'}</p>}</div>
                <label htmlFor="#" className="form__label">
                    Last name
                    <input {...register('lname', {
                        required: 'Connot be empty',
                    })}
                    className="form__input" type="text" name="lname" id="" placeholder='Enter your last name'/>
                </label>

                <div className='error'>{errors?.patronymic && <p>{errors?.patronymic?.message || 'Error'}</p>}</div>
                <label htmlFor="#" className="form__label">
                    Patronymic
                    <input {...register('patronymic', {
                        required: 'Connot be empty',
                    })}
                    className="form__input" type="text" name="patronymic" id="" placeholder='Enter your patronymic'/>
                </label>

                <div className='error'>{errors?.phone && <p>{errors?.phone?.message || 'Error'}</p>}</div>
                <label htmlFor="#" className="form__label">
                    Phone number
                    <input {...register('phone', {
                        required: 'Connot be empty',
                        pattern: {
                            value: /^[7-8]/,
                            message: 'Phone number must start with 7 or 8'
                        },
                        minLength: {
                            value: 11,
                            message: 'Phone number too short'
                        },
                        maxLength: {
                            value: 11,
                            message: 'Phone number too long'
                        }
                    })}
                    className="form__input" type="number" name="phone" id="" placeholder='Enter your phone number'/>
                </label>

                <div className='error'>{errors?.passs && <p>{errors?.passs?.message || 'Error'}</p>}</div>
                <label htmlFor="#" className="form__label">
                    Password
                    <input {...register('passs', {
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
                    className="form__input form__input-pass" type="password" name="passs" id="passs" placeholder='Enter your Password'/>
                </label>

                <div className='error'>{errors?.cpass && <p>Must equals to password</p>}</div>
                <label htmlFor="#" className="form__label">
                    Confirm Password
                    <input {...register('cpass', {
                        required: true,
                        validate: 
                            value => value === getValues('passs')
                        
                    })} 
                    className="form__input form__input-pass" type="password" name="cpass" id="" placeholder='Confirm your Password'/>
                </label>
                <button disabled={!isValid} className="form__btn" type="submit">Register</button>
            </form>
      </div>
    )
        
}

export default RegisterForm;