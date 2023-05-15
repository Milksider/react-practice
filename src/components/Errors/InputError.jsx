import './Errors.css'

function InputError(props){

    return (
        <div className='error'><p>{props?.field}</p></div>
    )
}

export default InputError