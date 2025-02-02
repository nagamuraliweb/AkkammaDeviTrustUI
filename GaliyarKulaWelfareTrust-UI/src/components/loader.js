import Spinner from 'react-bootstrap/Spinner';

const Loader = () => {

    return (
        <>
            <div className='loader'>
                <div className='loader-content'>
                    <Spinner animation="border" variant="light" /> <span>Loading...</span>
                </div>
            </div>
        </>
    )
}

export default Loader;

