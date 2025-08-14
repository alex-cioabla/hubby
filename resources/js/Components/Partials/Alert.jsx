const Alert = ({ messages = [] }) => {
    if (!messages.length) {
        return null;
    }
    return (
        <div className='alert alert-danger mt-3' role="alert">
            {messages.map((message, index) => <span key={index}> {message} </span>)}
        </div>
    )
}

export default Alert;
