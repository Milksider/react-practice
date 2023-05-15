import ErrorMessage from "../Errors/InputError"
import Label from "../FormElements/Label/Label"
import './Inputs.css'

function NameInputs({register, errors}){
    return(
        <>
                {errors?.firstName && <ErrorMessage field={errors.firstName?.message || 'Error'} />}
                <Label>
                    Name
                    <input {...register('firstName', {
                        required: 'Connot be empty',
                    })}
                        className="form__input" type="text" name="firstName"  placeholder='Enter your name'
                        autocomplete='given-name'/>
                </Label>

                {errors?.lastName && <ErrorMessage field={errors.lastName?.message || 'Error'} />}
                <Label>
                    Last name
                    <input {...register('lastName', {
                        required: 'Connot be empty',
                    })}
                    className="form__input" type="text" name="lastName"  placeholder='Enter your last name'
                    autocomplete='family-name'/>
                </Label>

                {errors?.patronymic && <ErrorMessage field={errors.patronymic?.message || 'Error'} />}
                <Label>
                    Patronymic
                    <input {...register('patronymic', {
                        required: 'Connot be empty',
                    })}
                    className="form__input" type="text" name="patronymic"  placeholder='Enter your patronymic'
                    autocomplete='additional-name'/>
                </Label>
        </>
    )
}

export default NameInputs;