import ButtonOutline from "./ButtonOutline";

function ConfirmDelete({ resource, type = "", handleDelete, disabled, onCloseModal }) {
  return (
    <div className="w-[30rem]  z-20">
      <h3 className=" mb-4 font-semibold text-2xl dark:text-stone-300 text-zinc-700">
        {type === "" ? "Delete" : type} {resource}
      </h3>
      <p className=" w-auto mb-8 dark:text-stone-400 text-zinc-600">
        Are you sure you want to {type === "" ? "Delete" : type} this {resource} permanently? This
        action can&apos;t be undone.
      </p>
      <div className="flex items-center gap-2 justify-end">
        <ButtonOutline disabled={disabled} onClick={onCloseModal}>
          Cancel
        </ButtonOutline>
        <button
          onClick={() => {
            handleDelete();
            onCloseModal?.();
          }}
          disabled={disabled}
          className=" py-2 px-4 rounded-md bg-red-600 h-10 gap-1 font-medium text-zinc-100 flex items-center justify-center hover:bg-red-500 transition-colors">
          {type === "" ? "Delete" : type} {resource}
        </button>
      </div>
    </div>
  );
}

export default ConfirmDelete;
