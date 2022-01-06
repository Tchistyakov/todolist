import style from './Button.css';

function Button({type, children}) {
    return (
        <button className={`{stylebtn ${type}`}>
            {children}
        </button>
    )
}

export default Button