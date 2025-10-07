import React, { useState } from "react";
import UsernameInput from "../../../../components/shared/Inputs/UsernameInput";
import EmailInput from "../../../../components/shared/Inputs/EmailInput";
import PasswordInput from "../../../../components/shared/Inputs/PasswordInput";
import { signUpUser } from "../../../../services/auth";
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
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError(""); // Clear error when user types
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    
    try {
      const result = await signUpUser(form.username, form.email, form.password);
      console.log("User registered ✅:", result.user);
      // Switch to login after successful registration
      onSwitch();
      setForm({
        username: "",
        email: "",
        password: "",
      });
    } catch (error: any) {
      console.error("Registration error ❌:", error.message);
      setError(error.message || "فشل إنشاء الحساب. يرجى المحاولة مرة أخرى.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex gap-3 flex-col justify-center text-center "
      >
        <h1 className="font-bold text-[var(--form-header-title-color)] ">
          إنشاء حساب
        </h1>
        
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative text-right" role="alert">
            <span className="block sm:inline">{error}</span>
          </div>
        )}
        
        <UsernameInput onChange={handleChange} value={form.username} />
        <EmailInput onChange={handleChange} value={form.email} />
        <PasswordInput onChange={handleChange} value={form.password} />

        <button
          type="submit"
          disabled={loading}
          className="btn btn-wide rounded-full bg-color-mode-surface-primary-blue text-basewhite pl-4 pr-4 py-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "جاري إنشاء الحساب..." : "إنشاء حساب"}
        </button>
      </form>
    </div>
  );
}
