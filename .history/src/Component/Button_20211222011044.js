import style from './Button.module.css';

function Button({type='style.type', children}) {
    return (
        <button className={`${style.btn} ${type}`}>
            {children}
        </button>
    )
}

export default Button