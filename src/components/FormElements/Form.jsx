function Form(props){

    return (
        <form {...props}>
            {props.children}
        </form>
    )
}

export default Form;
