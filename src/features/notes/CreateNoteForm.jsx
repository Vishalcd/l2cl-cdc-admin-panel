import { IconBooks, IconNotes, IconPdf, IconPhotoUp } from "@tabler/icons-react";

import ButtonOutline from "../../ui/ButtonOutline";
import ButtonPrimary from "../../ui/ButtonPrimary";

import Multiselect from "multiselect-react-dropdown";
import { useState } from "react";

import { useForm } from "react-hook-form";
import FormRow from "../../ui/FormRow";
import Error from "../../ui/Error";
import useCreateNote from "./useCreateNote";
import useEditNote from "./useEditNote";

function CreateNoteForm({ onCloseModal, noteToEdit = {} }) {
  const [selectedSubject, setSelectedSubject] = useState([]);
  const { editNote, isEditing } = useEditNote();
  const { createNote, isCreating } = useCreateNote();

  const { _id: editId, ...editValues } = noteToEdit;
  const isEditSession = Boolean(editId);

  const form = useForm({ defaultValues: isEditSession ? editValues : {} });
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  function onSubmit(data) {
    data.pdfCover = data.pdfCover[0];

    const formData = new FormData();
    formData.append("pdfTitle", data.pdfTitle);
    formData.append("pdfLink", data.pdfLink);
    formData.append("subject", selectedSubject);
    formData.append("pdfCover", data.pdfCover);

    const editedData = { subject: data.subject, pdfTitle: data.pdfTitle, pdfLink: data.pdfLink };

    isEditSession
      ? editNote({ id: editId, data: editedData }, { onSuccess: () => onCloseModal?.() })
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
          <Multiselect
            className=" bg-zinc-50 rounded border border-zinc-200"
            options={["bca-1-sem", "bca-2-sem", "bca-3-sem", "bca-4-sem", "bca-5-sem", "bca-6-sem"]}
            isObject={false}
            onSelect={(e) => setSelectedSubject(e)}
            onRemove={(e) => setSelectedSubject(e)}
            placeholder="Select PDF Subject"
            hidePlaceholder={true}
            selectedValues={isEditSession ? editValues.subject.split(",") : []}
          />
        </div>
      </FormRow>

      {!isEditSession && (
        <FormRow icon={<IconPhotoUp stroke={2} />} label="Upload Image" htmlFor="pdfCover">
          <input
            type="file"
            id="pdfCover"
            name="pdfCover"
            className=" file:cursor-pointer bg-zinc-50 rounded border border-zinc-200 w-80 file:bg-violet-200 file:text-violet-600 file:px-4 file:py-3 file:leading-none file:border-none file:rounded-md file:mr-4 font-medium px-0 py-0 "
            disabled={isWorking}
            {...register("pdfCover", {
              required: isEditSession ? false : "This field is required!",
            })}
            accept="image/*"
          />
          {errors?.pdfCover?.message && <Error>{errors.pdfCover.message}</Error>}
        </FormRow>
      )}

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
