import { passPattern } from "../Regexp"
import ErrorMessage from "../Errors/InputError"
import Label from "../FormElements/Label"

function PassInput({register, errors}){
    return(
        <>
            {errors?.pass && <ErrorMessage field={errors.pass?.message || 'Error'} />}
            <Label htmlFor="#" className="form__label">
                <input {...register('pass', {
                    required: 'Connot be empty',
                    minLength: {
                        value: 8,
                        message: 'Password must contain at least 8 characters'
                    },
                    pattern: {
                        value: passPattern,
                        message: 'Password must contain A-Z and a-z and 0-9'
                    }
                })} 
                className="form__input form__input-pass" type="password" name="pass"  placeholder='Enter your Password'
                autoComplete='current-password'/>
            </Label>
        </>
    )
}

export default PassInput