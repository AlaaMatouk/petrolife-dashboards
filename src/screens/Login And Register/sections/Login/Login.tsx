import React, { useState } from "react";
import PasswordInput from "../../../../components/shared/Inputs/PasswordInput";
import EmailInput from "../../../../components/shared/Inputs/EmailInput";
// import { signInUser, signInWithGoogle } from "../firebase/auth";
import { useNavigate } from "react-router-dom";

interface LoginProps {
  onSwitch: () => void;
}

export default function Login({ onSwitch }: LoginProps) {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  //   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //     e.preventDefault();
  //     try {
  //       const result = await signInUser(form.email, form.password);
  //       console.log("Login successful ✅", result.user);
  //       navigate("/");
  //     } catch (error: any) {
  //       console.error("Login error ❌:", error.message);
  //     }
  //   };

  //   const handleGoogleLogin = async () => {
  //     try {
  //       const result = await signInWithGoogle();
  //       console.log("Google Login ✅", result.user);
  //       navigate("/");
  //     } catch (error: any) {
  //       console.error("Google login failed ❌", error.message);
  //     }
  //   };

  return (
    <div>
      <form
        // onSubmit={handleSubmit}
        className="flex gap-3 flex-col justify-center text-center "
        action="submit"
      >
        <h1 className="font-bold text-color-mode-text-icons-t-primary-gray ">
          Login
        </h1>
        <EmailInput onChange={handleChange} value={form.email} />
        <PasswordInput onChange={handleChange} value={form.password} />
        <button
          type="button"
          //   onClick={handleGoogleLogin}
          className="btn bg-white"
        >
          <svg
            aria-label="Google logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
              <path
                fill="#34a853"
                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
              ></path>
              <path
                fill="#4285f4"
                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
              ></path>
              <path
                fill="#fbbc02"
                d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
              ></path>
              <path
                fill="#ea4335"
                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              ></path>
            </g>
          </svg>
          Login with Google
        </button>

        <button
          type="submit"
          className="btn btn-wide rounded-full bg-color-mode-surface-primary-blue text-basewhite pl-4 pr-4 py-2"
        >
          Login
        </button>
      </form>
    </div>
  );
}
