function Button({color="", props}) {
    return (
        <button className={color}>
            {children}
        </button>
    )
}

export default Button