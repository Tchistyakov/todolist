import style from './Button.module.css';

function Button({typebtn, children, func=''}) {
    return (
        <button className={[style.btn, typebtn].join(' ')} onClick={}>
            {children}
        </button>
    )
}

export default Button