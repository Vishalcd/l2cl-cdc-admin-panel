import { IconHome } from "@tabler/icons-react";

import ButtonPrimary from "../ui/ButtonPrimary";

function PageNotFound() {
  return (
    <div className=" grid  grid-cols-[40rem] place-content-center w-dvw h-dvh bg-zinc-100">
      <div className="bg-zinc-50 rounded-md border flex items-center flex-col border-zinc-200 py-10 px-6">
        <h1 className="  text-3xl mb-4 font-semibold">
          <span className=" font-mono">404</span> Page Not Found ☹️
        </h1>
        <p className=" text-zinc-600  mb-6">Requested page not found.</p>
        <ButtonPrimary onClick={() => window.location.replace("/")}>
          <IconHome stroke={2} />
          Go to Home
        </ButtonPrimary>
      </div>
    </div>
  );
}

export default PageNotFound;
