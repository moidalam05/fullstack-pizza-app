import { useState } from "react";
import LoginPresentation from "./LoginPresentation";
import { useDispatch } from "react-redux";
import { login } from "../../Redux/Slices/AuthSlice";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Login = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [loginData, setLoginData] = useState({
		email: "",
		password: "",
	});

	function handleUserInput(e) {
		const { name, value } = e.target;
		setLoginData({
			...loginData,
			[name]: value,
		});
	}

	async function handleFormSubmit(e) {
		e.preventDefault();
		if (!loginData.email || !loginData.password) {
			toast.error("Please fill all the fields");
			return;
		}

		if (!loginData.email.includes("@") || !loginData.email.includes(".")) {
			toast.error("Please enter a valid email address");
			return;
		}

		if (loginData.password.length < 6) {
			toast.error("Password should be atleast 6 characters long");
			return;
		}

		const apiResponse = await dispatch(login(loginData));
		if (apiResponse.payload.data.success) {
			navigate("/");
		}
	}
	return (
		<LoginPresentation
			handleUserInput={handleUserInput}
			handleFormSubmit={handleFormSubmit}
		/>
	);
};

export default Login;
