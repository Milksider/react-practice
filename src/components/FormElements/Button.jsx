
function Button(props){

    return (
        <button className="form__btn" type="submit" disabled={props.disabled}>
            {props.children}
        </button>
    )
}

export default Button;

