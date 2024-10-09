import { useState } from "react";
import ButtonPrimary from "../../ui/ButtonPrimary";
import useLogin from "./useLogin";
import SpinnerMini from "../../ui/SpinnerMini";

function LoginForm() {
  const [email, setEmail] = useState("vishalbhatipersonal@gmail.com");
  const [password, setPassword] = useState("pass1234");

  const { isLoging, login } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;

    login(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      }
    );
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className=" border dark:border-stone-700 dark:bg-stone-800 border-zinc-200 w-full max-h-96 bg-zinc-50 rounded-md px-8 py-12  shadow-[0_35px_60px_-15px_rgba(0,0,0,0.02)]">
        <div className="flex flex-col gap-1 font-semibold">
          <label
            className=" font-semibold text-sm dark:text-stone-300 text-zinc-500"
            htmlFor="name">
            Enter Email
          </label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="px-4 py-2 border text-[17px] border-zinc-200 min-h-6 rounded-md"
            disabled={isLoging}
            required
            autoComplete="username"
          />
        </div>

        <div className="flex flex-col gap-1 font-semibold mt-6">
          <label
            className=" font-semibold text-sm dark:text-stone-300 text-zinc-500"
            htmlFor="name">
            Enter Password
          </label>
          <input
            type="password"
            placeholder="●●●●●●●●"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="px-4 py-2 border text-[17px] border-zinc-200 min-h-6 rounded-md"
            disabled={isLoging}
            required
            autoComplete="password"
          />
        </div>

        <ButtonPrimary moreClasses="w-full mt-8">
          {isLoging ? <SpinnerMini /> : "Login"}
        </ButtonPrimary>
      </form>
    </>
  );
}

export default LoginForm;
