import Alert from 'react-bootstrap/Alert';

const Notification = (props) => {

    return (
        <>
            <div className='notification'>
                <Alert key={props.variant} variant={props.variant}>
                    {props.content}
                </Alert>
            </div>
        </>
    )
}

export default Notification;

