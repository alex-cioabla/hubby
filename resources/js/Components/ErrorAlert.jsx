const ErrorAlert = ({ messages = [] }) => {
    if (!messages.length) {
        return null;
    }
    return (
        <div className='alert alert-danger mt-2' role="alert">{messages.map((message, index) => <p key={index}> {message} </p>)}</div>
    )
}

export default ErrorAlert;
