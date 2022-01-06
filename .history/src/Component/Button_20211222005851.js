import style from './Button.css';

function Button({type, children}) {
    return (
        <button className={`${style.btn} {style}${type}`}>
            {children}
        </button>
    )
}

export default Button