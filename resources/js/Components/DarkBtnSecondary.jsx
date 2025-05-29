import { Link } from "react-router-dom";

const DarkBtnSecondary = ({children, className= "", ...props}) => {

    //il valore cambia perchè questo componente viene ri renderizzato al cambio del tema
    const theme = document.documentElement.getAttribute('data-bs-theme');

    return (
        <Link {...props} className={`btn btn-secondary ${className}`} data-bs-theme={theme}>
            {children}
        </Link>
    );
}

export default DarkBtnSecondary;
