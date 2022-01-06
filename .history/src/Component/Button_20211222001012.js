function Button({color="", children}) {
    return (
        <button className={color}>
            {children}
        </button>
    )
}

export default Button