import Main from '../Main/Main'
import body from './body.css'

function Body() {
    return (
        <>
            <h1>ToDo List</h1>
            <div className={body.}>
                <Main />
            </div>
        </>
    );
}

export default Body;


