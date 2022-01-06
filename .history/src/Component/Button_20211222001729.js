function Button({type='btn ', children}) {
    return (
        <button className={'btn', type}>
            {children}
        </button>
    )
}

export default Button