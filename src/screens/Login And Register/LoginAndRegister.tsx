import React, { useState } from "react";
import Login from "./sections/Login/Login";
import Register from "./sections/Register/Register";

export default function LoginAndRegister() {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="relative w-[90%] h-[70%] overflow-hidden bg-white rounded-3xl shadow-lg flex">
        <div
          className={`bg-color-mode-surface-primary-blue  absolute z-10 top-0 h-full w-1/2 flex flex-col justify-center items-center p-10 transition-all duration-700 ${
            isRegister ? "translate-x-full" : ""
          }`}
        >
          <h1 style={{}} className="text-3xl font-bold mb-2 text-basewhite">
            {isRegister ? "! مرحبـــــــًا" : "! مرحبـــــــًا بعودتك   "}
          </h1>
          <p className="mb-4 text-center text-sm text-basewhite">
            {isRegister ? "هل لديك حساب بالفعل؟" : "ليس لديك حساب؟"}
          </p>
          <button
            className="btn  btn-wide rounded-full bg-white pl-4 pr-4 py-2"
            onClick={() => setIsRegister(!isRegister)}
          >
            {isRegister ? "تسجيل الدخول" : "إنشاء حساب"}
          </button>
        </div>

        <div className="flex w-full h-full">
          <div className="w-1/2 h-full flex items-center justify-center">
            {isRegister && <Register onSwitch={() => setIsRegister(false)} />}
          </div>
          <div className="w-1/2 h-full flex items-center justify-center">
            {!isRegister && <Login onSwitch={() => setIsRegister(true)} />}
          </div>
        </div>
      </div>
    </div>
  );
}
