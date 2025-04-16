import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const RequireAuth = () => {
	const { isLoggedIn } = useSelector((state) => state.auth);
	return isLoggedIn ? <Outlet /> : <Navigate to="/auth/login" />;
};

export default RequireAuth;
