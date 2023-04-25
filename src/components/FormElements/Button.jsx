
function Button(props){

    return (
        <button className="form__btn" type="submit">
            {props.children}
        </button>
    )
}

export default Button

