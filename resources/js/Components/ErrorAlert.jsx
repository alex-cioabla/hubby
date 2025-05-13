const ErrorAlert = ({ messages = [] }) => {
    if (!messages.length) {
        return null;
    }
    return (
        <div className='alert alert-danger mt-2' role="alert">
            {messages.map((message, index) => <span key={index}> {message} </span>)}
        </div>
    )
}

export default ErrorAlert;
