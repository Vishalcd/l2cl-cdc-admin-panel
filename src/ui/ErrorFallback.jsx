import ButtonPrimary from "./ButtonPrimary";

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div className=" grid  grid-cols-[40rem] place-content-center w-dvw h-dvh bg-zinc-100">
      <div className="bg-zinc-50 rounded-md border flex items-center flex-col border-zinc-200 py-10 px-6">
        <h1 className="  text-3xl mb-4 font-semibold">Something went wrong ☹️</h1>
        <p className=" text-zinc-600  mb-6">{error.message}</p>
        <ButtonPrimary onClick={resetErrorBoundary}>Try Again</ButtonPrimary>
      </div>
    </div>
  );
}

export default ErrorFallback;
