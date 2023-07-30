import React from "react";
import { NavLink, useRouteError } from "react-router-dom";

const ErrorPages = () => {
  console.log(useRouteError());
  const { statusText, status, error } = useRouteError();
  return (
    <div className="flex flex-col gap-5 items-center justify-center h-screen">
      <h1 className="text-9xl font-bold">{status || 404}</h1>
      <h2 className="text-4xl font-bold text-red-500">{statusText}</h2>
      <p className="text-4xl">{error?.message}</p>
      <NavLink to="/">
        <button className="btn-primary">Go to Home Page</button>
      </NavLink>
    </div>
  );
};

export default ErrorPages;
