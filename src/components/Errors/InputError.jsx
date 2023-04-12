import {useForm} from 'react-hook-form';

function InputError(props){

    const {
        formState: {
            errors
        },
    } = useForm();

    return (
        <div className='error'><p>{props?.field}</p></div>
    )
}

export default InputError;