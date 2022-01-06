import style from './Button.module.css';

function Button({type, children}) {
    return (
        <button className={`${style.btn} ${style}.${type}`}>
            {children}
        </button>
    )
}

export default Button