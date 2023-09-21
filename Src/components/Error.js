import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    return(
        <div>
            <h1>Oops!!!</h1>
            <p>Somthing Went Wrong</p>
            <p>{err.status}:{err.statusText}</p>
        </div>
    )
};
export default Error;