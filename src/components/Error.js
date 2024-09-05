import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>OOPS...! Something Went Wrong</h1>
      <h2>Please Try Again</h2>
      {/* <h4>{err.error.message}</h4>
      <h4>
        {err.status}: {err.statusText}
      </h4> */}
    </div>
  );
};

export default Error;
