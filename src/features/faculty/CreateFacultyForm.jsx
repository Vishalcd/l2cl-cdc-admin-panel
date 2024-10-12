import { useForm } from "react-hook-form";

import {
  IconCalendarEvent,
  IconCode,
  IconFileDescription,
  IconGenderBigender,
  IconPhotoUp,
  IconTie,
  IconUser,
} from "@tabler/icons-react";

import ButtonOutline from "../../ui/ButtonOutline";
import ButtonPrimary from "../../ui/ButtonPrimary";
import FormLable from "../../ui/FormLable";
import Row from "../../ui/Row";
import FormRow from "../../ui/FormRow";
import Error from "../../ui/Error";
import useCreateFaculty from "./useCreateFaculty";
import useEditFaculty from "./useEditFaculty";

function CreateFacultyForm({ onCloseModal, facultyToEdit = {} }) {
  const { _id: editId, photo, ...editValues } = facultyToEdit;
  const isEditSession = Boolean(editId);

  const form = useForm({ defaultValues: isEditSession ? editValues : {} });
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const { isCreating, createFaculty } = useCreateFaculty();
  const { isEditing, editFaculty } = useEditFaculty();

  function onSubmit(data) {
    const formData = new FormData();
    formData.append("name", data.name);
    isEditSession
      ? data.photo.length === 0
        ? null
        : formData.append("photo", data.photo[0])
      : formData.append("photo", data.photo[0]);
    formData.append("gender", data.gender);
    formData.append("description", data.description);
    formData.append("work", data.work);
    formData.append("experience", Number(data.experience));
    formData.append("startDate", data.startDate);

    isEditSession
      ? editFaculty({ id: editId, data: formData }, { onSuccess: () => onCloseModal?.() })
      : createFaculty(formData, { onSuccess: () => onCloseModal?.() });
  }

  const isWorking = isCreating || isEditing;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className=" w-[36rem]">
      <FormRow
        icon={<IconUser width={24} height={24} stroke={2} />}
        label="Enter Name"
        htmlFor="name">
        <input
          disabled={isWorking}
          id="name"
          type="text"
          placeholder="Enter Name"
          className="px-3 py-2 rounded border border-zinc-200 w-80 file:cursor-pointer"
          {...register("name", { required: "This field is required!" })}
        />
        {errors?.name?.message && <Error>{errors.name.message}</Error>}
      </FormRow>

      <FormRow
        icon={<IconGenderBigender width={24} height={24} stroke={2} />}
        label="Select Gender"
        htmlFor="gender">
        <div className="w-80 flex gap-4 items-center py-2">
          <Row moreClasses="gap-1">
            <input
              disabled={isWorking}
              id="male"
              type="radio"
              name="gender"
              value="male"
              {...register("gender", { required: "This field is required!" })}
            />
            <FormLable name="gender" htmlFor="male">
              Male
            </FormLable>
          </Row>
          <Row moreClasses="gap-1">
            <input
              disabled={isWorking}
              id="female"
              type="radio"
              name="gender"
              value="female"
              {...register("gender", { required: "This field is required!" })}
            />
            <FormLable name="gender" htmlFor="female">
              Female
            </FormLable>
          </Row>
        </div>
        {errors?.gender?.message && <Error>{errors.gender.message}</Error>}
      </FormRow>

      <FormRow
        icon={<IconFileDescription width={24} height={24} stroke={2} />}
        label="Enter Description"
        htmlFor="description">
        <textarea
          id="description"
          disabled={isWorking}
          type="description"
          placeholder="Enter Description"
          className="px-3 py-2 h-22 rounded border border-zinc-200 w-80 file:cursor-pointer"
          {...register("description", { required: "This field is required!" })}
        />
        {errors?.description?.message && <Error>{errors.description.message}</Error>}
      </FormRow>

      <FormRow
        icon={<IconCode width={24} height={24} stroke={2} />}
        label="Enter Work Title"
        htmlFor="work">
        <input
          disabled={isWorking}
          id="work"
          type="text"
          placeholder="Enter Work"
          className="px-3 py-2 rounded border border-zinc-200 w-80 file:cursor-pointer"
          {...register("work", { required: "This field is required!" })}
        />
        {errors?.work?.message && <Error>{errors.work.message}</Error>}
      </FormRow>

      <FormRow
        icon={<IconTie width={24} height={24} stroke={2} />}
        label="Enter Experience"
        htmlFor="experience">
        <input
          disabled={isWorking}
          id="experience"
          type="number"
          placeholder="Enter Experience"
          className="px-3 py-2 rounded border border-zinc-200 w-80 file:cursor-pointer"
          {...register("experience", { required: "This field is required!" })}
        />
        {errors?.experience?.message && <Error>{errors.experience.message}</Error>}
      </FormRow>

      <FormRow
        icon={<IconCalendarEvent width={24} height={24} stroke={2} />}
        label="Enter Start Date"
        htmlFor="startDate">
        <input
          disabled={isWorking}
          id="startDate"
          type="date"
          placeholder="Enter StartDate"
          className="px-3 py-2 rounded border border-zinc-200 w-80 file:cursor-pointer"
          {...register("startDate", {
            required: isEditSession ? false : "This field is required!",
          })}
        />
        {errors?.startDate?.message && <Error>{errors.startDate.message}</Error>}
      </FormRow>

      <FormRow icon={<IconPhotoUp stroke={2} />} label="Upload Image" htmlFor="photo">
        <div className="flex items-center gap-3 w-80">
          {isEditSession && (
            <img
              className=" w-16 aspect-square border border-zinc-400 rounded-md   object-cover"
              src={`http://localhost:8000/img/faculty/${photo}`}
              alt="user-1 photo"
            />
          )}
          <input
            disabled={isWorking}
            id="photo"
            type="file"
            name="photo"
            accept="image/*"
            className="rounded border border-zinc-200 w-full file:cursor-pointer px-0 py-0 file:bg-violet-200 file:text-violet-600 file:px-4 file:py-3 file:leading-none file:border-none file:rounded-md file:mr-4 font-medium"
            {...register("photo", { required: isEditSession ? false : "This field is required!" })}
          />
        </div>
        {errors?.photo?.message && <Error>{errors.photo.message}</Error>}
      </FormRow>

      <div className="flex justify-end gap-4 items-center mt-8">
        <ButtonOutline disabled={isWorking} onClick={onCloseModal}>
          Cancel
        </ButtonOutline>
        <ButtonPrimary disabled={isWorking}>Add Faculty</ButtonPrimary>
      </div>
    </form>
  );
}

export default CreateFacultyForm;
