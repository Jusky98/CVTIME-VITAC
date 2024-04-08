import { useRouteError, Link } from "react-router-dom";

const ErrorPage = () =>{
    const error = useRouteError();
    console.log('Error presented: ', error);

    return (
        <div id='error-page'>
            <h1 className='text-2xl text-center'>404 Error</h1>
            <p className='text-center'> Lo siento, se ha presentado un error  </p>
            <p className='italic text-center'> { error.statusText || error.message } </p>
            <p>
                <Link to='/'> Volver al inicio </Link>
            </p>
        </div>
    );
}

export default ErrorPage;