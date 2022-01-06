import Main from '../Main/Main'
import body from './body.module.css'

function Body() {
    return (
        <>
            <h1>ToDo List</h1>
            <div className={body.window}>
                <Main />
            </div>
        </>
    );
}

export default Body;


