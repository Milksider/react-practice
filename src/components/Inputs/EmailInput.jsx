import {mailPattern} from '../Regexp'
import ErrorMessage from "../Errors/InputError"
import Label from "../FormElements/Label/Label"
import './Inputs.css'


function EmailInput({register, errors}){
    return (
        <>
         {errors?.email && <ErrorMessage field={errors.email?.message || 'Error'} />}
         <Label>
            Email
            <input {...register('email', {
                required: 'Connot be empty',
                pattern: {
                    value: mailPattern,
                    message: 'Wrong email format'
                }
            })}
            className="form__input form__input-email" type="email" name="email"  placeholder='Enter your email address'
            autoComplete='email'/>
         </Label>
        </>
    )
}

export default EmailInput