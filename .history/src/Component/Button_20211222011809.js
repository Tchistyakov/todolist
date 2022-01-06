import style from './Button.module.css';

function Button({type, children}) {
    return (
        // <button className={`${style.btn} ${type}`}>
        <button className={`${style.btn} ${type}`}>
            {children}
        </button>
    )
}

export default Button