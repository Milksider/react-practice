import '../styles/style.css'
import {useForm} from 'react-hook-form'
import {Link, useNavigate} from 'react-router-dom'
import Swal from 'sweetalert2'
import Button from '../FormElements/Button'
import Form from '../FormElements/Form'
import NameInputs from '../Inputs/NameInputs'
import EmailInput from '../Inputs/EmailInput'
import PhoneInput from '../Inputs/PhoneInput'
import CopyPassInput from '../Inputs/CopyPassInput'
import { useAuth } from '../useAuth'


function RegisterForm() {

    const navigate = useNavigate()
    const {signin} = useAuth()

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
            signin(() => navigate('/main', {replace: true}))
        }else{
            Swal.fire('Ошибка', 'error', 'ok')
        }
        reset()
    }


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

                <EmailInput register={register} errors={errors}/>

                <NameInputs register={register} errors={errors} />

                <PhoneInput register={register} errors={errors} />

                <CopyPassInput register={register} errors={errors} getValues={getValues} />

                <Button disabled={!isValid}>Register</Button>
            </Form>
      </div>
    )
        
}

export default RegisterForm