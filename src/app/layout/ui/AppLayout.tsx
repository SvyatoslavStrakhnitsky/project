import { Suspense } from "react";
import { Link, Outlet } from "react-router-dom";

export const AppLayout = () => {
  return (
    <>
      <header style={{ height: 70, backgroundColor: "red" }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </header>
      <div style={{ display: "flex" }}>
        <div
          style={{ width: 200, height: "100vh", backgroundColor: "green" }}
        ></div>
        <Suspense fallback="Loading...">
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};
