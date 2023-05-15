import './Label.css'

function Label(props){

    return (
        <label  className='form__label' {...props}>
            {props.children}
        </label>
    )
}

export default Label

