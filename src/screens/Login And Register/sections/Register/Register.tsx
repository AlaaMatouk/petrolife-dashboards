import React, { useState } from "react";
import UsernameInput from "../../../../components/shared/Inputs/UsernameInput";
import EmailInput from "../../../../components/shared/Inputs/EmailInput";
import PasswordInput from "../../../../components/shared/Inputs/PasswordInput";
// import { signUpUser } from "../firebase/auth";
import { useNavigate } from "react-router-dom";

interface RegisterProps {
  onSwitch: () => void;
}

export default function Register({ onSwitch }: RegisterProps) {
  const [form, setForm] = useState({
    username: "",
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
  //       const result = await signUpUser(form.username, form.email, form.password);
  //       console.log("User registered ✅:", result.user);
  //       onSwitch();
  //       setForm({
  //         username: "",
  //         email: "",
  //         password: "",
  //       });
  //     } catch (error: any) {
  //       console.error("Registration error ❌:", error.message);
  //     }
  //   };

  return (
    <div>
      <form
        // onSubmit={handleSubmit}
        className="flex gap-3 flex-col justify-center text-center "
        action=""
      >
        <h1 style={{ color: "var(--gray)" }} className="font-bold ">
          Register
        </h1>
        <UsernameInput onChange={handleChange} value={form.username} />
        <EmailInput onChange={handleChange} value={form.email} />
        <PasswordInput onChange={handleChange} value={form.password} />

        <button
          type="submit"
          className="btn btn-wide rounded-full bg-color-mode-surface-primary-blue text-basewhite pl-4 pr-4 py-2"
        >
          Register
        </button>
      </form>
    </div>
  );
}
