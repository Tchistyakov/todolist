function Button({color="", func}) {
    return (
        <button className={color}>
            {children}
        </button>
    )
}

default