import { phonePattern } from "../Regexp"
import ErrorMessage from "../Errors/InputError"
import Label from "../FormElements/Label"

function PhoneInput({register, errors}){
    return(
        <>
            {errors?.phone && <ErrorMessage field={errors.phone?.message || 'Error'} />}
            <Label htmlFor="#" className="form__label">
                Phone number
                <input {...register('phone', {
                    required: 'Connot be empty',
                    pattern: {
                        value: phonePattern,
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
        </>
    )
}

export default PhoneInput