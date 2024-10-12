import { Controller, useForm } from "react-hook-form";

import { IconBooks, IconNotes, IconPdf, IconPhotoUp } from "@tabler/icons-react";
import Multiselect from "multiselect-react-dropdown";

import ButtonPrimary from "../../ui/ButtonPrimary";
import ButtonOutline from "../../ui/ButtonOutline";
import FormRow from "../../ui/FormRow";
import Error from "../../ui/Error";
import useCreateNote from "./useCreateNote";
import useEditNote from "./useEditNote";

function CreateNoteForm({ onCloseModal, noteToEdit = {} }) {
  const allSubjects = [
    { name: "bca-1-sem" },
    { name: "bca-2-sem" },
    { name: "bca-3-sem" },
    { name: "bca-4-sem" },
    { name: "bca-5-sem" },
    { name: "bca-6-sem" },
  ];

  const { _id: editId, pdfCover, ...editValues } = noteToEdit;
  const isEditSession = Boolean(editId);

  const form = useForm({ defaultValues: isEditSession ? editValues : {} });
  const { register, handleSubmit, formState, control } = form;
  const { errors } = formState;

  const { editNote, isEditing } = useEditNote();
  const { createNote, isCreating } = useCreateNote();

  function onSubmit(data) {
    console.log(data);
    const formData = new FormData();
    formData.append("pdfTitle", data.pdfTitle);
    formData.append("pdfLink", data.pdfLink);
    formData.append("subject", data.subject);
    formData.append("pdfCover", data.pdfCover);
    isEditSession
      ? data.pdfCover.length === 0
        ? null
        : formData.append("pdfCover", data.pdfCover[0])
      : formData.append("pdfCover", data.pdfCover[0]);

    isEditSession
      ? editNote({ id: editId, data: formData }, { onSuccess: () => onCloseModal?.() })
      : createNote(formData, { onSuccess: () => onCloseModal?.() });
  }

  const isWorking = isCreating || isEditing;

  return (
    <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data" className=" w-[36rem]">
      <FormRow icon={<IconNotes stroke={2} />} label="Note Name" htmlFor="pdfTitle">
        <input
          id="pdfTitle"
          name="pdfTitle"
          type="text"
          className="px-3 py-2 rounded border border-zinc-200 w-80 file:cursor-pointer"
          placeholder="Enter Note Name"
          disabled={isWorking}
          {...register("pdfTitle", { required: "This field is required!" })}
        />
        {errors?.pdfTitle?.message && <Error>{errors.pdfTitle.message}</Error>}
      </FormRow>
      <FormRow icon={<IconPdf stroke={2} />} label=" PDF File Link" htmlFor="pdfLink">
        <input
          id="pdfLink"
          name="pdfLink"
          type="text"
          className="px-3 py-2 rounded border border-zinc-200 w-80 file:cursor-pointer"
          placeholder="Enter PDF File Link"
          disabled={isWorking}
          {...register("pdfLink", { required: "This field is required!" })}
        />
        {errors?.pdfLink?.message && <Error>{errors.pdfLink.message}</Error>}
      </FormRow>
      <FormRow icon={<IconBooks stroke={2} />} label="Select Subject" htmlFor="subject">
        <div className="w-80">
          <Controller
            control={control}
            name="subject"
            render={({ field: { onChange, value } }) => (
              <Multiselect
                className=" bg-zinc-50 rounded border border-zinc-200"
                options={allSubjects}
                displayValue="name"
                value={value ? value : []}
                onSelect={(e) => onChange(e)}
                disable={isCreating}
                onRemove={(e) => onChange(e)}
                placeholder="Select Subjects"
                {...register("subject", { required: "This field is required!" })}
              />
            )}
          />
          {errors?.subject?.message && <Error>{errors.subject.message}</Error>}
        </div>
      </FormRow>

      <FormRow icon={<IconPhotoUp stroke={2} />} label="Upload Image" htmlFor="pdfCover">
        <div className="flex items-center w-80 gap-3">
          {isEditSession && (
            <img
              src={`http://localhost:8000/img/pdf/${pdfCover}`}
              alt="notes photo"
              className=" w-20 object-cover aspect-video rounded-md"
            />
          )}
          <input
            type="file"
            id="pdfCover"
            name="pdfCover"
            className=" file:cursor-pointer bg-zinc-50 rounded border border-zinc-200 w-full file:bg-violet-200 file:text-violet-600 file:px-4 file:py-3 file:leading-none file:border-none file:rounded-md file:mr-4 font-medium px-0 py-0 "
            disabled={isWorking}
            {...register("pdfCover", {
              required: isEditSession ? false : "This field is required!",
            })}
            accept="image/*"
          />
        </div>
        {errors?.pdfCover?.message && <Error>{errors.pdfCover.message}</Error>}
      </FormRow>

      <div className="flex justify-end gap-4 items-center mt-8">
        <ButtonOutline onClick={onCloseModal}>Cancel</ButtonOutline>
        <ButtonPrimary disabled={isWorking}>
          {isEditSession ? "Edit Note" : "Add Note"}
        </ButtonPrimary>
      </div>
    </form>
  );
}

export default CreateNoteForm;
