import style from './Button.module.css';

function Button({typebtn, children}) {
    return (
        <button className={[style.btn, type].join(' ')}>
            {children}
        </button>
    )
}

export default Button