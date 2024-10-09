import Logo from "../../ui/Logo";
import LoginForm from "./LoginForm";

function LoginLayout() {
  return (
    <div className=" dark:bg-stone-900 bg-zinc-100 w-full h-dvh grid  grid-cols-[30rem] overflow-hidden rounded-md items-center justify-center place-items-center content-center">
      <Logo />
      <h3 className=" text-3xl font-semibold mt-2 mb-8 text-center dark:text-stone-400 text-zinc-600">
        Log in to your account
      </h3>
      <LoginForm />
    </div>
  );
}

export default LoginLayout;
