import { useState } from "react";
import toast from "react-hot-toast";
import SignupPresentation from "./SignupPresentation";
import { useDispatch } from "react-redux";
import { createAccount } from "../../Redux/Slices/AuthSlice";
import { useNavigate } from "react-router-dom";

const Signup = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [signUpState, setSignUpState] = useState({
		firstName: "",
		email: "",
		mobileNumber: "",
		password: "",
	});

	function handleUserInput(e) {
		const { name, value } = e.target;
		setSignUpState({
			...signUpState,
			[name]: value,
		});
	}

	async function handleFormSubmit(e) {
		e.preventDefault();
		if (
			!signUpState.firstName ||
			!signUpState.email ||
			!signUpState.mobileNumber ||
			!signUpState.password
		) {
			toast.error("Please fill all the fields");
			return;
		}
		if (signUpState.mobileNumber.length !== 10) {
			toast.error("Please enter a valid mobile number");
			return;
		}
		if (signUpState.password.length < 6) {
			toast.error("Password should be atleast 6 characters long");
			return;
		}
		if (
			!signUpState.email.includes("@") ||
			!signUpState.email.includes(".")
		) {
			toast.error("Please enter a valid email address");
			return;
		}
		if (!signUpState.firstName.length > 3) {
			toast.error("Please enter a valid name");
			return;
		}

		const apiResponse = await dispatch(createAccount(signUpState));
		if (apiResponse.payload.data.success) {
			navigate("/auth/login");
		}
	}

	return (
		<SignupPresentation
			handleUserInput={handleUserInput}
			handleFormSubmit={handleFormSubmit}
		/>
	);
};

export default Signup;
