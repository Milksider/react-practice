import '../styles/style.css';
import {useForm} from 'react-hook-form';
import {Link} from 'react-router-dom';
import Swal from 'sweetalert2'
import ErrorMessage from '../Errors/InputError'
import Label from '../FormElements/Label'
import Button from '../FormElements/Button'
import Form from '../FormElements/Form'


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
    })


    const onSubmit = async (data) => {
        const formData = new FormData()
        formData.append('email', data.email)
        formData.append('password', data.passs)
        formData.append('phone', data.phone)
        formData.append('firstName', data.firstName)
        formData.append('lastName', data.lastName)
        formData.append('patronymic', data.patronymic)

        const jsonData = JSON.stringify(Object.fromEntries(formData));
        const res = await fetch("https://liq.purpleplane-it.com/api/auth/registration", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: jsonData
        }).then(res => res.json())

        if(res.statusCode){
            console.log(res)
            Swal.fire('Ошибка', res.message, 'error', 'ok')
        }else if (!res.statusCode){
            console.log(res.accessToken)
            console.log(res.refreshToken)
            localStorage.setItem('accessToken', res.accessToken)
            localStorage.setItem('refreshToken', res.refreshToken)
        }else{
            Swal.fire('Ошибка', 'error', 'ok')
        }
        reset()
    };


    return(
        <div className="form-wrapper">
            <h2 className="form-wrapper__title">
              Sign up
            </h2>
            <p className="form-wrapper__text">
              If you already have an account register
              You can   <Link className="form-wrapper__link" to="/login">Login here !</Link>
            </p>

            <Form onSubmit={handleSubmit(onSubmit)} 
            action="#" className="form">

                {errors?.email && <ErrorMessage field={errors.email?.message || 'Error'} />}
                <Label htmlFor="#" className="form__label">
                    Email
                    <input {...register('email', {
                        required: 'Connot be empty',
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Wrong email format'
                        }
                    })}
                    className="form__input form__input-email" type="email" name="email"  placeholder='Enter your email address'
                    autocomplete='email'/>
                </Label>

                {errors?.firstName && <ErrorMessage field={errors.firstName?.message || 'Error'} />}
                <Label htmlFor="#" className="form__label">
                    Name
                    <input {...register('firstName', {
                        required: 'Connot be empty',
                    })}
                        className="form__input" type="text" name="firstName"  placeholder='Enter your name'
                        autocomplete='given-name'/>
                </Label>

                {errors?.lastName && <ErrorMessage field={errors.lastName?.message || 'Error'} />}
                <Label htmlFor="#" className="form__label">
                    Last name
                    <input {...register('lastName', {
                        required: 'Connot be empty',
                    })}
                    className="form__input" type="text" name="lastName"  placeholder='Enter your last name'
                    autocomplete='family-name'/>
                </Label>

                {errors?.patronymic && <ErrorMessage field={errors.patronymic?.message || 'Error'} />}
                <Label htmlFor="#" className="form__label">
                    Patronymic
                    <input {...register('patronymic', {
                        required: 'Connot be empty',
                    })}
                    className="form__input" type="text" name="patronymic"  placeholder='Enter your patronymic'
                    autocomplete='additional-name'/>
                </Label>

                {errors?.phone && <ErrorMessage field={errors.phone?.message || 'Error'} />}
                <Label htmlFor="#" className="form__label">
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
                    className="form__input" type="tel" name="phone"  placeholder='Enter your phone number'
                    autocomplete='tel-national'/>
                </Label>

                {errors?.passs && <ErrorMessage field={errors.passs?.message || 'Error'} />}
                <Label htmlFor="#" className="form__label">
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
                </Label>

                {errors?.cpass && <ErrorMessage field={errors.cpass?.message || 'Passwords fields are different'} />}
                <Label htmlFor="#" className="form__label">
                    Confirm Password
                    <input {...register('cpass', {
                        required: true,
                        validate: 
                            value => value === getValues('passs')
                    })} 
                    className="form__input form__input-pass" type="password" name="cpass"  placeholder='Confirm your Password'/>
                </Label>
                <Button disabled={!isValid}>Register</Button>
            </Form>
      </div>
    )
        
}

export default RegisterForm;