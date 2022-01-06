import style from './Button.module.css';

function Button({typebtn, children, fun}) {
    return (
        <button className={[style.btn, typebtn].join(' ')}>
            {children}
        </button>
    )
}

export default Button