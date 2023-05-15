import './Forms.css'
import React from 'react'
import {useForm} from 'react-hook-form'
import {Link, useNavigate} from 'react-router-dom'
import Swal from 'sweetalert2'
import Button from '../FormElements/Button/Button.jsx'
import Form from '../FormElements/Form'
import EmailInput from '../Inputs/EmailInput'
import PassInput from '../Inputs/PassInput'
import { useAuth } from '../useAuth'


function LoginForm(props) {
    
    const navigate = useNavigate()
    const {signin} = useAuth()


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
    })

    const onSubmit = async (data) => {
        const formData = new FormData()
        formData.append('email', data.email)
        formData.append('password', data.pass)
        const jsonData = JSON.stringify(Object.fromEntries(formData));

        const res = await fetch("https://liq.purpleplane-it.com/api/auth/login", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: jsonData
        }).then(res => res.json())

        if(res.statusCode){
            console.log(res)
            Swal.fire('Error', res.message, 'error', 'ok')
        }else {
            console.log(res.accessToken)
            console.log(res.refreshToken) 
            localStorage.setItem('accessToken', res.accessToken)
            localStorage.setItem('refreshToken', res.refreshToken)
            signin(() => navigate('/main', {replace: true}))
        }
        reset();
    }

    return(
        <div className="form-wrapper">
            <h2 className="form-wrapper__title">
              Sign in
            </h2>
            <p className="form-wrapper__text">
              If you don’t have an account register
              You can   <Link className="form-wrapper__link" to="/register">Register here !</Link>
            </p>

            <Form onSubmit={handleSubmit(onSubmit)} 
                  action="#" className="form" >

                <EmailInput register={register} errors={errors}/>
                
                <PassInput register={register} errors={errors}/>

                <Button disabled={!isValid}>Login</Button>
            </Form>

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

export default LoginForm