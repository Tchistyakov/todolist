import style from './Button.css';

function Button({type, children}) {
    return (
        <button className={`btn ${type}`}>
            {children}
        </button>
    )
}

export default Button