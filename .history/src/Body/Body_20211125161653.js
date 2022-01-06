import Header from '../Header/Header'
import Main from '../Main/Main'
import Footer from '../Footer/Footer'

function Body() {
    return (
        <>
            <h1>ToDo List</h1>
            <div className="window">
                <Header />
                <Main />
                <Footer />
            </div>
        </>
    );
}

export default Body;


