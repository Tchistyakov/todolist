import style from './Button..css';

function Button({type, children}) {
    return (
        <button className={style.btn}>
            {children}
        </button>
    )
}

export default Button