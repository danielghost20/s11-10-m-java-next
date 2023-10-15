import React from "react";
import Input from "./Form/Input";
import Image from "next/image";

const Login = () => {
  return (
    <main className="w-full flex items-center h-screen justify-center ">
      <div className=" max-w-4xl w-full m-auto">
        <form className="flex flex-col gap-7 items-center w-full">
          <h1 className="text-dark-orange font-semibold mb-10 text-5xl">
            Iniciar Seción
          </h1>
          <Input
            iconOrReactElement="email-icon.svg"
            className="rounded-2xl border-2 text-2xl flex items-center pl-14 gap-3 border-black max-w-[659px] h-[70px] w-full overflow-hidden"
            placeholder="Email"
            type="email"
            valueContainerName="2"
          />
          <Input
            iconOrReactElement="auth-icon.svg"
            className="rounded-2xl border-2 text-2xl flex items-center pl-14 gap-3 border-black max-w-[659px] h-[70px] w-full overflow-hidden"
            placeholder="Contraseña"
            type="password"
            valueContainerName="2"
          />
          <button
            className="bg-light-orange mt-7 w-60 h-[60px] text-2xl text-white rounded-xl shadow-md shadow-gray-400"
            type="submit"
          >
            Iniciar sesión
          </button>
        </form>
        <Image
          className="mt-10 m-auto w-12 h-w-12"
          src="/separator-login.svg"
          alt="separator"
          width={20}
          height={20}
        />
        <button className="flex gap-3 rounded-lg m-auto text-2xl w-[658px] h-[75px] items-center bg-[#F1F0EA] justify-center"><Image src='/google-icon.svg' alt="google-icon" width={24} height={24} />Iniciar sesión con Google</button>
        <div className="flex w-full gap-2 justify-center items-center mt-10 text-2xl">
            <span>¿No tienes cuenta?</span>
            <span className="text-light-orange">Registrate aqui</span>
        </div>
      </div>
    </main>
  );
};

export default Login;
